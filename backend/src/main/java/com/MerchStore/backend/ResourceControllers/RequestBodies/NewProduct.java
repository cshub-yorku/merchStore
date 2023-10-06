package com.MerchStore.backend.ResourceControllers.RequestBodies;

public record NewProduct(int stock,int price, String[] images, String description, String  name) {}
