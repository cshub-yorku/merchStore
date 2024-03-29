package com.MerchStore.backend.Dao;

import com.MerchStore.backend.ConnectionPooling.ConnectionManager;
import com.MerchStore.backend.Model.UserAuthenticator;
import com.MerchStore.backend.Model.UserRoles;
import com.MerchStore.backend.Model.Users;
import com.MerchStore.backend.jwt.AuthenticationPayload.SignupRequest;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.Instant;

@Component
public class UserAuthenticatorDao implements UserDetailsService {
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        String statement = "SELECT password,user_id,first_name,last_name,email,phone_number,role FROM users where email = ?";

        Connection connection = ConnectionManager.getConnection();
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setString(1, email);
            ResultSet resultSet = preparedStatement.executeQuery();
            if (resultSet.next()) {
                Users userDetails = new Users(
                        resultSet.getLong("user_id"),
                        resultSet.getString("first_name"),
                        resultSet.getString("last_name"),
                        resultSet.getString("email"),
                        resultSet.getString("phone_number")
                );
                return new UserAuthenticator(userDetails,resultSet.getString("password"), resultSet.getString("role"));
            }
            throw new UsernameNotFoundException("Username not found: " + email);
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
    }

    public boolean existsByEmail(String email) {
        String statement = "SELECT email FROM users where email = ?";

        Connection connection = ConnectionManager.getConnection();
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setString(1, email);
            ResultSet resultSet = preparedStatement.executeQuery();
            if (resultSet.next()) {
                return true;
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
        return false;
    }

    public void save(SignupRequest user) {
        String statement = "INSERT INTO users (first_name,last_name,phone_number,user_id,email,password,role,active) VALUES (?,?,?,?,?,?,?,?)";

        Connection connection = ConnectionManager.getConnection();
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(statement);
            preparedStatement.setString(1,user.getFirstName());
            preparedStatement.setString(2,user.getLastName());
            preparedStatement.setString(3,user.getPhoneNumber());
            preparedStatement.setLong(4, Instant.now().toEpochMilli());
            preparedStatement.setString(5,user.getEmail());
            preparedStatement.setString(6,user.getPassword());
            preparedStatement.setString(7, UserRoles.Customer.toString());
            preparedStatement.setBoolean(8, false);

            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException(e.getMessage());
        }finally {
            ConnectionManager.releaseConnection(connection);
        }
    }
}
