package com.MerchStore.backend.Dao;

import com.MerchStore.backend.ConnectionPooling.ConnectionManager;
import com.MerchStore.backend.Model.Cart;
import com.MerchStore.backend.Model.CartItem;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

public class CartListDao {

    public boolean save(long cartId,CartItem item){
        String statement = "INSERT INTO cart_list values (?, ?, ?) ";
        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1,cartId);
            preparedStatement.setLong(2, item.getProductId());
            preparedStatement.setInt(3, item.getQuantity());
            return preparedStatement.executeUpdate() == 1;
        }catch (SQLException e){
            System.out.println(e.getMessage());
            e.printStackTrace();
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return false;
    }

    public boolean update(long cartId,CartItem item) {
        String statement = "UPDATE cart_list set product_quantity = ? where cart_id = ? AND product_id= ?";
        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setInt(1, item.getQuantity());
            preparedStatement.setLong(2,cartId);
            preparedStatement.setLong(3, item.getProductId());

            return preparedStatement.executeUpdate() == 1;
        }catch (SQLException e){
            System.out.println(e.getMessage());
            e.printStackTrace();
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return false;
    }

    public boolean delete(CartItem cart_list,long cartId) {
        String statement = "DELETE from cart_list where cart_id = ? AND product_id= ? ";
        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, cartId);
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
