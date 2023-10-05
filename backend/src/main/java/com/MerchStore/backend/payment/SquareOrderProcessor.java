package com.MerchStore.backend.payment;

import com.MerchStore.backend.Model.Product;
import com.MerchStore.backend.Model.Users;
import com.squareup.square.models.Order;

import static com.MerchStore.backend.payment.PaymentIUtils.LOCATION_ID;

public class SquareOrderProcessor implements IOrder{
    @Override
    public Order.Builder startOrder(Users customer) {
        return new Order.Builder(LOCATION_ID)
                .customerId(Long.toString(customer.getUserId()));
    }

    @Override
    public void addItemToOrder(Order.Builder order, Product item) {

    }

    @Override
    public void addTax(Order.Builder currentOrder) {

    }

    @Override
    public Order finalizeOrder(Order.Builder finalOrderState) {
        return finalOrderState.build();
    }
}
