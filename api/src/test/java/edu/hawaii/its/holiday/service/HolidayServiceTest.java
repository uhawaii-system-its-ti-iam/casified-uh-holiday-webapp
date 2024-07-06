package edu.hawaii.its.holiday.service;

import static edu.hawaii.its.holiday.util.Algorithms.observedChristmasDay;
import static edu.hawaii.its.holiday.util.Algorithms.observedElectionDay;
import static edu.hawaii.its.holiday.util.Algorithms.observedIndependenceDay;
import static edu.hawaii.its.holiday.util.Algorithms.observedKingKamehamehaDay;
import static edu.hawaii.its.holiday.util.Algorithms.observedLaborDay;
import static edu.hawaii.its.holiday.util.Algorithms.observedMartinLutherKingJrDay;
import static edu.hawaii.its.holiday.util.Algorithms.observedMemorialDay;
import static edu.hawaii.its.holiday.util.Algorithms.observedNewYearsDay;
import static edu.hawaii.its.holiday.util.Algorithms.observedPresidentsDay;
import static edu.hawaii.its.holiday.util.Algorithms.observedPrinceKuhioDay;
import static edu.hawaii.its.holiday.util.Algorithms.observedStatehoodDay;
import static edu.hawaii.its.holiday.util.Algorithms.observedThanksgivingDay;
import static edu.hawaii.its.holiday.util.Algorithms.observedVeteransDay;
import static edu.hawaii.its.holiday.util.Algorithms.occurence;
import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.not;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.greaterThanOrEqualTo;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertSame;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.Month;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.TimeZone;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.annotation.DirtiesContext.ClassMode;

import com.fasterxml.jackson.databind.ObjectMapper;

import edu.hawaii.its.holiday.configuration.SpringBootWebApplication;
import edu.hawaii.its.holiday.type.Designation;
import edu.hawaii.its.holiday.type.Holiday;
import edu.hawaii.its.holiday.type.HolidayAdjuster;
import edu.hawaii.its.holiday.type.Type;
import edu.hawaii.its.holiday.type.UserRole;
import edu.hawaii.its.holiday.util.Dates;

@SpringBootTest(classes = { SpringBootWebApplication.class })
@DirtiesContext(classMode = ClassMode.BEFORE_CLASS)
public class HolidayServiceTest {

    @Autowired
    private HolidayService holidayService;

    @Test
    public void findHolidays() {
        List<Holiday> holidays = holidayService.findHolidays();
        int size = holidays.size();
        assertTrue(size > 0);
        int index = size - 1;

        Holiday h0 = holidays.get(index);
        assertNotNull(h0);
        Holiday h1 = holidayService.findHoliday(h0.getId());
        assertEquals(h0.getId(), h1.getId());
        assertEquals(h0, h1);

        // Check that the caching is working.
        Holiday h2 = holidayService.findHolidays().get(index);
        Holiday h3 = holidayService.findHolidays().get(index);
        assertEquals(h2, h3);
        assertSame(h2, h3);

        assertThat(h2.getId(), equalTo(1001));
        assertThat(h2.getDescription(), equalTo("New Year's Day"));
        assertThat(h2.getTypes().size(), equalTo(3));

        // Make sure they all have Types
        for (Holiday h : holidays) {
            assertThat(h.toString(), h.getTypes().size(), not(equalTo(0)));
        }
    }

    @Test
    public void findTypeById() {
        Type t0 = holidayService.findType(2);
        Type t1 = holidayService.findType(2);
        assertThat(t0.getId(), equalTo(2));
        assertThat(t1.getId(), equalTo(2));
        assertEquals(t0, t1);
        assertSame(t0, t1); // Check if caching is working.
    }

    @Test
    public void findTypes() {
        List<Type> types = holidayService.findTypes();

        Type ht = types.get(0);
        assertThat(ht.getId(), equalTo(2));
        assertThat(ht.getVersion(), equalTo(1));
        assertThat(ht.getDescription(), equalTo("Federal"));

        ht = types.get(1);
        assertThat(ht.getId(), equalTo(3));
        assertThat(ht.getVersion(), equalTo(1));
        assertThat(ht.getDescription(), equalTo("UH"));

        ht = types.get(2);
        assertThat(ht.getId(), equalTo(4));
        assertThat(ht.getVersion(), equalTo(1));
        assertThat(ht.getDescription(), equalTo("State"));
    }

