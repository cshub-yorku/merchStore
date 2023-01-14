package com.MerchStore.backend.Model;

public class OrderedItems {

    private final long orderId;
    private final long productId;

    private double price;

    private long quantity;

    public OrderedItems(long orderId, double price, long quantity, long productId){
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

    public long getQuantity() {
        return quantity;
    }
}
