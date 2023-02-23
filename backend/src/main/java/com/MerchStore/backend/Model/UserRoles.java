package com.MerchStore.backend.Model;

public enum UserRoles {
    Customer("CUSTOMER_ROLE"),
    Admin("ADMIN_ROLE");

    private String value;

    UserRoles(String value) {
        this.value = value;
    }

    public static UserRoles of(String value){
        try{
            return UserRoles.valueOf(value);
        }catch (IllegalArgumentException e){
            System.out.println(e.getMessage());
            e.printStackTrace();
            return null;
        }
    }
}
