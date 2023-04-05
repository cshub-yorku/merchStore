package com.MerchStore.backend.ConnectionPooling.FlyWayService;

import com.MerchStore.backend.ConnectionPooling.ConnectionManager;
import org.flywaydb.core.Flyway;

public class FlywayMigration {

    private FlywayMigration(){}

    public static void migrate() {
        Flyway flyway = Flyway.configure().
                dataSource(ConnectionManager.DATASOURCE_URL, ConnectionManager.DATASOURCE_USERNAME, ConnectionManager.DATASOURCE_PASSWORD)
//                dataSource("jdbc:postgresql://localhost:5432/postgres", "postgres", "1234")
                .schemas("merchstore").load();
        flyway.migrate();
    }
}
