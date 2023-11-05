package com.MerchStore.backend.Model;

public class CartItem {


    private final long productId;
    private int quantity;

    public CartItem(long productId, int quantity){
        this.productId = productId;
        this.quantity = quantity;
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
