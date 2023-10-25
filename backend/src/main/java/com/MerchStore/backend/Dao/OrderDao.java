package com.MerchStore.backend.Dao;

import com.MerchStore.backend.ConnectionPooling.ConnectionManager;
import com.MerchStore.backend.Model.Order;
import com.MerchStore.backend.Model.OrderStatus;
import com.MerchStore.backend.Model.OrderedItems;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

public class OrderDao{
    public Optional<Order> get(long id) {
        String statement = "select o.order_id as order_id, o.user_id as user_id, oi.product_quantity as qty, oi.product_id as product_id, oi.price as price," +
                "to.order_status as status from ordered_items oi, orders o where oi.order_id = ?";

        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();
            List<OrderedItems> items = new LinkedList<>();
            long order_id = 0;
            long userId = 0;
            OrderStatus status = null;
            while(resultSet.next()){
                items.add(
                        new OrderedItems(resultSet.getLong("product_id"),resultSet.getDouble("price"),resultSet.getInt("qty"))
                );
                if(resultSet.isFirst()) {
                  order_id = resultSet.getInt("order_id");
                  userId = resultSet.getLong("user_id");
                  status =  OrderStatus.valueOf(resultSet.getString("status"));
                }
            }
            Order order = new Order(userId, order_id, status);
            order.setOrderedItems(items);
            return Optional.of(order);
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return Optional.empty();
    }


    public boolean save(Order order){
        String statement = "INSERT INTO order values (?, ?,?)";
        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, order.getOrderId());
            preparedStatement.setDouble(2, order.getTotalAmount());
            preparedStatement.setString(3, order.getOrderStatus().toString());
            return preparedStatement.executeUpdate() == 1;
        }catch (SQLException e){
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return false;
    }
}
