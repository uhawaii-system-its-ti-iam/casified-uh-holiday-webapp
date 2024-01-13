package edu.hawaii.its.holiday.controller;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.instanceOf;
import static org.hamcrest.CoreMatchers.not;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.contains;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNotSame;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.LocalDate;
import java.time.Month;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import edu.hawaii.its.holiday.util.Dates;

public class JsonDataTest {

    private JsonData<List<String>> jsonData;

    @BeforeEach
    public void setUp() {
        List<String> broken = Arrays.asList("Everything", "Is", "Broken");
        jsonData = new JsonData<>("bob", broken);
    }

    @Test
    public void construction() {
        assertNotNull(jsonData);

        // Use constructor with default key value.
        LocalDate xmas = Dates.newLocalDate(2016, Month.DECEMBER, 25);
        JsonData<LocalDate> data = new JsonData<>(xmas);
        assertThat(data.getKey(), equalTo("data"));
        assertThat(data.getData(), instanceOf(LocalDate.class));
        assertThat(data.getData(), equalTo(xmas));
    }

    @Test
    public void setters() {
        assertNotNull(jsonData);
        assertNotNull(jsonData.getKey());
        assertNotNull(jsonData.getData());
        assertThat(jsonData.getKey(), equalTo("bob"));
        assertThat(jsonData.getData(), contains("Everything", "Is", "Broken"));
    }

    @Test
    @SuppressWarnings("unlikely-arg-type")
    public void testEquals() {
        LocalDate d1 = Dates.newLocalDate(2016, Month.DECEMBER, 25);
        JsonData<LocalDate> jd1 = new JsonData<>(d1);

        LocalDate d2 = Dates.newLocalDate(2016, Month.DECEMBER, 25);
        JsonData<LocalDate> jd2 = new JsonData<>(d2);

        assertEquals(jd1, jd2);
        assertNotNull(jd1.getData());
        assertNotNull(jd2.getData());
        assertNotSame(jd1.getData(), jd2.getData());
        assertEquals(jd1, jd2);
        assertEquals(jd2, jd1);
        assertEquals(jd1, jd1); // Same object.
        assertNotNull(jd1);

        // Null key (not typical).
        jd1 = new JsonData<>(null, d1);
        jd2 = new JsonData<>(null, d1);
        assertEquals(jd1, jd2);
        assertEquals(jd1, jd2);

        d1 = Dates.newLocalDate(2016, Month.DECEMBER, 25);
        jd1 = new JsonData<>(d1);
        assertNotEquals(jd1, new Date()); // Wrong type.

        // Null data.
        jd1 = new JsonData<>("key", d2);
        jd2 = new JsonData<>("key", null);
        assertEquals(jd1.getKey(), jd2.getKey());
        assertNotNull(jd1.getData());
        assertNull(jd2.getData());
        assertThat(jd1, not(equalTo(jd2)));
        assertThat(jd2, not(equalTo(jd1)));
        assertNotEquals(jd2, jd1);
        assertNotEquals(jd1, jd2);

        LocalDate d3 = Dates.newLocalDate(2016, Month.DECEMBER, 26);
        JsonData<LocalDate> jd3 = new JsonData<>(d3);
        assertNotEquals(jd2, jd3);
        assertNotEquals(jd3, jd2);

        jd1 = new JsonData<>("key", null);
        jd2 = new JsonData<>("key", null);
        assertThat(jd1, equalTo(jd2));

        jd1 = new JsonData<>(null, d1);
        jd2 = new JsonData<>(d1);
        assertNotEquals(jd1, jd2);
        assertNotEquals(jd2, jd1);
    }

    @Test
    public void testHashCode() {
        JsonData<LocalDate> jd1 = new JsonData<>(null);
        JsonData<LocalDate> jd2 = new JsonData<>(null);
        assertEquals(jd1.hashCode(), jd2.hashCode());

        LocalDate d1 = Dates.newLocalDate(2016, Month.DECEMBER, 25);
        jd1 = new JsonData<>(d1);

        LocalDate d2 = Dates.newLocalDate(2016, Month.DECEMBER, 25);
        jd2 = new JsonData<>(d2);

        assertEquals(d1.hashCode(), d2.hashCode());
        assertEquals(jd1.hashCode(), jd2.hashCode());
        assertTrue(jd1.hashCode() > 0);
        assertTrue(jd1.hashCode() > 0);

        // Null key (not typical).
        jd1 = new JsonData<>(null, d1);
        jd2 = new JsonData<>(null, d1);
        assertEquals(jd1.hashCode(), jd2.hashCode());
    }

    @Test
    public void testToString() {
        assertThat(jsonData.toString(), containsString("JsonData [key=bob"));
    }
}
