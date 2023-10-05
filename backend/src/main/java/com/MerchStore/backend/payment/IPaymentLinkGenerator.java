package com.MerchStore.backend.payment;

import com.squareup.square.models.Order;

public interface IPaymentLinkGenerator {

    String generatePaymentLink(Order order);

}
