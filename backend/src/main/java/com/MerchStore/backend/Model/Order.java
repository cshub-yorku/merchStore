package com.MerchStore.backend.Model;

import com.MerchStore.backend.Dao.ProductDao;
import com.MerchStore.backend.Model.enums.OrderStatus;
import com.MerchStore.backend.Model.enums.PaymentType;

import java.util.LinkedList;
import java.util.List;
import java.util.Random;

public class Order {
    private final long userId;
    private final long orderId;
    private final PaymentType type;
    private double totalAmount;

    private OrderStatus orderStatus;

    private List<OrderedItems> orderedItems = new LinkedList<>();

    public Order(long userId, long orderId, PaymentType type, OrderStatus orderStatus){
        this.userId = userId;
        this.orderId = orderId;
        this.type = type;
        this.orderStatus = orderStatus;
        calculateTotalAmount();
    }
    public Order(long userId, PaymentType type, OrderStatus orderStatus, List<OrderedItems> orderedItems){
        this.userId = userId;
        this.type = type;
        this.orderId = generateOrderId();
        this.orderStatus = orderStatus;
        this.orderedItems = orderedItems;
        calculateTotalAmount();
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
        calculateTotalAmount();
    }

    private long generateOrderId(){
        return new Random().nextInt(9999999);
    }

    private void calculateTotalAmount(){
        this.totalAmount = orderedItems.stream()
                .mapToDouble(product -> product.getPrice() * product.getQuantity())
                .sum();
    }

    public void addItemToOrderList(OrderedItems newItem){
        this.orderedItems.add(newItem);
        this.calculateTotalAmount();
    }

    public long getUserId() {
        return userId;
    }

    public PaymentType getType() {
        return type;
    }

    public static Order createNewOrder(Cart cart, OrderStatus orderStatus, PaymentType type){
        ProductDao dao = new ProductDao();

        List<Product> productList = dao.getProductsById(cart.getProductsId());
        List<OrderedItems> items = new LinkedList<>();

        productList.stream().filter(product -> cart.getProductFromCart(product.getProductId()) != null).forEach(product -> {
            int qty = cart.getProductFromCart(product.getProductId()).getQuantity();
            items.add(new OrderedItems(product.getProductId(),product.getPrice(),qty));
        });
        return new Order(cart.getUserId(), type, orderStatus,items);
    }
}

















