package com.MerchStore.backend.Model;

public class CartList {

    private final long cartId;
    private final long productId;
    private int quantity;

    public CartList(long cartId, long productId, int quantity){
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

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
