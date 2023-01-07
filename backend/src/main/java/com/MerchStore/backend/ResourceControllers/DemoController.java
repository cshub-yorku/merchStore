package com.MerchStore.backend.ResourceControllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class DemoController {
    @GetMapping("/ping") // -> Specifying the method type and endpoint here
    @ResponseBody
    public String ping(){
        return "Pong";
    }
}
