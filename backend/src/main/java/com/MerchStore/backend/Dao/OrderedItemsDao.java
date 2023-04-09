package com.MerchStore.backend.Dao;

import com.MerchStore.backend.ConnectionPooling.ConnectionManager;
import com.MerchStore.backend.Model.OrderedItems;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

public class OrderedItemsDao implements Dao<OrderedItems>{

    private final long order_id;

    public OrderedItemsDao(long orderId) {
        order_id = orderId;
    }

    /**
     *
     * @param id This is the product ID
     * @return an optional object
     */
    @Override
    public Optional<OrderedItems> get(long id) {
        String statement = "SELECT * FROM ordered_items where order_id = ? AND product_id = ? ";

        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, order_id);
            preparedStatement.setLong(2, id);

            ResultSet resultSet = preparedStatement.executeQuery();
            if(resultSet.next()){
                OrderedItems orderedItems = new OrderedItems(resultSet.getLong("order_id"), resultSet.getDouble("price"), resultSet.getInt("product_quantity"), resultSet.getLong("product_id"));
                return Optional.of(orderedItems);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return Optional.empty();
    }

    @Override
    public List<OrderedItems> getAll() {
        String statement = "SELECT * FROM ordered_list where order_id = ?";
        LinkedList<OrderedItems> resultList = new LinkedList<>();
        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, order_id);
            ResultSet resultSet = preparedStatement.executeQuery();

            while(resultSet.next()){
                OrderedItems orderedItems = new OrderedItems(resultSet.getLong("order_id"), resultSet.getDouble("price"), resultSet.getInt("product_quantity"), resultSet.getLong("product_id"));
                resultList.add(orderedItems);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return resultList;
    }

    @Override
    public boolean save(OrderedItems orderedItems){
        String statement = "INSERT INTO ordered_items values (?, ?, ?, ?)";
        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, orderedItems.getOrderId());
            preparedStatement.setDouble(2, orderedItems.getPrice());
            preparedStatement.setInt(3, orderedItems.getQuantity());
            preparedStatement.setLong(4, orderedItems.getProductId());


            return preparedStatement.executeUpdate() == 1;
        }catch (SQLException e){
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return false;
    }

    @Override
    public boolean update(OrderedItems orderedItems) {
        throw new UnsupportedOperationException("Unable to update orderedItems");
    }

    @Override
    public boolean delete(OrderedItems orderedItems) {
        throw new UnsupportedOperationException("Unable to delete orderedItems");
    }
}
