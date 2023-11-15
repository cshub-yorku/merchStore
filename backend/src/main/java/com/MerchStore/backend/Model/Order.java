package com.MerchStore.backend.Model;

import com.MerchStore.backend.Dao.ProductDao;
import com.MerchStore.backend.Dao.UsersDao;
import com.MerchStore.backend.Model.enums.OrderStatus;
import com.MerchStore.backend.Model.enums.PaymentType;
import jakarta.servlet.http.HttpServletRequest;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
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
        this.totalAmount += newItem.getPrice();
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

    public static String prepareConfirmationEmail(Order order, HttpServletRequest request){
        String body = """
                Dear [[name]],<br><br>
                
                             
                Thank you for your purchase! We're excited to let you know that your order has been confirmed. Here are the details of your transaction:<br><br>
                
                                
                Order Number: [[orderNumber]]<br>
                Date: [[orderDate]]<br>
                                
                Total Amount: $[[totalAmount]]<br><br>
                                
                Pickup date & location:<br><br>
                [[pickupInfo]]<br><br>
                                 
                Need Help?<br><br>
                If you have any questions or need to make changes to your order, feel free to contact us at [[CSHUBEmail]].<br><br>
                                
                Thank you for supporting the CSHUB Club. We hope you enjoy your purchase!<br><br>
                                
                Best Regards,<br>
                CSHUB Club Team<br>
                """;
        Users user  = new UsersDao().get(order.userId).orElseThrow(RuntimeException::new);
        body = body.replace("[[name]]",user.getFirstName());
        body = body.replace("[[orderDate]]", LocalDateTime.now().format(DateTimeFormatter.ofPattern("MM/dd/yyyy HH:mm")));
        body = body.replace("[[orderNumber]]",String.valueOf(order.getOrderId()));
        body = body.replace("[[totalAmount]]",String.valueOf(order.getTotalAmount()));
        body = body.replace("URL",request.getLocalAddr()+"/my/"+order.getOrderId());

        return body;
    }
}

