    @Test
    public void findUserRoles() {
        List<UserRole> userRoles = holidayService.findUserRoles();
        assertTrue(userRoles.size() >= 2);
        assertEquals(1, userRoles.get(0).getId().intValue());
        assertEquals(2, userRoles.get(1).getId().intValue());
        assertEquals("ROLE_ADMIN", userRoles.get(0).getAuthority());
        assertEquals("ROLE_USER", userRoles.get(1).getAuthority());
    }

    @Test
    public void dateFormatting() throws Exception {
        final String DATE_FORMAT = Dates.DATE_FORMAT;

        SimpleDateFormat df = new SimpleDateFormat(DATE_FORMAT);
        df.setTimeZone(TimeZone.getTimeZone("HST"));

        String toParse = "December 20, 2014, Saturday";
        LocalDate obsDate = Dates.toLocalDate(df.parse(toParse));
        assertNotNull(obsDate);

        LocalDate localDate = Dates.newLocalDate(2014, Month.DECEMBER, 20);
        LocalDate offDate = localDate.plusDays(200);

        Holiday holiday = new Holiday();
        holiday.setObservedDate(obsDate);
        holiday.setOfficialDate(offDate);

        ObjectMapper mapper = new ObjectMapper();
        String result = mapper.writeValueAsString(holiday);
        assertThat(result, containsString(toParse));
    }

    @Test
    public void findHolidayById() {
        Holiday h1 = holidayService.findHoliday(1015);

        assertEquals("New Year's Day", h1.getDescription());

        Holiday h2 = holidayService.findHoliday(1097);
        assertEquals("Dr. Martin Luther King, Jr. Day", h2.getDescription());

        Holiday h4 = holidayService.findHoliday(1261);
        assertEquals("Prince Jonah Kuhio Kalanianaole Day", h4.getDescription());

        assertEquals(3, h1.getTypes().size());
        assertEquals(3, h2.getTypes().size());
        assertEquals(2, h4.getTypes().size());

        List<Type> types = h1.getTypes();
        assertThat(types.get(0).getId(), equalTo(2));
        assertThat(types.get(1).getId(), equalTo(3));

        types = h2.getTypes();
        assertThat(types.get(0).getId(), equalTo(2));
        assertThat(types.get(1).getId(), equalTo(3));

        types = h4.getTypes();
        assertThat(types.get(0).getId(), equalTo(3));
        assertThat(types.get(1).getId(), equalTo(4));

        List<String> holidayTypes = h4.getHolidayTypes();
        assertThat(holidayTypes.size(), equalTo(2));
        assertThat(holidayTypes.get(0), equalTo("UH"));
        assertThat(holidayTypes.get(1), equalTo("State"));
    }

    @Test
    public void findHolidaysByYear() {
        assertThat(holidayService.findHolidaysByYear(2005).size(), equalTo(0));
        assertThat(holidayService.findHolidaysByYear(2006).size(), equalTo(14));
        assertThat(holidayService.findHolidaysByYear(2007).size(), equalTo(13));
        assertThat(holidayService.findHolidaysByYear(2008).size(), equalTo(14));
        assertThat(holidayService.findHolidaysByYear(2009).size(), equalTo(13));
        assertThat(holidayService.findHolidaysByYear(2010).size(), equalTo(14));
        assertThat(holidayService.findHolidaysByYear(2011).size(), equalTo(13));
        assertThat(holidayService.findHolidaysByYear(2012).size(), equalTo(14));
        assertThat(holidayService.findHolidaysByYear(2013).size(), equalTo(13));
        assertThat(holidayService.findHolidaysByYear(2014).size(), equalTo(14));
        assertThat(holidayService.findHolidaysByYear(2015).size(), equalTo(13));
        assertThat(holidayService.findHolidaysByYear(2016).size(), equalTo(14));
        assertThat(holidayService.findHolidaysByYear(2017).size(), equalTo(13));
        assertThat(holidayService.findHolidaysByYear(2018).size(), equalTo(14));
        assertThat(holidayService.findHolidaysByYear(2019).size(), equalTo(13));
        assertThat(holidayService.findHolidaysByYear(2020).size(), equalTo(14));
        assertThat(holidayService.findHolidaysByYear(2021).size(), equalTo(13));
        assertThat(holidayService.findHolidaysByYear(2022).size(), equalTo(14));
        assertThat(holidayService.findHolidaysByYear(2023).size(), equalTo(13));
    }

