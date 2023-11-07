package com.MerchStore.backend.Model.enums;

public enum OrderStatus {
    /**
     * If order is recently placed. Could be pending for the following reasons
     * Payment (for example if customer is paying in cash)
     * Order is awaiting Pickup
     * Admins need to perform a certain task before fulfilling order (check inventory, verify order etc)
     */
    PROCESSING,
    /**
     * If order is recently placed and got cancelled for the following reasons.
     * Item is currently out of stock
     * Square Payment was rejected
     * Customer never picked up their item
     */
    CANCELLED,
    /**
     * If order is completed.
     * That is: Paid and picked.
     */
    COMPLETED,
    /**
     * If order is recently placed and got rejected for the following reasons
     * Admins reject for some reason.
     */
    REJECTED;



}
