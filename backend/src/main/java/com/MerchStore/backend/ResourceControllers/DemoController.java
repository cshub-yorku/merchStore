package com.MerchStore.backend.ResourceControllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class DemoController {
    @GetMapping("/{userId}/ping") // -> Specifying the method type and endpoint here
    @ResponseBody
    public String ping(@PathVariable("userId") String userId){
        return "Pong: Your userId is " + userId;
    }
}