    @Test
    public void findHolidaysByMonth() {
        assertThat(holidayService.findHolidaysByMonth(01, 2019).size(), equalTo(2));
        assertThat(holidayService.findHolidaysByMonth(02, 2019).size(), equalTo(1));
        assertThat(holidayService.findHolidaysByMonth(03, 2019).size(), equalTo(1));
        assertThat(holidayService.findHolidaysByMonth(04, 2019).size(), equalTo(1));
        assertThat(holidayService.findHolidaysByMonth(05, 2019).size(), equalTo(1));
        assertThat(holidayService.findHolidaysByMonth(06, 2019).size(), equalTo(1));
        assertThat(holidayService.findHolidaysByMonth(07, 2019).size(), equalTo(1));
        assertThat(holidayService.findHolidaysByMonth(8, 2019).size(), equalTo(1));
        assertThat(holidayService.findHolidaysByMonth(9, 2019).size(), equalTo(1));
        assertThat(holidayService.findHolidaysByMonth(10, 2019).size(), equalTo(0));
        assertThat(holidayService.findHolidaysByMonth(11, 2019).size(), equalTo(2));
        assertThat(holidayService.findHolidaysByMonth(12, 2019).size(), equalTo(1));
    }

    @Test
    public void findHolidaysByRange() {
        assertThat(holidayService.findHolidaysByRange("2019-01-01", "2019-01-31", true).size(), equalTo(2));
        assertThat(holidayService.findHolidaysByRange("2019-02-01", "2019-02-28", true).size(), equalTo(1));
        assertThat(holidayService.findHolidaysByRange("2019-03-01", "2019-03-31", true).size(), equalTo(1));
        assertThat(holidayService.findHolidaysByRange("2019-04-01", "2019-04-30", true).size(), equalTo(1));
        assertThat(holidayService.findHolidaysByRange("2019-05-01", "2019-05-31", true).size(), equalTo(1));
        assertThat(holidayService.findHolidaysByRange("2019-06-01", "2019-06-30", true).size(), equalTo(1));
        assertThat(holidayService.findHolidaysByRange("2019-07-01", "2019-07-31", true).size(), equalTo(1));
        assertThat(holidayService.findHolidaysByRange("2019-08-01", "2019-08-31", true).size(), equalTo(1));
        assertThat(holidayService.findHolidaysByRange("2019-09-01", "2019-09-30", true).size(), equalTo(1));
        assertThat(holidayService.findHolidaysByRange("2019-10-01", "2019-10-31", true).size(), equalTo(0));
        assertThat(holidayService.findHolidaysByRange("2019-11-01", "2019-11-30", true).size(), equalTo(2));
        assertThat(holidayService.findHolidaysByRange("2019-12-01", "2019-12-31", true).size(), equalTo(1));
    }

    @Test
    public void findClosestHolidaysByDate() {
        Holiday holiday = holidayService.findClosestHolidayByDate("2019-01-01", true, "uh");
        assertThat(holiday.getDescription(), equalTo("New Year's Day"));

        holiday = holidayService.findClosestHolidayByDate("2019-01-02", true, "uh");
        assertThat(holiday.getDescription(), equalTo("Dr. Martin Luther King, Jr. Day"));

        holiday = holidayService.findClosestHolidayByDate("2019-01-02", false, "uh");
        assertThat(holiday.getDescription(), equalTo("New Year's Day"));

        holiday = holidayService.findClosestHolidayByDate("2019-05-27", true, "uh");
        assertThat(holiday.getDescription(), equalTo("Memorial Day"));

        holiday = holidayService.findClosestHolidayByDate("2019-05-28", true, "uh");
        assertThat(holiday.getDescription(), equalTo("King Kamehameha I Day"));

        holiday = holidayService.findClosestHolidayByDate("2019-05-28", false, "uh");
        assertThat(holiday.getDescription(), equalTo("Memorial Day"));

        holiday = holidayService.findClosestHolidayByDate("2019-12-25", true, "uh");
        assertThat(holiday.getDescription(), equalTo("Christmas"));

        holiday = holidayService.findClosestHolidayByDate("2019-12-26", true, "uh");
        assertThat(holiday.getDescription(), equalTo("New Year's Day"));

        holiday = holidayService.findClosestHolidayByDate("2019-12-26", false, "uh");
        assertThat(holiday.getDescription(), equalTo("Christmas"));

        holiday = holidayService.findClosestHolidayByDate("2019-06-26", true, "state");
        assertThat(holiday.getDescription(), equalTo("Independence Day"));

        holiday = holidayService.findClosestHolidayByDate("2019-06-26", false, "federal");
        assertThat(holiday.getDescription(), equalTo("Memorial Day"));
    }

