package com.MerchStore.backend.Dao;

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

        try{
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();
            if(resultSet.next()){
                Clothes clothes = new Clothes(resultSet.getLong("product_id"), resultSet.getString("colour"), resultSet.getString("sex"), resultSet.getString("size"));
                return Optional.of(clothes);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return Optional.empty();
    }

    @Override
    public List<Clothes> getAll() {
        String statement = "SELECT * FROM clothes";
        LinkedList<Clothes> resultList = new LinkedList<>();
        try{
            Connection connection = ConnectionManager.getConnection();
            ResultSet resultSet = connection.prepareStatement(statement).executeQuery();
            while(resultSet.next()){
                Clothes clothes = new Clothes(resultSet.getLong("product_id"), resultSet.getString("colour"), resultSet.getString("sex"), resultSet.getString("size"));
                resultList.add(clothes);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return resultList;
    }

    @Override
    public boolean save(Clothes clothes){
        String statement = "INSERT INTO clothes values (?, ?, ?, ?)";
        try{
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, clothes.getProductId());
            preparedStatement.setString(2, clothes.getColour());
            preparedStatement.setString(3, clothes.getSize());
            preparedStatement.setString(4, clothes.getSex());


            return preparedStatement.executeUpdate() == 1;
        }catch (SQLException e){
            System.out.println(e.getMessage());
        }
        return false;
    }

    @Override
    public boolean update(Clothes clothes) {
        String statement = "UPDATE clothes set (product_id, colour, size, sex) = (?, ?, ?, ?) where product_id = ?";
        try{
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, clothes.getProductId());
            preparedStatement.setString(2, clothes.getColour());
            preparedStatement.setString(3, clothes.getSize());
            preparedStatement.setString(4, clothes.getSex());
            preparedStatement.setLong(5, clothes.getProductId());

            return preparedStatement.executeUpdate() == 1;
        }catch (SQLException e){
            System.out.println(e.getMessage());
        }
        return false;
    }

    @Override
    public boolean delete(Clothes clothes) {
        String statement = "DELETE from clothes where product_id = ?";
        LinkedList<Clothes> resultList = new LinkedList<>();
        try{
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, clothes.getProductId());

            return preparedStatement.executeUpdate() == 1;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return false;
    }
}
