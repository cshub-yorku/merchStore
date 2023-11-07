package com.MerchStore.backend.business;

import com.MerchStore.backend.Dao.OrderDao;
import com.MerchStore.backend.Exceptions.OrderOwnershipException;
import com.MerchStore.backend.Model.APIResponse;
import com.MerchStore.backend.Model.Order;
import com.MerchStore.backend.Model.UserAuthenticator;
import com.MerchStore.backend.Model.enums.UserRoles;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class fetchOrders {
    public static APIResponse<Order> getMyOrders(long userId){
        OrderDao dao = new OrderDao();
        List<Order> orderListData = dao.getOrderHistoryByUserId(userId);
        List<String> errors = new ArrayList<>();

        if(orderListData == null){
            errors.add("Unknown error occurred.");
        }else if(orderListData.size() < 1){
            errors.add("No orders found.");
        }
        return new APIResponse<>(errors,orderListData);
    }

    public static Optional<Order> getOrderById(long orderId, UserAuthenticator userData){
        OrderDao dao = new OrderDao();
        Optional<Order> optionalOrder = dao.get(orderId);
        if(optionalOrder.isPresent()){
            Order order = optionalOrder.get();
            if(userData.getRole().equals(UserRoles.Admin) || userData.getUserId() == order.getUserId()){
                return Optional.of(order);
            }else{
                throw new OrderOwnershipException("You have to be an admin to access this order.");
            }
        }else{
            return Optional.empty();
        }
    }
}
