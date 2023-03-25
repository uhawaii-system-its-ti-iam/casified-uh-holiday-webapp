package edu.hawaii.its.holiday.controller;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ErrorControllerAdvice {

    private static final Log logger = LogFactory.getLog(HomeController.class);

    @ExceptionHandler(Exception.class)
    public String handleException(Exception ex) {
        logger.error("Exception: " + ex);

        return "redirect:/";
    }

}