    @Test
    public void findClosestHolidaysByDate2() {
        Holiday holiday = holidayService.findClosestHolidayByDate("2019-01-01", true);
        assertThat(holiday.getDescription(), equalTo("New Year's Day"));

        holiday = holidayService.findClosestHolidayByDate("2019-01-02", true);
        assertThat(holiday.getDescription(), equalTo("Dr. Martin Luther King, Jr. Day"));

        holiday = holidayService.findClosestHolidayByDate("2019-01-02", false);
        assertThat(holiday.getDescription(), equalTo("New Year's Day"));

        holiday = holidayService.findClosestHolidayByDate("2019-05-27", true);
        assertThat(holiday.getDescription(), equalTo("Memorial Day"));

        holiday = holidayService.findClosestHolidayByDate("2019-05-28", true);
        assertThat(holiday.getDescription(), equalTo("King Kamehameha I Day"));

        holiday = holidayService.findClosestHolidayByDate("2019-05-28", false);
        assertThat(holiday.getDescription(), equalTo("Memorial Day"));

        holiday = holidayService.findClosestHolidayByDate("2019-12-25", true);
        assertThat(holiday.getDescription(), equalTo("Christmas"));

        holiday = holidayService.findClosestHolidayByDate("2019-12-26", true);
        assertThat(holiday.getDescription(), equalTo("New Year's Day"));

        holiday = holidayService.findClosestHolidayByDate("2019-12-26", false);
        assertThat(holiday.getDescription(), equalTo("Christmas"));
    }

    @Test
    public void findDesignation() {
        Designation d1a = holidayService.findDesignation(1);
        assertThat(d1a.getName(), equalTo("New Year's Day"));

        Designation d1b = holidayService.findDesignation(d1a.getId());
        assertThat(d1b.getName(), equalTo("New Year's Day"));

        assertThat(d1a, equalTo(d1b));
        assertThat(d1a.hashCode(), equalTo(d1b.hashCode()));
    }

    @Test
    public void findDesignations() {
        assertThat(holidayService.findDesignations().size(), equalTo(15));
    }

    @Test
    public void holidayAdjustment() {
        LocalDate ld0 = Dates.firstDateOfYear(2011);
        LocalDate ld1 = ld0.with(new HolidayAdjuster());
        assertThat(ld0, not(equalTo(ld1)));
        assertThat(ld0.getDayOfWeek(), equalTo(DayOfWeek.SATURDAY));
        assertThat(ld1.getDayOfWeek(), equalTo(DayOfWeek.FRIDAY));

        LocalDate ld2 = Dates.newLocalDate(2011, Month.DECEMBER, 25);
        LocalDate ld3 = ld2.with(new HolidayAdjuster());
        assertThat(ld2, not(equalTo(ld3)));
        assertThat(ld2.getDayOfWeek(), equalTo(DayOfWeek.SUNDAY));
        assertThat(ld3.getDayOfWeek(), equalTo(DayOfWeek.MONDAY));

        // 2010-12-31
        LocalDate ld4 = Dates.newLocalDate(2010, Month.DECEMBER, 31);
        LocalDate ld5 = ld4.with(new HolidayAdjuster());
        assertThat(ld4, equalTo(ld5));
        assertThat(ld4.getDayOfWeek(), equalTo(DayOfWeek.FRIDAY));
        assertThat(ld5.getDayOfWeek(), equalTo(DayOfWeek.FRIDAY));
    }

