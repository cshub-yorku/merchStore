package com.MerchStore.backend.Dao;

import com.MerchStore.backend.ConnectionPooling.ConnectionManager;
import com.MerchStore.backend.Model.Clothes;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

public class ClothesDao implements Dao<Clothes>{
    @Override
    public Optional<Clothes> get(long id) {
        String statement = "SELECT * FROM clothes where product_id = ?";

        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();
            if(resultSet.next()){
                Clothes clothes = new Clothes(resultSet.getLong("product_id"), resultSet.getString("colour"), resultSet.getString("sex"), resultSet.getString("size"));
                return Optional.of(clothes);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return Optional.empty();
    }

    @Override
    public List<Clothes> getAll() {
        String statement = "SELECT * FROM clothes";
        LinkedList<Clothes> resultList = new LinkedList<>();
        Connection connection = ConnectionManager.getConnection();
        try{
            ResultSet resultSet = connection.prepareStatement(statement).executeQuery();
            while(resultSet.next()){
                Clothes clothes = new Clothes(resultSet.getLong("product_id"), resultSet.getString("colour"), resultSet.getString("sex"), resultSet.getString("size"));
                resultList.add(clothes);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return resultList;
    }

    @Override
    public boolean save(Clothes clothes){
        String statement = "INSERT INTO clothes values (?, ?, ?, ?)";
        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, clothes.getProductId());
            preparedStatement.setString(2, clothes.getColour());
            preparedStatement.setString(3, clothes.getSize());
            preparedStatement.setString(4, clothes.getSex());


            return preparedStatement.executeUpdate() == 1;
        }catch (SQLException e){
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return false;
    }

    @Override
    public boolean update(Clothes clothes) {
        String statement = "UPDATE clothes set (colour, size, sex) = (?, ?, ?) where product_id = ?";
        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setString(1, clothes.getColour());
            preparedStatement.setString(2, clothes.getSize());
            preparedStatement.setString(3, clothes.getSex());
            preparedStatement.setLong(4, clothes.getProductId());

            return preparedStatement.executeUpdate() == 1;
        }catch (SQLException e){
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return false;
    }

    @Override
    public boolean delete(Clothes clothes) {
        String statement = "DELETE from clothes where product_id = ?";
        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, clothes.getProductId());

            return preparedStatement.executeUpdate() == 1;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return false;
    }
}
