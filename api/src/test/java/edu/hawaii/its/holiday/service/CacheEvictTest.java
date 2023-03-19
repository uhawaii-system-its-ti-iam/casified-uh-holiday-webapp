package edu.hawaii.its.holiday.service;

import static org.junit.jupiter.api.Assertions.assertNotSame;
import static org.junit.jupiter.api.Assertions.assertSame;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import edu.hawaii.its.holiday.configuration.SpringBootWebApplication;
import edu.hawaii.its.holiday.type.Holiday;

@SpringBootTest(classes = { SpringBootWebApplication.class })
public class CacheEvictTest {

    @Autowired
    private HolidayService holidayService;

    @Test
    public void testCacheResetOfEvictHolidays() {

        List<Holiday> holidays = holidayService.findHolidays();
        int size = holidays.size();
        assertTrue(size > 0);

        Holiday holiday = holidays.get(size - 1);
        Integer id = holiday.getId();

        Holiday h1 = holidayService.findHoliday(id);
        Holiday h2 = holidayService.findHoliday(id);
        assertSame(h1, h2);

        holidayService.evictHolidaysCache();

        Holiday h3 = holidayService.findHoliday(id);
        assertNotSame(h2, h3);

        Holiday h4 = holidayService.findHoliday(id);
        assertSame(h3, h4);
    }
}
