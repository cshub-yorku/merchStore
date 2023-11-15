package com.MerchStore.backend.Model.enums;

import java.util.Locale;

public enum PaymentType {
    Square("Square"),
    Cash("Cash");

    private String value;

    PaymentType(String value) {
        this.value = value;
    }

    public static PaymentType of(String value){
        try{
           return PaymentType.valueOf(value);
        }catch (IllegalArgumentException e){
            System.out.println(e.getMessage());
            e.printStackTrace();
            return null;
        }
    }
}
