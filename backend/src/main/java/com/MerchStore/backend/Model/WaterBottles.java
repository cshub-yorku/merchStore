package com.MerchStore.backend.Model;

public class WaterBottles {

    private final long productId;

    private String colour;

    public WaterBottles(long productId, String color){
        this.productId = productId;
        this.colour = color;
    }

    public long getProductId() {
        return productId;
    }

    public String getColour() {
        return colour;
    }
}
