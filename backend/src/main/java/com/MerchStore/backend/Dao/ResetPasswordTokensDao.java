package com.MerchStore.backend.Dao;

import com.MerchStore.backend.ConnectionPooling.ConnectionManager;
import com.MerchStore.backend.Model.ResetTokens;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Optional;

public class ResetPasswordTokensDao {
    public Optional<ResetTokens> getAllActiveTokensByEmail(String token){
        String statement = "SELECT * FROM reset_password_tokens where token = ?";
        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setString(1,token);
            ResultSet resultSet = preparedStatement.executeQuery();
            if(resultSet.next()){
                return Optional.of(new ResetTokens(
                        resultSet.getString("email"),
                        resultSet.getString("token"),
                        resultSet.getBoolean("valid_token")
                ));
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return Optional.empty();
    }

    public void insertNewToken(ResetTokens tokens){
        String statement = "INSERT INTO reset_password_tokens (email,token) VALUES (?,?)";
        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setString(1,tokens.getEmail());
            preparedStatement.setString(2,tokens.getToken());
            preparedStatement.execute();
        }catch (SQLException e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
    }

    public void disableToken(ResetTokens token){
        String statement = "UPDATE reset_password_tokens\n" +
                "SET valid_token=? " +
                "WHERE email=? AND token=?";
        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setBoolean(1,false);
            preparedStatement.setString(2,token.getEmail());
            preparedStatement.setString(3,token.getToken());
            preparedStatement.execute();
        }catch (SQLException e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
    }

    public void updateUserPassword(String email, String password){
        String statement =
                "UPDATE users " +
                        "SET \"password\" = ? WHERE email = ?";
        Connection connection = ConnectionManager.getConnection();
        try{
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setString(1, password);
            preparedStatement.setString(2, email);
            preparedStatement.execute();
        }catch (SQLException e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
    }
}
