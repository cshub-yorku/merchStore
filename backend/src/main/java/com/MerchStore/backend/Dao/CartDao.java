package com.MerchStore.backend.Dao;

import com.MerchStore.backend.ConnectionPooling.ConnectionManager;
import com.MerchStore.backend.Model.Cart;
import com.MerchStore.backend.Model.CartItem;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

public class CartDao{

    /**
     * Get cart details using cart Id
     * @param statement -> prepared statement, usually configured to query cart and cart list tables by cart id or user id
     * @return current state of Cart
     */
    private Optional<Cart> get(PreparedStatement statement) {
        Connection connection = ConnectionManager.getConnection();
        try{
            ResultSet resultSet = statement.executeQuery();
            HashMap<Long,CartItem> itemList = new HashMap<>();
            long userId = 0;
            long cartId = 0;
            while(resultSet.next()){
                itemList.put(
                        resultSet.getLong("product_id"),new CartItem(resultSet.getLong("product_id"),resultSet.getInt("qty"))
                );
                if(resultSet.isFirst()){
                    cartId = resultSet.getLong("cart_id");
                    userId = resultSet.getLong("user_id");
                }
            }

            if(userId != 0){
                return Optional.of(new Cart(cartId,userId,itemList));
            }

        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return Optional.empty();
    }

    public boolean save(Cart cart){
        String statement = "INSERT INTO cart values (?, ?)";
        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, cart.getCartId());
            preparedStatement.setLong(2, cart.getUserId());

            return preparedStatement.executeUpdate() == 1;
        }catch (SQLException e){
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return false;
    }
    public boolean delete(Cart cart) {
        String statement = "DELETE from cart_list where cart_id = ?";
        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, cart.getCartId());

            return preparedStatement.executeUpdate() == cart.getItemList().size();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return false;
    }
    public Optional<Cart> getCartByUserId(long id) {
        Connection connection = ConnectionManager.getConnection();
        try{
            String statement = "SELECT cart.cart_id as cart_id, user_id as user_id, product_id as product_id, product_quantity as qty FROM cart left join cart_list " +
                    "on cart.user_id = ?";
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1,id);
            return this.get(preparedStatement);
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return Optional.empty();
    }
    public Optional<Cart> getCartByCartId(long id) {
        Connection connection = ConnectionManager.getConnection();
        try{
            String statement = "SELECT cart.cart_id as cart_id, user_id as user_id, product_id as product_id, product_quantity as qty FROM cart left join cart_list " +
                    "on cart.cart_id = ?";
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1,id);
            return this.get(preparedStatement);
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return Optional.empty();
    }
}
