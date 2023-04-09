package com.MerchStore.backend.ResourceControllers;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class DemoController {
    @GetMapping("/ping") // -> Specifying the method type and endpoint here
    @ResponseBody
    public String ping(@RequestHeader(HttpHeaders.AUTHORIZATION) String token){
        return "Pong!\n" + token;
    }

}
