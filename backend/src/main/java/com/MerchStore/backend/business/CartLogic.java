package com.MerchStore.backend.business;

import com.MerchStore.backend.Dao.CartDao;
import com.MerchStore.backend.Dao.CartListDao;
import com.MerchStore.backend.Dao.Dao;
import com.MerchStore.backend.Dao.ProductDao;
import com.MerchStore.backend.Model.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class CartLogic {
    public static APIResponse<Cart> addItemToCart(int quantity, long productId, Users user){
        CartDao cartDao = new CartDao();
        List<String> errorList = new ArrayList<>();
        return cartDao.getCartByUserId(user.getUserId()).map(cartInfo -> {
            Dao<CartList> cartListDao = new CartListDao(cartInfo.getCartId());
            CartList cartList = new CartList(cartInfo.getCartId(),productId,quantity);
            Dao<Product> productDao = new ProductDao();

            if(productDao.get(productId).isEmpty()){
                errorList.add("Product with id: " + productId + " does not exist");
            }
            if(quantity > 0){
                if(cartListDao.getAll().stream().anyMatch(cartItem -> cartItem.getProductId() == productId)){
                    cartListDao.update(cartList);
                }else{
                    cartListDao.save(cartList);
                }
            }else{
                cartListDao.delete(cartList);
            }
            return new APIResponse<Cart>(errorList,Collections.emptyList());
        }).orElse(new APIResponse<>(Arrays.stream(new String[]{"Cart not found for email: " + user.getEmail()})
                .toList(),Collections.emptyList()));
    }
}
