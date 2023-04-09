package com.MerchStore.backend;

import com.MerchStore.backend.ConnectionPooling.FlyWayService.FlywayMigration;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Driver {
	private static final Logger logger = LoggerFactory.getLogger(Driver.class);
	public static void main(String[] args) {
		logger.info("Starting backend service...");
		// Database migration
		FlywayMigration.migrate();
		SpringApplication.run(Driver.class, args);
	}
}
