package com.MerchStore.backend.Dao;

import com.MerchStore.backend.ConnectionPooling.ConnectionManager;
import com.MerchStore.backend.Model.Order;
import com.MerchStore.backend.Model.enums.OrderStatus;
import com.MerchStore.backend.Model.OrderedItems;
import com.MerchStore.backend.Model.enums.PaymentType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

public class OrderDao{
    private static final Logger logger = LoggerFactory.getLogger(OrderDao.class);

    public Optional<Order> get(long id) {
        String statement = "select o.payment_type as ptype, o.order_id as order_id, o.user_id as user_id, oi.product_quantity as qty, oi.product_id as product_id, oi.price as price," +
                "o.order_status as status from ordered_items oi INNER JOIN orders o ON o.order_id = oi.order_id  and o.order_id = ?";

        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();
            List<OrderedItems> items = new LinkedList<>();
            long order_id = 0;
            long userId = 0;
            OrderStatus status = null;
            PaymentType type = null;
            while(resultSet.next()){
                items.add(
                        new OrderedItems(resultSet.getLong("product_id"),resultSet.getDouble("price"),resultSet.getInt("qty"))
                );
                if(resultSet.isFirst()) {
                  order_id = resultSet.getInt("order_id");
                  userId = resultSet.getLong("user_id");
                  status =  OrderStatus.valueOf(resultSet.getString("status"));
                  type = PaymentType.valueOf(resultSet.getString("ptype"));
                }
            }
            Order order = new Order(userId, order_id, type, status);
            order.setOrderedItems(items);
            return Optional.of(order);
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return Optional.empty();
    }


    public List<Order> getOrderHistoryByUserId(long userId){
        String statement = "select payment_type as ptype, o.order_id as order_id, o.user_id as user_id, o.order_status as status, oi.product_quantity as qty, oi.product_id as product_id, oi.price as price " +
                "from ordered_items oi inner join orders o on o.order_id = oi.order_id   and o.user_id = ?";
        Connection connection = ConnectionManager.getConnection();
        HashMap<Long,Order> orderList = new HashMap<>();
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, userId);
            ResultSet resultSet = preparedStatement.executeQuery();

            while(resultSet.next()){
                long orderId = resultSet.getLong("order_id");
                PaymentType type = PaymentType.valueOf(resultSet.getString("ptype"));
                Order order = new Order(
                        resultSet.getLong("user_id"),
                        orderId,
                        type, OrderStatus.valueOf(resultSet.getString("status"))
                );
                order.addItemToOrderList(new OrderedItems(resultSet.getLong("product_id"),resultSet.getDouble("price"),
                        resultSet.getInt("qty")));
                processOrderedItemResult(orderList,orderId,order);
            }
        }catch (Exception e){
            logger.error(e.getMessage());
            e.printStackTrace();
        }
        return orderList.values().stream().toList();
    }

    public boolean save(Order order){
        String statement = "INSERT INTO orders values (?, ?::money ,?,?,?)";
        Connection connection = ConnectionManager.getConnection();
        BigDecimal totalAmount = BigDecimal.valueOf(order.getTotalAmount());
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, order.getOrderId());
            preparedStatement.setString(2, totalAmount.toString());
            preparedStatement.setString(3, order.getOrderStatus().toString());
            preparedStatement.setLong(4,order.getUserId());
            preparedStatement.setString(5,order.getType().toString());
            return preparedStatement.executeUpdate() == 1;
        }catch (SQLException e){
           logger.error(e.getMessage());
           e.printStackTrace();
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return false;
    }

    private void processOrderedItemResult(HashMap<Long,Order> orderList,long orderId,Order order){
        if(orderList.get(orderId) != null){
            Order existingOrder = orderList.get(orderId);
            order.getOrderedItems().stream().findFirst().ifPresent(existingOrder::addItemToOrderList);
        }else{
            orderList.put(orderId,order);
        }
    }
}
