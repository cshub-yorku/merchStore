package com.MerchStore.backend.business;

import com.MerchStore.backend.Dao.CartDao;
import com.MerchStore.backend.Dao.CartListDao;
import com.MerchStore.backend.Dao.ProductDao;
import com.MerchStore.backend.Exceptions.ItemOutOfStockException;
import com.MerchStore.backend.Model.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.*;


public class CartLogic {
    private  static Logger logger = LoggerFactory.getLogger(CartLogic.class);
    public static APIResponse<?> addItemToCart(int quantity, long productId, Users user){
        CartDao cartDao = new CartDao();
        CartListDao cartListDao = new CartListDao();
        List<String> errors = new LinkedList<>();
        Optional<Product> product = getProduct(productId);
        if(product.isPresent()){
            cartDao.getCartByUserId(user.getUserId()).ifPresent(cart -> {
                try{
                    if(cart.getProductFromCart(productId) != null){
                        CartItem cartItem = cart.getProductFromCart(productId);
                        if(validateItemStock(quantity, cartItem, product.get())){
                            throw new ItemOutOfStockException("The max available stock at the moment is: " + product.get().getStock() + " for product with ID: " + productId);
                        }
                        cartItem.setQuantity(cartItem.getQuantity() + quantity);
                        cartListDao.update(cart.getCartId(),cartItem);
                    }else {
                        CartItem item = new CartItem(productId,quantity);
                        if(validateItemStock(quantity, item, product.get())){
                            throw new ItemOutOfStockException("The max available stock at the moment is: " + product.get().getStock() + " for product with ID: " + productId);
                        }
                        cart.addItemToCart(item);
                        CartItem cartItem = cart.getProductFromCart(productId);
                        cartListDao.save(cart.getCartId(),cartItem);
                    }
                }catch (Exception e){
                    logger.error(e.getMessage());
                    e.printStackTrace();
                    errors.add(e.getMessage());
                }
            });
        }else{
            errors.add("No item exists with ID: " + productId);
        }
        return new APIResponse<Object>(errors, Collections.emptyList());
    }

    public static APIResponse<?> getMyCartItems(long userId){
        CartDao cartDao = new CartDao();
        List<CartItem> items = new LinkedList<>();
        List<String> errors = new LinkedList<>();

        cartDao.getCartByUserId(userId).ifPresent(cart -> {
            items.addAll(cart.getItemList().values());
        });

        if(items.isEmpty()){
            errors.add("Empty Cart");
        }

        return new APIResponse<>(errors,items);
    }
    private static Optional<Product> getProduct(long id){
        return new ProductDao().get(id);
    }

    private static boolean validateItemStock(int qty, CartItem cartItem, Product product){
        return cartItem.getQuantity() + qty > product.getStock();
    }
}
