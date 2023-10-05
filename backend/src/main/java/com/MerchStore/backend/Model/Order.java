package com.MerchStore.backend.Model;

public class Order {
    private final long orderId;

    private int quantity;

    private double totalAmount;

    private String orderStatus;

    private final long cartId;

    public Order(long orderId, int quantity, double totalAmount, String orderStatus, long cartId){
        this.orderId = orderId;
        this.quantity = quantity;
        this.totalAmount = totalAmount;
        this.orderStatus = orderStatus;
        this.cartId = cartId;
    }

    public long getOrderId() {
        return orderId;
    }

    public int getQuantity() {
        return quantity;
    }

    public double getTotalAmount() {
        return totalAmount;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public long getCartId() {
        return cartId;
    }
}
