package edu.hawaii.its.holiday.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class ScheduledTasks {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    private HolidayService holidayService;

    @Scheduled(cron = "1 1 1 * * *")
    public void evictHolidaysCache() {
        logger.info("Evicting the Holiday Cache");
        holidayService.evictHolidaysCache();
    }
}