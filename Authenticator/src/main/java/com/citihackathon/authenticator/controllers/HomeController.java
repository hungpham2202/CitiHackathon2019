package com.citihackathon.authenticator.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @CrossOrigin(origins = "*")
    @GetMapping("/v1/ping")
    public String helloWorld() {
        return ":)";
    }

}
