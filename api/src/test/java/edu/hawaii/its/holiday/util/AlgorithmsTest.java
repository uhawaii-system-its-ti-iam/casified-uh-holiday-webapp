package edu.hawaii.its.holiday.util;

import static edu.hawaii.its.holiday.util.Algorithms.observedElectionDay;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.instanceOf;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

import java.lang.reflect.Constructor;
import java.lang.reflect.Modifier;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.junit.jupiter.api.Test;

public class AlgorithmsTest {

    @Test
    public void testCalculateElectionDay() {
        int year = 2020;
        assertThat(observedElectionDay(year),
                equalTo(Dates.newLocalDate(year, Month.NOVEMBER, 3)));

        try {
            // Not an election year.
            // Note the exception thrown.
            observedElectionDay(2019);
            fail("Should not reach here.");
        } catch (Exception ex) {
            assertThat(ex, instanceOf(IllegalArgumentException.class));
        }
    }

    @Test
    public void testConstructorIsPrivate() throws Exception {
        Constructor<Algorithms> constructor = Algorithms.class.getDeclaredConstructor();
        assertTrue(Modifier.isPrivate(constructor.getModifiers()));
        constructor.setAccessible(true);
        constructor.newInstance();
    }

    @Test
    public void testStreamFiltering() {
        List<String> testing = new ArrayList<>();
        testing.add("Test");
        testing.add("Apple");
        testing.add("Banana");
        testing.add("Orange");
        testing.add("Apricot");
        testing = testing.stream().filter(list -> list.startsWith("A")).collect(Collectors.toList());
        assertEquals(2, testing.size());
    }

}
