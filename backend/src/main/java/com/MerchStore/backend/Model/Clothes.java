package com.MerchStore.backend.Model;

public class Clothes {

    private final long productId;

    private String colour;

    private String size;

    private final String sex;

    public Clothes(long productId, String colour, String sex, String size){
        this.productId = productId;
        this.colour = colour;
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

    public String getColour() {
        return colour;
    }
}
