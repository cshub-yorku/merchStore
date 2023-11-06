package com.MerchStore.backend.ResourceControllers;

import com.MerchStore.backend.Dao.UserAuthenticatorDao;
import com.MerchStore.backend.Model.APIResponse;
import com.MerchStore.backend.Model.Cart;
import com.MerchStore.backend.Model.UserAuthenticator;
import com.MerchStore.backend.ResourceControllers.RequestBodies.NewCartItem;
import com.MerchStore.backend.business.CartLogic;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/cart")
public class CartController extends ResponseHandler {
    @Autowired
    UserAuthenticatorDao dao;
    @PostMapping("/")
    public ResponseEntity<?> addItemsToCart(@Valid @RequestBody NewCartItem newItem,
                                            @RequestHeader(HttpHeaders.AUTHORIZATION) String token){
        UserAuthenticator user = (UserAuthenticator) dao.loadUserByUsername(this.getEmailFromToken(token));
        APIResponse<?> response = CartLogic.addItemToCart(newItem.quantity(), newItem.productId(), user.getUserDetails());

        if(!response.getErrors().isEmpty()){
            return this.responseObj(response,400);
        }else{
            return this.responseObj(response,200);
        }
    }
}
