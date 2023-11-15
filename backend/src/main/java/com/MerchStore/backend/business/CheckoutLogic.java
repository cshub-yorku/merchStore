package com.MerchStore.backend.business;

import com.MerchStore.backend.Dao.CartDao;
import com.MerchStore.backend.Dao.OrderDao;
import com.MerchStore.backend.Dao.OrderedItemsDao;
import com.MerchStore.backend.Dao.ProductDao;
import com.MerchStore.backend.Exceptions.EmptyCartException;
import com.MerchStore.backend.Exceptions.InvalidPaymentMethodException;
import com.MerchStore.backend.Model.Cart;
import com.MerchStore.backend.Model.Order;
import com.MerchStore.backend.Model.OrderedItems;
import com.MerchStore.backend.Model.Product;
import com.MerchStore.backend.Model.enums.OrderStatus;
import com.MerchStore.backend.Model.enums.PaymentType;

import java.util.HashMap;
import java.util.List;

public class CheckoutLogic {
    public static Order finializeOrder(Cart customerCart,PaymentType paymentType){
        if(paymentType == PaymentType.Cash){
            return finializeCashOrder(customerCart);
        }else if(paymentType == PaymentType.Square){
            return finializeSquareOrder(customerCart);
        }
        throw new InvalidPaymentMethodException("Invalid Payment Method.");
    }

    private static Order finializeCashOrder(Cart custoemrCart){
        if(custoemrCart.getItemList().isEmpty()){
            throw new EmptyCartException("Can't place order, you're cart is empty.");
        }else{
            Order order = Order.createNewOrder(custoemrCart,OrderStatus.PROCESSING, PaymentType.Cash);
            if(order.getTotalAmount() == 0) throw new EmptyCartException("Your cart is empty.");
            reduceProductStock(order);
            saveNewOrder(order);
            new CartDao().delete(custoemrCart);
            return order;
        }
    }

    private static Order finializeSquareOrder(Cart custoemrCart){
        return null;
    }

    private static void reduceProductStock(Order order){
        List<OrderedItems> orderedItems = order.getOrderedItems();
        HashMap<Long,Integer> orderedProducts = new HashMap<>();

        for(OrderedItems o: orderedItems){
            orderedProducts.put(o.getProductId(),o.getQuantity());
        }

        ProductDao dao = new ProductDao();
        dao.updateProductBatch(orderedProducts);
    }

    private static void saveNewOrder(Order order){
        OrderDao dao = new OrderDao();
        dao.save(order);
        OrderedItemsDao orderedItemsDao = new OrderedItemsDao();
       orderedItemsDao.save(order.getOrderedItems(),order.getOrderId());
    }
}
