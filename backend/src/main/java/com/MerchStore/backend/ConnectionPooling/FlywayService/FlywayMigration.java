package com.MerchStore.backend.ConnectionPooling.FlywayService;

import org.flywaydb.core.Flyway;

import static com.MerchStore.backend.ConnectionPooling.FlywayService.ConnectionManager.*;

public class FlywayMigration {

    private FlywayMigration(){}

    public static void migrate() {
        System.out.print(DATASOURCE_URL);

        Flyway flyway = Flyway.configure().
                dataSource("jdbc:postgresql://0.0.0.0:5432/postgres","postgres","1234")
                .schemas("merchstore").load();
        flyway.migrate();
    }
}
