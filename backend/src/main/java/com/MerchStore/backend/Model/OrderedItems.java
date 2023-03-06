package com.MerchStore.backend.Model;

import java.util.List;

public class OrderedItems {

    private final long orderId;
    private final long productId;

    private double price;

    private int quantity;

    private List<OrderedItems> orderedItemsList;

    public OrderedItems(long orderId, double price, int quantity, long productId){
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
