package com.MerchStore.backend.Exceptions;

public class InsufficientStockException extends Exception{
    public InsufficientStockException(String message) {
        super(message);
    }
}
