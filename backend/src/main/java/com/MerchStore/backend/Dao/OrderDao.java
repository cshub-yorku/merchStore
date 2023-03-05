package com.MerchStore.backend.Dao;

import com.MerchStore.backend.ConnectionPooling.ConnectionManager;
import com.MerchStore.backend.Model.Order;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

public class OrderDao implements Dao<Order>{

    @Override
    public Optional<Order> get(long id) {
        String statement = "SELECT * FROM order where order_id = ?";

        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();
            if(resultSet.next()){
                Order order = new Order(resultSet.getLong("order_id"), resultSet.getInt("product_quantity"), resultSet.getDouble("total_amount"), resultSet.getString("order_status"), resultSet.getLong("cart_id"));
                return Optional.of(order);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return Optional.empty();
    }

    @Override
    public List<Order> getAll() {
        String statement = "SELECT * FROM order";
        LinkedList<Order> resultList = new LinkedList<>();
        Connection connection = ConnectionManager.getConnection();
        try{
            ResultSet resultSet = connection.prepareStatement(statement).executeQuery();
            while(resultSet.next()){
                Order order = new Order(resultSet.getLong("order_id"), resultSet.getInt("product_quantity"), resultSet.getDouble("total_amount"), resultSet.getString("order_status"), resultSet.getLong("cart_id"));
                resultList.add(order);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return resultList;
    }

    @Override
    public boolean save(Order order){
        String statement = "INSERT INTO order values (?, ?, ?, ?, ?)";
        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, order.getOrderId());
            preparedStatement.setInt(2, order.getQuantity());
            preparedStatement.setDouble(3, order.getTotalAmount());
            preparedStatement.setString(4, order.getOrderStatus());
            preparedStatement.setLong(5, order.getCartId());


            return preparedStatement.executeUpdate() == 1;
        }catch (SQLException e){
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
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
