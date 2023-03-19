package edu.hawaii.its.holiday.controller;

import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

    @GetMapping(value = { "/" })
    public String home(Locale locale) {
        logger.info("User at home. The client locale is {}.", locale);
        return "home";
    }
}
