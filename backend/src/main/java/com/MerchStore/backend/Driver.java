package com.MerchStore.backend;

import com.MerchStore.backend.ConnectionPooling.FlyWayService.FlywayMigration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Driver {
	public static void main(String[] args) {
		System.out.println("Starting backend service...");
		// Database migration
		FlywayMigration.migrate();
		SpringApplication.run(Driver.class, args);
	}
}