    @Test
    public void testNames() {
        List<Designation> designations = holidayService.findDesignations();
        Set<String> names = new HashSet<>();
        for (Designation d : designations) {
            names.add(d.getName());
        }

        List<Holiday> holidays = holidayService.findHolidays();
        for (Holiday h : holidays) {
            assertThat(h.toString(), names.contains(h.getDescription()), is(true));
        }
    }

    @Test
    public void observeredDayOfWeek() {
        LocalDate date;
        int[] counts = new int[15];

        List<Holiday> holidays = holidayService.findHolidays();
        for (Holiday h : holidays) {
            int year = h.getOfficialDate().getYear();
            switch (h.getDescription()) {
                case "New Year's Day":
                    date = observedNewYearsDay(h.getOfficialYear());
                    assertThat(date, equalTo(h.getObservedDate()));
                    counts[0] += 1;
                    break;

                case "Dr. Martin Luther King, Jr. Day":
                    date = observedMartinLutherKingJrDay(year);
                    assertThat(date, equalTo(h.getObservedDate()));
                    counts[1] += 1;
                    break;

                case "Presidents' Day":
                    date = observedPresidentsDay(year);
                    assertThat(date, equalTo(h.getObservedDate()));
                    counts[2] += 1;
                    break;

                case "Prince Jonah Kuhio Kalanianaole Day":
                    date = observedPrinceKuhioDay(year);
                    assertThat(date, equalTo(h.getObservedDate()));
                    counts[3] += 1;
                    break;

                case "Good Friday":
                    // TBD
                    counts[4] += 1;
                    break;

                case "Memorial Day":
                    date = observedMemorialDay(year);
                    assertThat(date, equalTo(h.getObservedDate()));
                    counts[5] += 1;
                    break;

                case "King Kamehameha I Day":
                    date = observedKingKamehamehaDay(year);
                    assertThat(date, equalTo(h.getObservedDate()));
                    counts[6] += 1;
                    break;

                case "Independence Day":
                    date = observedIndependenceDay(year);
                    assertThat(date, equalTo(h.getObservedDate()));
                    counts[7] += 1;
                    break;

                case "Statehood Day":
                    date = observedStatehoodDay(year);
                    assertThat(date, equalTo(h.getObservedDate()));
                    counts[8] += 1;
                    break;

                case "Labor Day":
                    date = observedLaborDay(year);
                    assertThat(date, equalTo(h.getObservedDate()));
                    counts[9] += 1;
                    break;

                case "Discoverers' Day":
                    counts[10] += 1;
                    break;

                case "General Election Day":
                    date = observedElectionDay(year);
                    assertThat(date, equalTo(h.getObservedDate()));
                    counts[11] += 1;
                    break;

                case "Veterans' Day":
                    date = observedVeteransDay(year);
                    assertThat(date, equalTo(h.getObservedDate()));
                    counts[12] += 1;
                    break;

                case "Thanksgiving":
                    date = observedThanksgivingDay(year);
                    assertThat(date, equalTo(h.getObservedDate()));
                    counts[13] += 1;
                    break;

                case "Christmas":
                    date = observedChristmasDay(year);
                    assertThat(date, equalTo(h.getObservedDate()));
                    counts[14] += 1;
                    break;

                default:
                    fail("Should not get here. h: " + h);
                    break;
            }
        }

        assertThat(counts[0], greaterThanOrEqualTo(17));
        assertThat(counts[1], greaterThanOrEqualTo(17));
        assertThat(counts[2], greaterThanOrEqualTo(17));
        assertThat(counts[3], greaterThanOrEqualTo(17));
        assertThat(counts[4], greaterThanOrEqualTo(17));
        assertThat(counts[5], greaterThanOrEqualTo(17));
        assertThat(counts[6], greaterThanOrEqualTo(17));
        assertThat(counts[7], greaterThanOrEqualTo(17));
        assertThat(counts[8], greaterThanOrEqualTo(17));
        assertThat(counts[9], greaterThanOrEqualTo(17));
        assertThat(counts[10], greaterThanOrEqualTo(0)); // Discoverers' Day
        assertThat(counts[11], greaterThanOrEqualTo(9)); // General Election Day
        assertThat(counts[12], greaterThanOrEqualTo(17));
        assertThat(counts[13], greaterThanOrEqualTo(17));
        assertThat(counts[14], greaterThanOrEqualTo(17));
    }

