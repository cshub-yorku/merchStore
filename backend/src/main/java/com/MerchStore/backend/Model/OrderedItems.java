package com.MerchStore.backend.Model;

public class OrderedItems {
    private final long productId;
    private double price;
    private int quantity;

    public OrderedItems(long productId, double price, int quantity) {
        this.productId = productId;
        this.price = price;
        this.quantity = quantity;
    }

    public long getProductId() {
        return productId;
    }
    public double getPrice() {
        return price;
    }
    public int getQuantity() {
        return quantity;
    }
}
