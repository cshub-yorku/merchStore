package com.MerchStore.backend.Model;

public class Cart {

    private final long cartId;

    private final long userId;

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
}
