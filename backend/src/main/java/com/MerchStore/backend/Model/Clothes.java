package com.MerchStore.backend.Model;

public class Clothes {

    private final long productId;

    private String color;

    private String size;

    private final String sex;

    public Clothes(long productId, String color, String sex, String size){
        this.productId = productId;
        this.color = color;
        this.sex = sex;
        this.size = size;
    }

    public long getProductId() {
        return productId;
    }
    public String getSex() {
        return sex;
    }

    public String getSize() {
        return size;
    }

    public String getColor() {
        return color;
    }
}
