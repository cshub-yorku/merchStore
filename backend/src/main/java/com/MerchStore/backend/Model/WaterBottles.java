package com.MerchStore.backend.Model;

public class WaterBottles {

    private final long productId;

    private String color;

    public WaterBottles(long productId, String color){
        this.productId = productId;
        this.color = color;
    }

    public long getProductId() {
        return productId;
    }

    public String getColor() {
        return color;
    }
}
