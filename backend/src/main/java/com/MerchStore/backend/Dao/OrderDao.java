package com.MerchStore.backend.Dao;

import com.MerchStore.backend.ConnectionPooling.FlywayService.ConnectionManager;
import com.MerchStore.backend.Exceptions.InsufficientStockException;
import com.MerchStore.backend.Model.Order;
import com.MerchStore.backend.Model.OrderedItems;
import com.MerchStore.backend.Model.Product;
import com.MerchStore.backend.Model.Users;
import com.MerchStore.backend.Service.EmailService;

import javax.naming.InsufficientResourcesException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

public class OrderDao implements Dao<Order>{

        private Users user = new Users();
    @Override
    public Optional<Order> get(long id) {
        String statement = "SELECT * FROM order where order_id = ?";

        try{
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();
            if(resultSet.next()){
                Order order = new Order(resultSet.getLong("order_id"), resultSet.getInt("product_quantity"), resultSet.getDouble("total_amount"), resultSet.getString("order_status"), resultSet.getLong("cart_id"));
                return Optional.of(order);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return Optional.empty();
    }

    @Override
    public List<Order> getAll() {
        String statement = "SELECT * FROM order";
        LinkedList<Order> resultList = new LinkedList<>();
        try{
            Connection connection = ConnectionManager.getConnection();
            ResultSet resultSet = connection.prepareStatement(statement).executeQuery();
            while(resultSet.next()){
                Order order = new Order(resultSet.getLong("order_id"), resultSet.getInt("product_quantity"), resultSet.getDouble("total_amount"), resultSet.getString("order_status"), resultSet.getLong("cart_id"));
                resultList.add(order);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return resultList;
    }

    public boolean save(Order order){
        String statement = "INSERT INTO order (order_id, product_quantity, total_amount, order_status, cart_id) VALUES (?, ?, ?, ?, ?)";
        try{
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, order.getOrderId());
            preparedStatement.setInt(2, order.getQuantity());
            preparedStatement.setDouble(3, order.getTotalAmount());
            preparedStatement.setString(4, order.getOrderStatus());
            preparedStatement.setLong(5, order.getCartId());

            boolean saved = preparedStatement.executeUpdate() == 1;
            if (saved) {
                // Update DB with stock
                List<OrderedItems> orderedItemsList = order.getOrderedItemsList();
                for (OrderedItems orderedItem : orderedItemsList) {
                    long productId = orderedItem.getProductId();
                    int quantity = orderedItem.getQuantity();
                    ProductDao productDao = new ProductDao();
                    Optional<Product> optionalProduct = productDao.get(productId);
                    if (optionalProduct.isPresent()) {
                        Product product = optionalProduct.get();
                        int currentStock = product.getStock();
                        if (currentStock >= quantity) {
                            product.setStock(currentStock - quantity);
                            productDao.update(product);
                        } else {
                            // Throw an exception if there is not enough stock
                           throw new InsufficientStockException("Insufficient stock for product with ID " + productId);
                        }
                    } else {
                        // Throw an exception if the product is not found
                        throw new IllegalArgumentException("Product with ID " + productId + " not found");
                    }
                }

                //Send Email
                EmailService emailService = new EmailService();
                String recipientEmail = user.getEmail(); ;
                String subject = "Your CSHub Store Order Details";
                String body = "Thank you for your order. Here are your order details:\n\n" +
                        "Order ID: " + order.getOrderId() + "\n" +
                        "Total Amount: " + order.getTotalAmount() + "\n" +
                        "Order Status: " + order.getOrderStatus() + "\n\n" +
                        "Thank you for shopping with us!";
                //Add recipient Email
                emailService.sendEmail(recipientEmail,subject, body);
            }
            return saved;
        } catch (SQLException e){
            System.out.println(e.getMessage());
        } catch (InsufficientStockException e) {
            throw new RuntimeException(e);
        }
        return false;
    }

    @Override
    public boolean update(Order order) {
        throw new UnsupportedOperationException("Unable to update order");
    }

    @Override
    public boolean delete(Order order) {
        throw new UnsupportedOperationException("Unable to delete order");
    }
}
