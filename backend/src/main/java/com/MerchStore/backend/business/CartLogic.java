package com.MerchStore.backend.business;

import com.MerchStore.backend.Dao.CartDao;
import com.MerchStore.backend.Dao.CartListDao;
import com.MerchStore.backend.Dao.Dao;
import com.MerchStore.backend.Dao.ProductDao;
import com.MerchStore.backend.Model.*;

import java.util.*;

public class CartLogic {
    public static APIResponse<Cart> addItemToCart(int quantity, long productId, Users user){
        CartDao cartDao = new CartDao();
        Dao<Product> productDao = new ProductDao();
        List<String> errorList = new ArrayList<>();
        Optional<Product> product = productDao.get(productId);


        return cartDao.getCartByUserId(user.getUserId()).map(cartInfo -> {
            if(product.isEmpty() ){
                errorList.add("Product with id: " + productId + " does not exist");
            }else if(product.get().getStock() < quantity){
                errorList.add("Unable to add item. Quantity too large.");
            }


            if(errorList.isEmpty()){
                List<CartItem> cartItem = cartInfo.getItemList();
                CartItem newItemInfo = new CartItem(cartInfo.getCartId(),productId,quantity);
                if(quantity > 0){
                    if(cartItem.stream().anyMatch(item -> item.getProductId() == productId)){
                        CartListDao.update(newItemInfo);
                    }else{
                        CartListDao.save(newItemInfo);
                    }
                }else{
                    CartListDao.delete(newItemInfo);
                }
            }
            return new APIResponse<Cart>(errorList,Collections.emptyList());
        }).orElse(new APIResponse<>(Arrays.stream(new String[]{"Cart not found for email: " + user.getEmail()})
                .toList(),Collections.emptyList()));
    }
}
