package com.MerchStore.backend.Dao;

import com.MerchStore.backend.Model.Product;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

public class ProductDao implements Dao<Product> {

    @Override
    public Optional<Product> get(long id) {
        String statement = "SELECT * FROM product where product_id = ?";

        try {
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();
            if (resultSet.next()) {
                Product product = new Product(resultSet.getLong("product_id"), resultSet.getString("description"), resultSet.getString("name"), resultSet.getDouble("price"), resultSet.getLong("stock"));
                return Optional.of(product);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return Optional.empty();
    }

    @Override
    public List<Product> getAll() {
        String statement = "SELECT * FROM product";
        LinkedList<Product> resultList = new LinkedList<>();
        try {
            Connection connection = ConnectionManager.getConnection();
            ResultSet resultSet = connection.prepareStatement(statement).executeQuery();
            while (resultSet.next()) {
                Product product = new Product(resultSet.getLong("product_id"), resultSet.getString("description"), resultSet.getString("name"), resultSet.getDouble("price"), resultSet.getLong("stock"));
                resultList.add(product);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return resultList;
    }

    @Override
    public boolean save(Product product) {
        String statement = "INSERT INTO product values (?, ?, ?, ?, ?)";
        try {
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, product.getProductId());
            preparedStatement.setString(2, product.getDescription());
            preparedStatement.setString(3, product.getName());
            preparedStatement.setDouble(4, product.getPrice());
            preparedStatement.setLong(5, product.getStock());


            return preparedStatement.executeUpdate() == 1;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return false;
    }

    @Override
    public boolean update(Product product) {
        String statement = "UPDATE product set (product_id, description, name, price, stock) = (?, ?, ?, ?, ?) where product_id = ?";
        try {
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, product.getProductId());
            preparedStatement.setString(2, product.getDescription());
            preparedStatement.setString(3, product.getName());
            preparedStatement.setDouble(4, product.getPrice());
            preparedStatement.setLong(5, product.getStock());
            preparedStatement.setLong(6, product.getProductId());

            return preparedStatement.executeUpdate() == 1;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return false;
    }

    @Override
    public boolean delete(Product product) {
        String statement = "DELETE from product where product_id = ?";
        try {
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, product.getProductId());

            return preparedStatement.executeUpdate() == 1;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return false;
    }
}
