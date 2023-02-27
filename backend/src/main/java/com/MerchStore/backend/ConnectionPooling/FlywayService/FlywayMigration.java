package com.MerchStore.backend.ConnectionPooling.FlywayService;

import org.flywaydb.core.Flyway;

import static com.MerchStore.backend.ConnectionPooling.FlywayService.ConnectionManager.*;

public class FlywayMigration {

    private FlywayMigration(){}

    public static void migrate() {
        Flyway flyway = Flyway.configure().
                dataSource(DATASOURCE_URL,DATASOURCE_USERNAME,DATASOURCE_PASSWORD)
                .schemas("merchstore").load();
        flyway.migrate();
    }
}
