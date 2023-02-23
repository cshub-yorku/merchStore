package com.MerchStore.backend.ConnectionPooling.FlywayService;

import org.flywaydb.core.Flyway;

public class FlywayMigration {
    private FlywayMigration(){}

    public static void migrate() {
        // TODO Change the hardcoded URL, Username and password to values from resources/application.properties file
       /* URI dbUri;
        try {
            dbUri = new URI(System.getenv("DATABASE_URL"));
        } catch (URISyntaxException e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
            throw new RuntimeException(e.getMessage());
        }*/
        // TODO Change parameters passed to dataSource to be from dbURI object
        Flyway flyway = Flyway.configure().
                dataSource("jdbc:postgresql://localhost:5432/postgres","postgres","12345678a!")
                .schemas("merchstore").load();
        flyway.migrate();
    }
}
