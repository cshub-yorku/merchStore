package com.MerchStore.backend.Exceptions;

public class ItemOutOfStockException extends RuntimeException{
    public ItemOutOfStockException(String message) {
        super(message);
    }

    public ItemOutOfStockException(String message, Throwable cause) {
        super(message, cause);
    }
}
