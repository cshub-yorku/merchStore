package com.MerchStore.backend.Model;

public class CartList {

    private final long cartId;
    private final long productId;
    private long quantity;

    public CartList(long cartId, long productId, long quantity){
        this.cartId = cartId;
        this.productId = productId;
        this.quantity = quantity;
    }

    public long getCartId() {
        return cartId;
    }

    public long getProductId() {
        return productId;
    }

    public long getQuantity() {
        return quantity;
    }
}
