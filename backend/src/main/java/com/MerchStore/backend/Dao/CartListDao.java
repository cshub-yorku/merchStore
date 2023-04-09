package com.MerchStore.backend.Dao;

import com.MerchStore.backend.ConnectionPooling.ConnectionManager;
import com.MerchStore.backend.Model.CartList;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

public class CartListDao implements Dao<CartList>{
    private final long cart_id;

    public CartListDao(long userId) {
        this.cart_id = userId;
    }

    @Override
    public Optional<CartList> get(long id) {
        String statement = "SELECT * FROM cart_list where cart_id = ?";

        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();
            if(resultSet.next()){
                CartList cart_list = new CartList(resultSet.getLong("cart_id"), resultSet.getLong("product_id"), resultSet.getInt("product_quantity"));
                return Optional.of(cart_list);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return Optional.empty();
    }

    @Override
    public List<CartList> getAll() {
        String statement = "SELECT * FROM cart_list where cart_id = ? ";
        LinkedList<CartList> resultList = new LinkedList<>();
        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1,this.cart_id);
            ResultSet resultSet = preparedStatement.executeQuery();
            while(resultSet.next()){
                CartList cart_list = new CartList(resultSet.getLong("cart_id"), resultSet.getLong("product_id"), resultSet.getInt("product_quantity"));
                resultList.add(cart_list);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return resultList;
    }

    @Override
    public boolean save(CartList cart_list){
        String statement = "INSERT INTO cart_list values (?, ?, ?)";
        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, cart_list.getCartId());
            preparedStatement.setLong(2, cart_list.getProductId());
            preparedStatement.setInt(3, cart_list.getQuantity());

            return preparedStatement.executeUpdate() == 1;
        }catch (SQLException e){
            System.out.println(e.getMessage());
            e.printStackTrace();
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return false;
    }

    @Override
    public boolean update(CartList cart_list) {
        String statement = "UPDATE cart_list set product_quantity = ? where cart_id = ? AND product_id= ? ";
        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setInt(1, cart_list.getQuantity());
            preparedStatement.setLong(2, cart_list.getCartId());
            preparedStatement.setLong(3, cart_list.getProductId());
            return preparedStatement.executeUpdate() == 1;
        }catch (SQLException e){
            System.out.println(e.getMessage());
            e.printStackTrace();
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return false;
    }

    @Override
    public boolean delete(CartList cart_list) {
        String statement = "DELETE from cart_list where cart_id = ? AND product_id= ? ";
        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, cart_list.getCartId());
            preparedStatement.setLong(2, cart_list.getProductId());
            return preparedStatement.executeUpdate() == 1;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return false;
    }
}
