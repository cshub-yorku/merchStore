package com.MerchStore.backend.Exceptions;

public class OrderOwnershipException extends RuntimeException {
    public OrderOwnershipException(String message) {
        super(message);
    }

    public OrderOwnershipException(String message, Throwable cause) {
        super(message, cause);
    }
}
