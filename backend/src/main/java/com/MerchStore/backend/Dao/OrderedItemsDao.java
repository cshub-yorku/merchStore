package com.MerchStore.backend.Dao;

import com.MerchStore.backend.Model.OrderedItems;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

public class OrderedItemsDao implements Dao<OrderedItems>{

    @Override
    public Optional<OrderedItems> get(long id) {
        String statement = "SELECT * FROM ordered_items where order_id = ?";

        try{
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();
            if(resultSet.next()){
                OrderedItems orderedItems = new OrderedItems(resultSet.getLong("order_id"), resultSet.getDouble("price"), resultSet.getLong("product_quantity"), resultSet.getLong("product_id"));
                return Optional.of(orderedItems);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return Optional.empty();
    }

    @Override
    public List<OrderedItems> getAll() {
        String statement = "SELECT * FROM ordered_list";
        LinkedList<OrderedItems> resultList = new LinkedList<>();
        try{
            Connection connection = ConnectionManager.getConnection();
            ResultSet resultSet = connection.prepareStatement(statement).executeQuery();
            while(resultSet.next()){
                OrderedItems orderedItems = new OrderedItems(resultSet.getLong("order_id"), resultSet.getDouble("price"), resultSet.getLong("product_quantity"), resultSet.getLong("product_id"));
                resultList.add(orderedItems);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return resultList;
    }

    @Override
    public boolean save(OrderedItems orderedItems){
        String statement = "INSERT INTO ordered_items values (?, ?, ?, ?)";
        try{
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, orderedItems.getOrderId());
            preparedStatement.setDouble(2, orderedItems.getPrice());
            preparedStatement.setLong(3, orderedItems.getQuantity());
            preparedStatement.setLong(4, orderedItems.getProductId());


            return preparedStatement.executeUpdate() == 1;
        }catch (SQLException e){
            System.out.println(e.getMessage());
        }
        return false;
    }

    @Override
    public boolean update(OrderedItems orderedItems) {
        String statement = "UPDATE ordered_items set (product_id, colour, size, sex) = (?, ?, ?, ?) where order_id = ?";
        try{
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, orderedItems.getOrderId());
            preparedStatement.setDouble(2, orderedItems.getPrice());
            preparedStatement.setLong(3, orderedItems.getQuantity());
            preparedStatement.setLong(4, orderedItems.getProductId());
            preparedStatement.setLong(5, orderedItems.getOrderId());

            return preparedStatement.executeUpdate() == 1;
        }catch (SQLException e){
            System.out.println(e.getMessage());
        }
        return false;
    }

    @Override
    public boolean delete(OrderedItems orderedItems) {
        String statement = "DELETE from ordered_items where order_id = ?";
        try{
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, orderedItems.getProductId());

            return preparedStatement.executeUpdate() == 1;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return false;
    }
}
