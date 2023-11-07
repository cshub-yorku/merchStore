package com.MerchStore.backend.Model;

import java.util.HashMap;
import java.util.List;

public class Cart {
    private final long cartId;
    private final long userId;

    private HashMap<Long,CartItem> itemList;

    public Cart(long cartId, long userId, HashMap<Long,CartItem> itemList){
        this.cartId = cartId;
        this.userId = userId;
        this.itemList = itemList;
    }

    public long getCartId() {
        return cartId;
    }

    public long getUserId() {
        return userId;
    }

    public HashMap<Long,CartItem> getItemList() {
        return itemList;
    }

    public List<Long> getProductsId(){
        return itemList.keySet().stream().toList();
    }

    public CartItem getProductFromCart(Long productId){
        return this.itemList.get(productId);
    }

    public void addItemToCart(CartItem item){
        this.itemList.put(item.getProductId(),item);
    }
}
