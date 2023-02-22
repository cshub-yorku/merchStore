package com.MerchStore.backend.Dao;

import com.MerchStore.backend.ConnectionPooling.FlywayService.ConnectionManager;
import com.MerchStore.backend.Model.Cart;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

public class CartDao implements Dao<Cart>{
    @Override
    public Optional<Cart> get(long id) {
        String statement = "SELECT * FROM cart where cart_id = ?";

        try{
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();
            if(resultSet.next()){
                Cart cart = new Cart(resultSet.getLong("cart_id"), resultSet.getLong("user_id"));
                return Optional.of(cart);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return Optional.empty();
    }

    @Override
    public List<Cart> getAll() {
        String statement = "SELECT * FROM cart";
        LinkedList<Cart> resultList = new LinkedList<>();
        try{
            Connection connection = ConnectionManager.getConnection();
            ResultSet resultSet = connection.prepareStatement(statement).executeQuery();
            while(resultSet.next()){
                Cart cart = new Cart(resultSet.getLong("cart_id"), resultSet.getLong("user_id"));
                resultList.add(cart);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return resultList;
    }

    @Override
    public boolean save(Cart cart){
        String statement = "INSERT INTO cart values (?, ?)";
        try{
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, cart.getCartId());
            preparedStatement.setLong(2, cart.getUserId());

            return preparedStatement.executeUpdate() == 1;
        }catch (SQLException e){
            System.out.println(e.getMessage());
        }
        return false;
    }

    @Override
    public boolean update(Cart cart) {
    throw new UnsupportedOperationException("Unable to update cart");
    }

    @Override
    public boolean delete(Cart cart) {
        String statement = "DELETE from cart where cart_id = ?";
        try{
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, cart.getCartId());

            return preparedStatement.executeUpdate() == 1;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return false;
    }

    public Optional<Cart> getCartByUserId(long id) {
        String statement = "SELECT * FROM cart where user_id = ?";

        try{
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();
            if(resultSet.next()){
                Cart cart = new Cart(resultSet.getLong("cart_id"), resultSet.getLong("user_id"));
                return Optional.of(cart);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return Optional.empty();
    }
}
