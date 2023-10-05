package com.MerchStore.backend.payment;

import com.MerchStore.backend.Model.Product;
import com.MerchStore.backend.Model.Users;
import com.squareup.square.models.Order;

public interface IOrder {
    Order.Builder startOrder(Users customer);
    void addItemToOrder(Order.Builder order,Product item);

    /**
     * Edit the order object to include taxes before billing customer.
     * @param currentOrder the current order excluding taxes
     */
    void addTax(Order.Builder currentOrder);

    Order finalizeOrder(Order.Builder finalOrderState);
}
