package com.MerchStore.backend.Model;

public class Product {

    private final long productId;

    private String description;

    private String name;

    private double price;

    private long stock;


    public Product(long productId, String description, String name, double price, long stock){
        this.productId = productId;
        this.description = description;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    public long getProductId() {
        return productId;
    }

    public String getDescription() {
        return description;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public long getStock() {
        return stock;
    }
}
