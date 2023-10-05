package com.MerchStore.backend.Model;

import com.MerchStore.backend.Dao.CartDao;
import com.MerchStore.backend.Dao.Dao;

import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.LinkedList;
import java.util.List;

public class Cart {
    private final long cartId;
    private final long userId;
    private List<CartItem> itemList = new LinkedList<>();

    public Cart(long cartId, long userId){
        this.cartId = cartId;
        this.userId = userId;
    }

    public long getCartId() {
        return cartId;
    }

    public long getUserId() {
        return userId;
    }

    public List<CartItem> getItemList(){
        return this.itemList;
    }

    public void setItemList(List<CartItem> itemList) {
        this.itemList = itemList;
    }

    public static void createNewCart(long userId){
        Dao<Cart> dao = new CartDao();
        Cart newCart = new Cart(LocalDateTime.now().toEpochSecond(ZoneOffset.UTC),userId);
        dao.save(newCart);
    }
}
