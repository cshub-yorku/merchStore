package com.MerchStore.backend.ConnectionPooling;

import org.apache.commons.dbcp.BasicDataSource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

public class ConnectionManager {
    public final static String DATASOURCE_USERNAME = System.getenv("datasource_username");
    public final static String DATASOURCE_PASSWORD = System.getenv("datasource_password");
    public final static String DATASOURCE_URL = System.getenv("datasource_url");
    private static final BasicDataSource dataSource = new BasicDataSource();
    static {
        dataSource.setUrl(DATASOURCE_URL);
        dataSource.setUsername(DATASOURCE_USERNAME);
        dataSource.setPassword(DATASOURCE_PASSWORD);
        ArrayList<String> datasourceInit = new ArrayList<String>();
        datasourceInit.add("SET SCHEMA 'merchstore';");
        dataSource.setConnectionInitSqls(datasourceInit);
        dataSource.setMinIdle(5);
        dataSource.setMaxIdle(10);
        dataSource.setMaxActive(20);
    }

    public static Connection getConnection(){
        try{
            return dataSource.getConnection();
        }catch (SQLException e){
            System.out.println(e.getMessage());
            e.printStackTrace();
            throw new IllegalStateException("Can not connect to Database");
        }
    }

    public static void releaseConnection(Connection connection){
        try{
            connection.close();
        }catch (SQLException ignored){
        }
    }
}
