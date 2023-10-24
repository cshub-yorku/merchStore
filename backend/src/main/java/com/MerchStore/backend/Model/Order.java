package com.MerchStore.backend.Model;

import java.util.List;
import java.util.Random;

public class Order {
    private final long orderId;

    private double totalAmount;

    private OrderStatus orderStatus;

    private List<OrderedItems> orderedItems;

    public Order(long orderId, OrderStatus orderStatus){
        this.orderId = orderId;
        this.orderStatus = orderStatus;
        this.totalAmount = calculateTotalAmount();
    }
    public Order(OrderStatus orderStatus){
        this.orderId = generateOrderId();
        this.orderStatus = orderStatus;
        this.totalAmount = calculateTotalAmount();
    }


    public long getOrderId() {
        return orderId;
    }

    public double getTotalAmount() {
        return totalAmount;
    }

    public OrderStatus getOrderStatus() {
        return orderStatus;
    }

    public List<OrderedItems> getOrderedItems() {
        return orderedItems;
    }

    public void setOrderedItems(List<OrderedItems> orderedItems) {
        this.orderedItems = orderedItems;
    }

    private long generateOrderId(){
        return new Random().nextInt(9999999);
    }

    private double calculateTotalAmount(){
        return orderedItems.stream()
                .mapToDouble(product -> product.getPrice() * product.getQuantity())
                .sum();
    }
}
