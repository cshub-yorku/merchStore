package com.MerchStore.backend.Dao;

import com.MerchStore.backend.ConnectionPooling.FlywayService.ConnectionManager;
import com.MerchStore.backend.Model.VerifyUser;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;
@Component
public class VerifyUserDao implements Dao<VerifyUser>{

    @Override
    public Optional<VerifyUser> get(long id) {
        String statement = "SELECT * FROM verify_user where user_id = ?";

        try {
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();
            if (resultSet.next()) {
                VerifyUser verifyUser = new VerifyUser(resultSet.getLong("user_id"), resultSet.getString("verification_code"));
                return Optional.of(verifyUser);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return Optional.empty();
    }

    @Override
    public List<VerifyUser> getAll() {
        throw new UnsupportedOperationException("Unable to getAll");
    }

    @Override
    public boolean save(VerifyUser verifyUser) {
        String statement = "INSERT INTO verify_user values (?, ?)";
        try {
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setLong(1, verifyUser.getUserId());
            preparedStatement.setString(2, verifyUser.getVerificationCode());

            return preparedStatement.executeUpdate() == 1;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return false;
    }

    @Override
    public boolean update(VerifyUser verifyUser) {
        String statement = "UPDATE verify_user set verification_code = ? where user_id = ?";
        try {
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setString(1, verifyUser.getVerificationCode());
            preparedStatement.setLong(2, verifyUser.getUserId());

            return preparedStatement.executeUpdate() == 1;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return false;
    }

    @Override
    public boolean delete(VerifyUser verifyUser) {
        throw new UnsupportedOperationException("Unable to delete");
    }

    public Optional<VerifyUser> getByCode(String code) {
        String statement = "SELECT * FROM verify_user where verification_code = ?";

        try {
            Connection connection = ConnectionManager.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setString(1, code);
            ResultSet resultSet = preparedStatement.executeQuery();
            if (resultSet.next()) {
                VerifyUser verifyUser = new VerifyUser(resultSet.getLong("user_id"), resultSet.getString("verification_code"));
                return Optional.of(verifyUser);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return Optional.empty();
    }


}
