package com.MerchStore.backend.Dao;

import com.MerchStore.backend.ConnectionPooling.ConnectionManager;
import com.MerchStore.backend.Model.Cart;
import com.MerchStore.backend.Model.CartItem;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

public class CartListDao {

    public boolean save(Cart cart){
        String statement = "INSERT INTO cart_list values (?, ?, ?)";
        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            for(CartItem i: cart.getItemList()){
                preparedStatement.setLong(1, cart.getCartId());
                preparedStatement.setLong(2, i.getProductId());
                preparedStatement.setInt(3, i.getQuantity());
                preparedStatement.addBatch();
            }
            return preparedStatement.executeUpdate() == cart.getItemList().size();
        }catch (SQLException e){
            System.out.println(e.getMessage());
            e.printStackTrace();
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return false;
    }

    public boolean update(List<CartItem> cart_list, long cartId) {
        String statement = "UPDATE cart_list set product_quantity = ? where cart_id = ? AND product_id= ? ";
        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);

            for(CartItem i: cart_list){
                preparedStatement.setInt(1, i.getQuantity());
                preparedStatement.setLong(2, cartId);
                preparedStatement.setLong(3, i.getProductId());
                preparedStatement.addBatch();
            }
            return preparedStatement.executeUpdate() == cart_list.size();
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
