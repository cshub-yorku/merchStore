package com.MerchStore.backend.Dao;

import com.MerchStore.backend.ConnectionPooling.ConnectionManager;
import com.MerchStore.backend.Model.Order;
import com.MerchStore.backend.Model.OrderedItems;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

public class OrderedItemsDao {
    public boolean save(List<OrderedItems> orderedItems, long order_id){
        String statement = "INSERT INTO ordered_items values (?, ?, ?, ?)";
        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);

            for(OrderedItems i: orderedItems){
                preparedStatement.setLong(1, order_id);
                preparedStatement.setDouble(2, i.getPrice());
                preparedStatement.setInt(3, i.getQuantity());
                preparedStatement.setLong(4, i.getProductId());
                preparedStatement.addBatch();
            }
            return preparedStatement.executeUpdate() == orderedItems.size();
        }catch (SQLException e){
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return false;
    }
}
