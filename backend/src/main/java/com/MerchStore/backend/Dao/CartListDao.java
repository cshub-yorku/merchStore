package com.MerchStore.backend.Dao;

import com.MerchStore.backend.ConnectionPooling.ConnectionManager;
import com.MerchStore.backend.Model.CartItem;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;

public class CartListDao{

    public static List<CartItem> getAll(Connection connection, long cart_id) {
        String statement = "SELECT * FROM cart_list where cart_id = ? ";
        LinkedList<CartItem> resultList = new LinkedList<>();
        //Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1,cart_id);
            ResultSet resultSet = preparedStatement.executeQuery();
            while(resultSet.next()){
                CartItem cart_list = new CartItem(resultSet.getLong("cart_id"), resultSet.getLong("product_id"), resultSet.getInt("product_quantity"));
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

    // if new product is being added to cart
    public static boolean save(CartItem cart_list){
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

    // If item is already placed in cart
    public static boolean update(CartItem cart_list) {

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

    public static boolean delete(CartItem cart_list) {
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
