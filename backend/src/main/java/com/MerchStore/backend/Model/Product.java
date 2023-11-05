package com.MerchStore.backend.Model;

import com.MerchStore.backend.ResourceControllers.RequestBodies.NewProduct;

import java.time.LocalDateTime;

public class Product {

    private final long productId;

    private String description;

    private String name;

    private double price;

    private int stock;

    private String[] images;


    public Product(long productId, String description, String name, double price, int stock, String[] images){
        this.productId = productId;
        this.description = description;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.images = images;
    }
    // This constructor should be used for creating new objects.

    public Product(NewProduct product){
        this.productId = LocalDateTime.now().getNano() % 997;
        this.description = product.description();
        this.name = product.name();
        this.price = product.price();
        this.stock = product.stock();
        this.images = product.images();
    }

    public long getProductId() {
        return productId;
    }

    public String getDescription() {
        return description;
    }

    public String[] getImages() {
        return images;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public int getStock() {
        return stock;
    }
}
