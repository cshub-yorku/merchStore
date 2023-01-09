package com.MerchStore.backend.Model;

public class OrderedItems {

    private final long orderId;
    private final long productId;

    private double price;

    private int quantity;

    public OrderedItems(long orderId, long productId, double price, int quantity){
        this.orderId = orderId;
        this.productId = productId;
        this.price = price;
        this.quantity = quantity;
    }

    public long getOrderId() {
        return orderId;
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
