package com.MerchStore.backend.Model;

import java.util.LinkedList;
import java.util.List;

public class Cart {
    private final long cartId;
    private final long userId;

    private List<CartItem> itemList = new LinkedList<>();

    public Cart(long cartId, long userId, List<CartItem> itemList){
        this.cartId = cartId;
        this.userId = userId;
        this.itemList = itemList;
    }

    public long getCartId() {
        return cartId;
    }

    public long getUserId() {
        return userId;
    }

    public List<CartItem> getItemList() {
        return itemList;
    }
}
