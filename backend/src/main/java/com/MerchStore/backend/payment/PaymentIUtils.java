package com.MerchStore.backend.payment;

import com.MerchStore.backend.Model.Cart;
import com.squareup.square.models.OrderLineItem;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.UUID;

public class PaymentIUtils {
    private static final Logger logger = LoggerFactory.getLogger(PaymentIUtils.class);
    public static final String ACCESS_TOKEN = System.getenv("SQUARE_ACCESS_TOKEN");
    public static final String LOCATION_ID = System.getenv("SQUARE_ACCESS_TOKEN");
    public static String generateIdempotencyKey(){
        UUID key =  UUID.randomUUID();
        logger.info("Generated new Idempotency Key: " + key);
        return key.toString();
    }

    public static List<OrderLineItem> convertToOrderItemLine(Cart cart){
     return null;
    }
}