    @Test
    public void findAllDescriptions() {
        List<String> descriptions = holidayService.findAllDescriptions();

        assertThat(descriptions.size(), equalTo(14));

        assertThat(descriptions.get(0), equalTo("Christmas"));
        assertThat(descriptions.get(1), equalTo("Dr. Martin Luther King, Jr. Day"));
        assertThat(descriptions.get(2), equalTo("General Election Day"));
        assertThat(descriptions.get(3), equalTo("Good Friday"));
        assertThat(descriptions.get(4), equalTo("Independence Day"));
        assertThat(descriptions.get(5), equalTo("King Kamehameha I Day"));
        assertThat(descriptions.get(6), equalTo("Labor Day"));
        assertThat(descriptions.get(7), equalTo("Memorial Day"));
        assertThat(descriptions.get(8), equalTo("New Year's Day"));
        assertThat(descriptions.get(9), equalTo("Presidents' Day"));
        assertThat(descriptions.get(10), equalTo("Prince Jonah Kuhio Kalanianaole Day"));
        assertThat(descriptions.get(11), equalTo("Statehood Day"));
        assertThat(descriptions.get(12), equalTo("Thanksgiving"));
        assertThat(descriptions.get(13), equalTo("Veterans' Day"));
    }

    @Test
    public void testOccurence() {
        int year = 2019;
        LocalDate ld = occurence(year, Month.NOVEMBER, DayOfWeek.THURSDAY, 4);
        assertThat(ld, equalTo(Dates.newLocalDate(year, Month.NOVEMBER, 28)));

        ld = occurence(year, Month.APRIL, DayOfWeek.MONDAY, 1);
        assertThat(ld, equalTo(Dates.newLocalDate(year, Month.APRIL, 1)));

        ld = occurence(year, Month.APRIL, DayOfWeek.TUESDAY, 1);
        assertThat(ld, equalTo(Dates.newLocalDate(year, Month.APRIL, 2)));

        ld = occurence(year, Month.APRIL, DayOfWeek.SUNDAY, 1);
        assertThat(ld, equalTo(Dates.newLocalDate(year, Month.APRIL, 7)));

        ld = occurence(year, Month.APRIL, DayOfWeek.MONDAY, 5);
        assertThat(ld, equalTo(Dates.newLocalDate(year, Month.APRIL, 29)));

        // Note:
        ld = occurence(year, Month.APRIL, DayOfWeek.MONDAY, 6);
        assertThat(ld, equalTo(Dates.newLocalDate(year, Month.MAY, 6)));

        // Note these weird cases, too:
        ld = occurence(year, Month.APRIL, DayOfWeek.MONDAY, 0);
        assertThat(ld, equalTo(Dates.newLocalDate(year, Month.APRIL, 1)));
        ld = occurence(year, Month.APRIL, DayOfWeek.MONDAY, -1);
        assertThat(ld, equalTo(Dates.newLocalDate(year, Month.APRIL, 1)));
    }

