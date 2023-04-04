package com.MerchStore.backend.ConnectionPooling.FlywayService;

import org.apache.commons.dbcp.BasicDataSource;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

public class ConnectionManager {
    private static final BasicDataSource dataSource = new BasicDataSource();
    static {
        dataSource.setUrl("jdbc:postgresql://localhost:5432/postgres");
        dataSource.setUsername("postgres");
        dataSource.setPassword("postgres");
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
            e.getMessage();
            throw new IllegalStateException("Can not connect to Database");
        }
    }
}
