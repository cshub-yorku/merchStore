package com.MerchStore.backend.Dao;

import com.MerchStore.backend.Model.WaterBottles;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

public class WaterBottlesDao implements Dao<WaterBottles> {
    @Override
    public Optional<WaterBottles> get(long id) {
        String statement = "SELECT * FROM water_bottles where product_id = ?";

        try {
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();
            if (resultSet.next()) {
                WaterBottles waterBottles = new WaterBottles(resultSet.getLong("product_id"), resultSet.getString("colour"));
                return Optional.of(waterBottles);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return Optional.empty();
    }

    @Override
    public List<WaterBottles> getAll() {
        String statement = "SELECT * FROM water_bottles";
        LinkedList<WaterBottles> resultList = new LinkedList<>();
        try {
            Connection connection = ConnectionManager.getConnection();
            ResultSet resultSet = connection.prepareStatement(statement).executeQuery();
            while (resultSet.next()) {
                WaterBottles waterBottles = new WaterBottles(resultSet.getLong("product_id"), resultSet.getString("colour"));
                resultList.add(waterBottles);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return resultList;
    }

    @Override
    public boolean save(WaterBottles waterBottles) {
        String statement = "INSERT INTO water_bottles values (?, ?)";
        try {
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, waterBottles.getProductId());
            preparedStatement.setString(2, waterBottles.getColour());


            return preparedStatement.executeUpdate() == 1;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return false;
    }

    @Override
    public boolean update(WaterBottles waterBottles) {
        String statement = "UPDATE water_bottles set (product_id, colour) = (?, ?) where product_id = ?";
        try {
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, waterBottles.getProductId());
            preparedStatement.setString(2, waterBottles.getColour());
            preparedStatement.setLong(3, waterBottles.getProductId());

            return preparedStatement.executeUpdate() == 1;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return false;
    }

    @Override
    public boolean delete(WaterBottles waterBottles) {
        String statement = "DELETE from water_bottles where product_id = ?";
        try {
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, waterBottles.getProductId());

            return preparedStatement.executeUpdate() == 1;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return false;
    }
}