    @Test
    public void various() {
        for (int k = 0; k < 5; k++) {
            String dstr = "2006-01-16";
            Holiday hx = holidayService.findClosestHolidayByDate(dstr, true, "state");
            assertThat(hx.getObservedDateStr(), equalTo(dstr));

            dstr = "2006-01-17";
            Holiday hy = holidayService.findClosestHolidayByDate(dstr, true, "state");
            assertThat(hy.getObservedDateStr(), equalTo("2006-02-20"));

            // dstr = "2005-01-22";
            // Holiday ha = holidayService.findClosestHolidayByDate(dstr, false, "state");
            // assertThat(ha.getObservedDateStr(), equalTo("2006-01-02"));

            // dstr = "2006-01-16";
            // Holiday hb = holidayService.findClosestHolidayByDate(dstr, false, "state");
            // assertThat(hb.getObservedDateStr(), equalTo("2006-01-16"));

            dstr = "2028-11-24";
            Holiday hc = holidayService.findClosestHolidayByDate(dstr, true, "state");
            assertThat(hc.getObservedDateStr(), equalTo("2028-12-25"));

            dstr = "2028-11-24";
            Holiday hd = holidayService.findClosestHolidayByDate(dstr, false, "state");
            assertThat(hd.getObservedDateStr(), equalTo("2028-11-23"));

            List<Holiday> holidays = holidayService.findHolidays();

            // Search date is a holiday.
            // for (Holiday h : holidays) {
            //     String dateStr = h.getObservedDateStr();

            // Holiday holiday = holidayService.findClosestHolidayByDate(dateStr, true, "state");
            // assertThat(holiday.getObservedDateStr(), equalTo(dateStr));

            // holiday = holidayService.findClosestHolidayByDate(dateStr, false, "state");
            // assertThat(holiday.getObservedDateStr(), equalTo(dateStr));
            // }

            // Search date is day before and after holiday.
            // for (Holiday h : holidays) {
            //     String dateStrExpected = h.getObservedDateStr();
            //     String dateStr = Dates.formatDate(h.getObservedDate().plusDays(-1), "yyyy-MM-dd");

            // Holiday holiday = holidayService.findClosestHolidayByDate(dateStr, true, "state");
            // assertThat(holiday.getObservedDateStr(), equalTo(dateStrExpected));

            // dateStr = Dates.formatDate(h.getObservedDate().plusDays(1), "yyyy-MM-dd");
            // holiday = holidayService.findClosestHolidayByDate(dateStr, false, "state");
            // assertThat(holiday.getObservedDateStr(), equalTo(dateStrExpected));
            // }

            final int size = holidays.size();

            for (int i = 0; i < size - 1; i++) {
                Holiday h1 = holidays.get(i);
                Holiday h2 = holidays.get(i + 1);

                if (h1.getObservedDateStr().equals(h2.getObservedDateStr())) {
                    // Two holidays on this day, just skip it.
                    continue;
                }

                // String dateStr = Dates.formatDate(h1.getObservedDate().plusDays(1), "yyyy-MM-dd");
                // String dateExpectedStr = h2.getObservedDateStr();

                // Holiday holiday = holidayService.findClosestHolidayByDate(dateStr, true, "state");
                // assertThat(holiday.getObservedDateStr(), equalTo(dateExpectedStr));
            }

            for (int i = 0; i < size - 1; i++) {
                Holiday h1 = holidays.get(i);
                Holiday h2 = holidays.get(i + 1);

                if (h1.getObservedDateStr().equals(h2.getObservedDateStr())) {
                    // Two holidays on this day, just skip it.
                    continue;
                }

                // String dateStr = Dates.formatDate(h2.getObservedDate().plusDays(-1), "yyyy-MM-dd");
                // String dateExpectedStr = h1.getObservedDateStr();
                // Holiday holiday = holidayService.findClosestHolidayByDate(dateStr, false, "state");
                // assertThat(holiday.getObservedDateStr(), equalTo(dateExpectedStr));
            }


            // String dateStr = "3000-01-01";
            // String dateExpectedStr = holidays.get(holidays.size() - 1).getObservedDateStr();
            // Holiday holiday;
            // Holiday holiday = holidayService.findClosestHolidayByDate(dateStr, true, "state");
            // assertThat(holiday.getObservedDateStr(), equalTo(dateExpectedStr));
            // holiday = holidayService.findClosestHolidayByDate(dateStr, false, "state");
            // assertThat(holiday.getObservedDateStr(), equalTo(dateExpectedStr));

            // dateStr = "1962-12-31";
            // dateExpectedStr = holidays.get(0).getObservedDateStr();
            // holiday = holidayService.findClosestHolidayByDate(dateStr, true, "state");
            // assertThat(holiday.getObservedDateStr(), equalTo(dateExpectedStr));
            // holiday = holidayService.findClosestHolidayByDate(dateStr, false, "state");
            // assertThat(holiday.getObservedDateStr(), equalTo(dateExpectedStr));

            // dateStr = null;
            // dateExpectedStr = holidays.get(0).getObservedDateStr();
            // holiday = holidayService.findClosestHolidayByDate(dateStr, true, "state");
            // assertThat(holiday.getObservedDateStr(), equalTo(dateExpectedStr));
            // holiday = holidayService.findClosestHolidayByDate(dateStr, false, "state");
            // assertThat(holiday.getObservedDateStr(), equalTo(dateExpectedStr));
        }

    }
}