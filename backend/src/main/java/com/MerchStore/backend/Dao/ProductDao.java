package com.MerchStore.backend.Dao;

import com.MerchStore.backend.ConnectionPooling.ConnectionManager;
import com.MerchStore.backend.Model.Product;

import java.sql.*;
import java.util.*;

public class ProductDao implements Dao<Product> {

    @Override
    public Optional<Product> get(long id) {
        String statement = "SELECT * FROM product where product_id = ?";

        Connection connection = ConnectionManager.getConnection();
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();
            if (resultSet.next()) {
                Array imagesArray = resultSet.getArray("images");
                String[] images = (String[])imagesArray.getArray();
                Product product = new Product(resultSet.getLong("product_id"), resultSet.getString("description"), resultSet.getString("name"), resultSet.getDouble("price"), resultSet.getInt("stock"), images);
                return Optional.of(product);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return Optional.empty();
    }

    @Override
    public List<Product> getAll() {
        String statement = "SELECT * FROM product";
        LinkedList<Product> resultList = new LinkedList<>();
        Connection connection = ConnectionManager.getConnection();
        try {
            ResultSet resultSet = connection.prepareStatement(statement).executeQuery();
            while (resultSet.next()) {
                Array imagesArray = resultSet.getArray("images");
                String[] images = (String[])imagesArray.getArray();
                Product product = new Product(resultSet.getLong("product_id"), resultSet.getString("description"), resultSet.getString("name"), resultSet.getDouble("price"), resultSet.getInt("stock"), images);
                resultList.add(product);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return resultList;
    }

    @Override
    public boolean save(Product product) {
        String statement = "INSERT INTO product values (?, ?, ?, ?, ?, ?)";
        Connection connection = ConnectionManager.getConnection();
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, product.getProductId());
            preparedStatement.setString(2, product.getDescription());
            preparedStatement.setString(3, product.getName());
            preparedStatement.setDouble(4, product.getPrice());
            preparedStatement.setInt(5, product.getStock());
            String[] images = product.getImages();
            Array imagesArray = connection.createArrayOf("text", images);
            preparedStatement.setArray(6, imagesArray);

            return preparedStatement.executeUpdate() == 1;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return false;
    }

    @Override
    public boolean update(Product product) {
        String statement = "UPDATE product set (description, name, price, stock, images) = (?, ?, ?, ?, ?) where product_id = ?";
        Connection connection = ConnectionManager.getConnection();
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setString(1, product.getDescription());
            preparedStatement.setString(2, product.getName());
            preparedStatement.setDouble(3, product.getPrice());
            preparedStatement.setInt(4, product.getStock());
            String[] images = product.getImages();
            Array imagesArray = connection.createArrayOf("text", images);
            preparedStatement.setArray(5, imagesArray);
            preparedStatement.setLong(6, product.getProductId());

            return preparedStatement.executeUpdate() == 1;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return false;
    }

    public boolean updateProductBatch(HashMap<Long,Integer> productsCurrentState){
        String statement = "UPDATE product set stock = (select stock from product where product_id = ?) - ? where product_id = ?";
        Connection connection = ConnectionManager.getConnection();
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            productsCurrentState.forEach((id,qty) -> {
                try {
                    preparedStatement.setLong(1,id);
                    preparedStatement.setInt(2,qty);
                    preparedStatement.setLong(3,id);
                    preparedStatement.addBatch();
                } catch (SQLException e) {
                    throw new RuntimeException(e);
                }
            });

            return preparedStatement.executeUpdate() == 1;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return false;
    }
    @Override
    public boolean delete(Product product) {
        String statement = "DELETE from product where product_id = ?";
        Connection connection = ConnectionManager.getConnection();
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, product.getProductId());

            return preparedStatement.executeUpdate() == 1;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return false;
    }

    public List<Product> getProductsById(List<Long> productIds){
        String sql = "SELECT * FROM products WHERE product_id IN (%s)";

        StringJoiner joiner = new StringJoiner(",");
        for (int i = 0; i < productIds.size(); i++) {
            joiner.add("?");
        }

        sql = String.format(sql,joiner.toString());
        LinkedList<Product> resultList = new LinkedList<>();
        Connection connection = ConnectionManager.getConnection();
        try {
            ResultSet resultSet = connection.prepareStatement(sql).executeQuery();
            while (resultSet.next()) {
                Array imagesArray = resultSet.getArray("images");
                String[] images = (String[])imagesArray.getArray();
                Product product = new Product(resultSet.getLong("product_id"), resultSet.getString("description"), resultSet.getString("name"), resultSet.getDouble("price"), resultSet.getInt("stock"), images);
                resultList.add(product);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return resultList;
    }
}
