package com.MerchStore.backend.Dao;

import com.MerchStore.backend.Model.CartList;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

public class CartListDao implements Dao<CartList>{

    @Override
    public Optional<CartList> get(long id) {
        String statement = "SELECT * FROM cart_list where cart_id = ?";

        try{
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();
            if(resultSet.next()){
                CartList cart_list = new CartList(resultSet.getLong("cart_id"), resultSet.getLong("product_id"), resultSet.getLong("product_quantity"));
                return Optional.of(cart_list);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return Optional.empty();
    }

    @Override
    public List<CartList> getAll() {
        String statement = "SELECT * FROM cart_list";
        LinkedList<CartList> resultList = new LinkedList<>();
        try{
            Connection connection = ConnectionManager.getConnection();
            ResultSet resultSet = connection.prepareStatement(statement).executeQuery();
            while(resultSet.next()){
                CartList cart_list = new CartList(resultSet.getLong("cart_id"), resultSet.getLong("product_id"), resultSet.getLong("product_quantity"));
                resultList.add(cart_list);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return resultList;
    }

    @Override
    public boolean save(CartList cart_list){
        String statement = "INSERT INTO cart_list values (?, ?, ?)";
        try{
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, cart_list.getCartId());
            preparedStatement.setLong(2, cart_list.getProductId());
            preparedStatement.setLong(3, cart_list.getQuantity());

            return preparedStatement.executeUpdate() == 1;
        }catch (SQLException e){
            System.out.println(e.getMessage());
        }
        return false;
    }

    @Override
    public boolean update(CartList cart_list) {
        String statement = "UPDATE cart_list set (cart_id, product_id, product_quantity) = (?, ?, ?) where cart_id = ?";
        try{
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, cart_list.getCartId());
            preparedStatement.setLong(2, cart_list.getProductId());
            preparedStatement.setLong(3, cart_list.getQuantity());
            preparedStatement.setLong(4, cart_list.getCartId());

            return preparedStatement.executeUpdate() == 1;
        }catch (SQLException e){
            System.out.println(e.getMessage());
        }
        return false;
    }

    @Override
    public boolean delete(CartList cart_list) {
        String statement = "DELETE from cart_list where cart_id = ?";
        LinkedList<CartList> resultList = new LinkedList<>();
        try{
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, cart_list.getCartId());

            return preparedStatement.executeUpdate() == 1;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return false;
    }
}
