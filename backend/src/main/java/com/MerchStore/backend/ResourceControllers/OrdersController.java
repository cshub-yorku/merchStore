package com.MerchStore.backend.ResourceControllers;

import com.MerchStore.backend.Dao.CartDao;
import com.MerchStore.backend.Dao.UserAuthenticatorDao;
import com.MerchStore.backend.Exceptions.InvalidPaymentMethodException;
import com.MerchStore.backend.Exceptions.OrderOwnershipException;
import com.MerchStore.backend.Model.APIResponse;
import com.MerchStore.backend.Model.Cart;
import com.MerchStore.backend.Model.Order;
import com.MerchStore.backend.Model.UserAuthenticator;
import com.MerchStore.backend.Model.enums.PaymentType;
import com.MerchStore.backend.Service.EmailService;
import com.MerchStore.backend.business.fetchOrders;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import static com.MerchStore.backend.business.CheckoutLogic.finializeOrder;
import static com.MerchStore.backend.business.fetchOrders.getOrderById;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/orders")
public class OrdersController extends ResponseHandler {
    @Autowired
    UserAuthenticatorDao dao;
    @Autowired
    private JavaMailSender mailSender;

    @GetMapping("/my")
    public ResponseEntity<?> getMyOrders(@RequestHeader(HttpHeaders.AUTHORIZATION) String token){
        UserAuthenticator user = (UserAuthenticator) dao.loadUserByUsername(this.getEmailFromToken(token));

        APIResponse<Order> orderList = fetchOrders.getMyOrders(user.getUserId());

        if(orderList.getErrors().isEmpty()){
            if(orderList.getResponseData().isEmpty()){
                return  this.responseObj(null,204);
            }else{
                return this.responseObj(orderList,200);
            }
        }else{
            return this.responseObj(orderList,400);
        }
    }
    @GetMapping("/my/{id}")
    public ResponseEntity<?> getOrderByID(@RequestHeader(HttpHeaders.AUTHORIZATION) String token, @PathVariable long id){
        UserAuthenticator user = (UserAuthenticator) dao.loadUserByUsername(this.getEmailFromToken(token));
        List<Order> responseData = new LinkedList<>();
        List<String> errors = new LinkedList<>();
        final APIResponse<Order> returnedOrder = new APIResponse<>(errors,responseData);

        try{
            Optional<Order> optionalOrder = getOrderById(id,user);
            optionalOrder.ifPresentOrElse(responseData::add, () -> errors.add("No orders found with this id: " + id));
            if(!responseData.isEmpty()){
                return this.responseObj(returnedOrder,200); // Order verified and it exists
            }else{
                return this.responseObj(returnedOrder,204); // Order doesnt exist
            }
        }catch (OrderOwnershipException e){
            return this.responseObj(returnedOrder,400); // Can't verify order ownership/
        }
    }

    @PostMapping("/checkout")
    public ResponseEntity<?> checkout(@RequestHeader(HttpHeaders.AUTHORIZATION) String token, @RequestParam String paymentType, HttpServletRequest request){
        UserAuthenticator user = (UserAuthenticator) dao.loadUserByUsername(this.getEmailFromToken(token));
        PaymentType type = PaymentType.of(paymentType);
        List<String> errors = new LinkedList<>();
        List<Order> responseData = new LinkedList<>();
        try{
            if(type != null){
                CartDao cartDao = new CartDao();
                Optional<Cart> customerCart = cartDao.getCartByUserId(user.getUserId());
                APIResponse<Order> orderAPIResponse = new APIResponse<>(errors,responseData);
                if(customerCart.isPresent()){
                    Cart cart = customerCart.get();
                    Order order = finializeOrder(cart,type);
                    responseData.add(order);
                    EmailService emailService = new EmailService(mailSender);
                    emailService.sendOrderConfirmationEmail(user.getEmail(), "Your CSHUB Order Confirmation #" + order.getOrderId(), Order.prepareConfirmationEmail(order,request));
                    return this.responseObj(orderAPIResponse,200);
                }
                return this.responseObj(orderAPIResponse,204);
            }else{
                throw new InvalidPaymentMethodException("Invalid Payment Method.");
            }
        }catch (Exception e){
            errors.add(e.getMessage());
            APIResponse<Order> orderAPIResponse = new APIResponse<>(errors,responseData);
            return this.responseObj(orderAPIResponse,400);
        }
    }
}



















