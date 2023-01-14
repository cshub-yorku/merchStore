package com.MerchStore.backend.Model;

public class CartList {

    private final long cartId;
    private final long productId;

    private String description;

    private final String name;

    private long price;

    private long stock;

    private long quantity;

    public CartList(long cartId, long productId, long quantity){
        this.cartId = cartId;
        this.productId = productId;
        this.description = description;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.quantity = quantity;
    }

    public long getCartId() {
        return cartId;
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

    public long getPrice() {
        return price;
    }

    public long getStock() {
        return stock;
    }

    public long getQuantity() {
        return quantity;
    }
}
