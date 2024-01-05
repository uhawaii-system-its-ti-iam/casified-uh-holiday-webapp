package edu.hawaii.its.holiday.controller;

import static org.hamcrest.Matchers.hasSize;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.annotation.DirtiesContext.ClassMode;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.web.context.WebApplicationContext;

import edu.hawaii.its.holiday.configuration.SpringBootWebApplication;

@SpringBootTest(classes = { SpringBootWebApplication.class })
@DirtiesContext(classMode = ClassMode.BEFORE_CLASS)
public class HolidayRestControllerTest {

    private final MediaType APPLICATION_JSON =
            new MediaType(MediaType.APPLICATION_JSON.getType(),
                    MediaType.APPLICATION_JSON.getSubtype());

    @Autowired
    private HolidayRestController restController;

    @Autowired
    private WebApplicationContext context;

    private MockMvc mockMvc;

    @BeforeEach
    public void setUp() {
        mockMvc = webAppContextSetup(context).build();
    }

    @Test
    public void testConstruction() {
        assertNotNull(restController);
    }

    @Test
    public void httpGetHolidays() throws Exception {
        MvcResult result = mockMvc.perform(get("/api/holidays"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("data", hasSize(298 + 13)))
                .andReturn();
        assertNotNull(result);
    }

    @Test
    public void httpGetHolidaysById() throws Exception {
        MvcResult result = mockMvc.perform(get("/api/holidays/1096"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data.description").value("New Year's Day"))
                .andExpect(jsonPath("data.observedDateFull").value("January 01, 2013, Tuesday"))
                .andExpect(jsonPath("data.officialDateFull").value("January 01, 2013, Tuesday"))
                .andExpect(jsonPath("data.year").value("2013"))
                .andExpect(jsonPath("data.types", hasSize(3)))
                .andExpect(jsonPath("data.types[0].description").value("Federal"))
                .andExpect(jsonPath("data.types[1].description").value("UH"))
                .andExpect(jsonPath("data.types[2].description").value("State"))
                .andExpect(jsonPath("key").doesNotExist())
                .andReturn();
        assertNotNull(result);
    }

    @Test
    public void httpGetHolidaysByYear() throws Exception {
        MvcResult result = mockMvc.perform(get("/api/holidays/year/2011"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(13)))
                .andExpect(jsonPath("data[0].description").value("New Year's Day"))
                .andExpect(jsonPath("data[1].description").value("Dr. Martin Luther King, Jr. Day"))
                .andExpect(jsonPath("data[2].description").value("Presidents' Day"))
                .andExpect(jsonPath("data[3].description").value("Prince Jonah Kuhio Kalanianaole Day"))
                .andExpect(jsonPath("data[4].description").value("Good Friday"))
                .andExpect(jsonPath("data[5].description").value("Memorial Day"))
                .andExpect(jsonPath("data[6].description").value("King Kamehameha I Day"))
                .andExpect(jsonPath("data[7].description").value("Independence Day"))
                .andExpect(jsonPath("data[8].description").value("Statehood Day"))
                .andExpect(jsonPath("data[9].description").value("Labor Day"))
                .andExpect(jsonPath("data[10].description").value("Veterans' Day"))
                .andExpect(jsonPath("data[11].description").value("Thanksgiving"))
                .andExpect(jsonPath("data[12].description").value("Christmas"))
                .andReturn();
        assertNotNull(result);

        // No records.
        result = mockMvc.perform(get("/api/holidays/year/2005"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(0)))
                .andReturn();
        assertNotNull(result);
    }

    @Test
    public void httpGetHolidaysByMonth() throws Exception {
        MvcResult result = mockMvc.perform(get("/api/holidays/month/03?year=2019&type=uh"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(1)))
                .andExpect(jsonPath("data[0].description").value("Prince Jonah Kuhio Kalanianaole Day"))
                .andExpect(jsonPath("data[0].observedDateFull").value("March 26, 2019, Tuesday"))
                .andExpect(jsonPath("data[0].officialDateFull").value("March 26, 2019, Tuesday"))
                .andExpect(jsonPath("data[0].types[0].description").value("UH"))
                .andExpect(jsonPath("data[0].types[1].description").value("State"))
                .andReturn();
        assertNotNull(result);

        result = mockMvc.perform(get("/api/holidays/month/04?year=2019&type=uh"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(1)))
                .andReturn();
        assertNotNull(result);

        result = mockMvc.perform(get("/api/holidays/month/05?year=2019&type=uh"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(1)))
                .andReturn();
        assertNotNull(result);

        result = mockMvc.perform(get("/api/holidays/month/06?year=2019&type=uh"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(1)))
                .andReturn();
        assertNotNull(result);

        result = mockMvc.perform(get("/api/holidays/month/07?year=2019&type=uh"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(1)))
                .andReturn();
        assertNotNull(result);

        result = mockMvc.perform(get("/api/holidays/month/08?year=2019&type=uh"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(1)))
                .andReturn();
        assertNotNull(result);

        result = mockMvc.perform(get("/api/holidays/month/09?year=2019&type=uh"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(1)))
                .andReturn();
        assertNotNull(result);

        result = mockMvc.perform(get("/api/holidays/month/10?year=2019&type=uh"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(0)))
                .andReturn();
        assertNotNull(result);

        result = mockMvc.perform(get("/api/holidays/month/11?year=2019&type=uh"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(2)))
                .andReturn();
        assertNotNull(result);

        result = mockMvc.perform(get("/api/holidays/month/12?year=2019&type=uh"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(1)))
                .andReturn();
        assertNotNull(result);
    }

    @Test
    public void httpGetHolidaysByMonthParams() throws Exception {
        MvcResult result;

        result = mockMvc.perform(get("/api/holidays/month/1?type=state&year=2021"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(2)))
                .andReturn();
        assertNotNull(result);

        result = mockMvc.perform(get("/api/holidays/month/1?year=2022"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(2)))
                .andReturn();
        assertNotNull(result);

        result = mockMvc.perform(get("/api/holidays/month/1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(2)))
                .andReturn();
        assertNotNull(result);
    }

    @Test
    public void httpGetHolidaysByRange() throws Exception {
        MvcResult result = mockMvc.perform(
                        get("/api/holidays/range?begin-date=2019-01-01&end-date=2019-01-31&inclusive=true&type=uh"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(2)))
                .andExpect(jsonPath("data[0].description").value("New Year's Day"))
                .andExpect(jsonPath("data[0].observedDateFull").value("January 01, 2019, Tuesday"))
                .andExpect(jsonPath("data[0].officialDateFull").value("January 01, 2019, Tuesday"))
                .andExpect(jsonPath("data[0].types[0].description").value("Federal"))
                .andExpect(jsonPath("data[0].types[1].description").value("UH"))
                .andExpect(jsonPath("data[1].description").value("Dr. Martin Luther King, Jr. Day"))
                .andExpect(jsonPath("data[1].observedDateFull").value("January 21, 2019, Monday"))
                .andExpect(jsonPath("data[1].officialDateFull").value("January 21, 2019, Monday"))
                .andExpect(jsonPath("data[1].types[0].description").value("Federal"))
                .andExpect(jsonPath("data[1].types[1].description").value("UH"))
                .andReturn();
        assertNotNull(result);

        result = mockMvc.perform(
                        get("/api/holidays/range?begin-date=2019-12-25&end-date=2019-12-31&inclusive=false&type=uh"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(0)))
                .andReturn();
        assertNotNull(result);

        result = mockMvc.perform(
                        get("/api/holidays/range?begin-date=2019-08-16&end-date=2019-08-31&inclusive=true&type=federal"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(0)))
                .andReturn();
        assertNotNull(result);
    }

    @Test
    public void httpGetHolidaysByExists() throws Exception {
        MvcResult result = mockMvc.perform(get("/api/holidays/exists?date=2019-01-01&type=uh"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(1)))
                .andExpect(jsonPath("data[0].description").value("New Year's Day"))
                .andExpect(jsonPath("data[0].observedDateFull").value("January 01, 2019, Tuesday"))
                .andExpect(jsonPath("data[0].officialDateFull").value("January 01, 2019, Tuesday"))
                .andExpect(jsonPath("data[0].types[0].description").value("Federal"))
                .andExpect(jsonPath("data[0].types[1].description").value("UH"))
                .andReturn();
        assertNotNull(result);

        result = mockMvc.perform(get("/api/holidays/exists?date=2019-03-26&type=uh"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(1)))
                .andExpect(jsonPath("data[0].description").value("Prince Jonah Kuhio Kalanianaole Day"))
                .andExpect(jsonPath("data[0].observedDateFull").value("March 26, 2019, Tuesday"))
                .andExpect(jsonPath("data[0].officialDateFull").value("March 26, 2019, Tuesday"))
                .andExpect(jsonPath("data[0].types[0].description").value("UH"))
                .andExpect(jsonPath("data[0].types[1].description").value("State"))
                .andReturn();
        assertNotNull(result);

        result = mockMvc.perform(get("/api/holidays/exists?date=2019-03-26&type=federal"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(0)))
                .andReturn();
        assertNotNull(result);

        result = mockMvc.perform(get("/api/holidays/exists?date=2019-04-01&type="))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(0)))
                .andReturn();
        assertNotNull(result);
    }

    @Test
    public void httpGetHolidaysByClosest() throws Exception {
        MvcResult result = mockMvc.perform(get("/api/holidays/closest?date=2019-01-01&search-forward=true&type=uh"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data.description").value("New Year's Day"))
                .andExpect(jsonPath("data.observedDateFull").value("January 01, 2019, Tuesday"))
                .andExpect(jsonPath("data.officialDateFull").value("January 01, 2019, Tuesday"))
                .andExpect(jsonPath("data.types[0].description").value("Federal"))
                .andExpect(jsonPath("data.types[1].description").value("UH"))
                .andReturn();
        assertNotNull(result);

        result = mockMvc.perform(get("/api/holidays/closest?date=2019-01-02&search-forward=false&type=uh"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data.description").value("New Year's Day"))
                .andExpect(jsonPath("data.observedDateFull").value("January 01, 2019, Tuesday"))
                .andExpect(jsonPath("data.officialDateFull").value("January 01, 2019, Tuesday"))
                .andExpect(jsonPath("data.types[0].description").value("Federal"))
                .andExpect(jsonPath("data.types[1].description").value("UH"))
                .andReturn();
        assertNotNull(result);

        result = mockMvc.perform(get("/api/holidays/closest?date=2019-01-02&search-forward=&type=uh"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data.description").value("Dr. Martin Luther King, Jr. Day"))
                .andExpect(jsonPath("data.observedDateFull").value("January 21, 2019, Monday"))
                .andExpect(jsonPath("data.officialDateFull").value("January 21, 2019, Monday"))
                .andExpect(jsonPath("data.types[0].description").value("Federal"))
                .andExpect(jsonPath("data.types[1].description").value("UH"))
                .andReturn();
        assertNotNull(result);

        result = mockMvc.perform(get("/api/holidays/closest?date=2019-12-25&search-forward=true&type=uh"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data.description").value("Christmas"))
                .andExpect(jsonPath("data.observedDateFull").value("December 25, 2019, Wednesday"))
                .andExpect(jsonPath("data.officialDateFull").value("December 25, 2019, Wednesday"))
                .andExpect(jsonPath("data.types[0].description").value("Federal"))
                .andExpect(jsonPath("data.types[1].description").value("UH"))
                .andReturn();
        assertNotNull(result);

        // TODO: This does not look correct.
        result = mockMvc.perform(get("/api/holidays/closest?date=2019-12-26&search-forward=false&type=state"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data.description").value("Christmas"))
                .andReturn();
        assertNotNull(result);

        result = mockMvc.perform(get("/api/holidays/closest?date=2019-12-26&search-forward=&type="))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data.description").value("New Year's Day"))
                .andExpect(jsonPath("data.observedDateFull").value("January 01, 2020, Wednesday"))
                .andExpect(jsonPath("data.officialDateFull").value("January 01, 2020, Wednesday"))
                .andExpect(jsonPath("data.types[0].description").value("Federal"))
                .andExpect(jsonPath("data.types[1].description").value("UH"))
                .andReturn();
        assertNotNull(result);
    }

    @Test
    public void holidaysByYearParam2() throws Exception {
        // rest/inYear?year=2019&type=federal
        MvcResult result = mockMvc.perform(get("/rest/inYear")
                        .param("year", "2019")
                        .param("type", "federal"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(9)))
                .andReturn();
        assertNotNull(result);
    }

    @Test
    public void holidaysByYearAndType() throws Exception {
        MvcResult result = mockMvc.perform(get("/rest/inYear")
                        .param("year", "2012")
                        .param("type", "uh")
                        .param("isObserved", "false"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(14)))
                .andExpect(jsonPath("data[0].description").value("New Year's Day"))
                .andReturn();
        mockMvc.perform(get("/rest/inYear")
                        .param("year", "2019")
                        .param("type", "uh")
                        .param("isObserved", "false"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(13)))
                .andExpect(jsonPath("data[0].description").value("New Year's Day"))
                .andReturn();
        mockMvc.perform(get("/rest/inYear")
                        .param("year", "2021")
                        .param("type", "federal")
                        .param("isObserved", "false"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(9)))
                .andReturn();
        assertNotNull(result);
    }

    @Test
    public void holidaysByYearParam() throws Exception {
        // rest/inYear?year=2011&type=uh&isObserved=false
        MvcResult result = mockMvc.perform(get("/rest/inYear")
                        .param("year", "2012")
                        .param("type", "uh")
                        .param("isObserved", "false"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(14)))
                .andExpect(jsonPath("data[0].description").value("New Year's Day"))
                .andExpect(jsonPath("data[1].description").value("Dr. Martin Luther King, Jr. Day"))
                .andExpect(jsonPath("data[2].description").value("Presidents' Day"))
                .andExpect(jsonPath("data[3].description").value("Prince Jonah Kuhio Kalanianaole Day"))
                .andExpect(jsonPath("data[4].description").value("Good Friday"))
                .andExpect(jsonPath("data[5].description").value("Memorial Day"))
                .andExpect(jsonPath("data[6].description").value("King Kamehameha I Day"))
                .andExpect(jsonPath("data[7].description").value("Independence Day"))
                .andExpect(jsonPath("data[8].description").value("Statehood Day"))
                .andExpect(jsonPath("data[9].description").value("Labor Day"))
                .andExpect(jsonPath("data[10].description").value("General Election Day"))
                .andExpect(jsonPath("data[11].description").value("Veterans' Day"))
                .andExpect(jsonPath("data[12].description").value("Thanksgiving"))
                .andExpect(jsonPath("data[13].description").value("Christmas"))
                .andReturn();
        assertNotNull(result);

        mockMvc.perform(get("/rest/inYear")
                        .param("year", "2013")
                        .param("type", "uh")
                        .param("isObserved", "false"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(13)))
                .andExpect(jsonPath("data[0].description").value("New Year's Day"))
                .andExpect(jsonPath("data[0].year").value("2013"))
                .andExpect(jsonPath("data[0].observedDate").value("2013-01-01"))
                .andExpect(jsonPath("data[0].officialDate").value("2013-01-01"))
                .andExpect(jsonPath("data[0].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[0].holidayTypes[1]").value("UH"))
                .andExpect(jsonPath("data[1].description").value("Dr. Martin Luther King, Jr. Day"))
                .andExpect(jsonPath("data[1].year").value("2013"))
                .andExpect(jsonPath("data[1].observedDate").value("2013-01-21"))
                .andExpect(jsonPath("data[1].officialDate").value("2013-01-21"))
                .andExpect(jsonPath("data[1].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[1].holidayTypes[1]").value("UH"))
                .andExpect(jsonPath("data[2].description").value("Presidents' Day"))
                .andExpect(jsonPath("data[2].year").value("2013"))
                .andExpect(jsonPath("data[2].observedDate").value("2013-02-18"))
                .andExpect(jsonPath("data[2].officialDate").value("2013-02-18"))
                .andExpect(jsonPath("data[2].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[2].holidayTypes[1]").value("UH"))
                .andExpect(jsonPath("data[3].description").value("Prince Jonah Kuhio Kalanianaole Day"))
                .andExpect(jsonPath("data[3].year").value("2013"))
                .andExpect(jsonPath("data[3].observedDate").value("2013-03-26"))
                .andExpect(jsonPath("data[3].officialDate").value("2013-03-26"))
                .andExpect(jsonPath("data[3].holidayTypes[0]").value("UH"))
                .andExpect(jsonPath("data[3].holidayTypes[1]").value("State"))
                .andExpect(jsonPath("data[4].description").value("Good Friday"))
                .andExpect(jsonPath("data[4].year").value("2013"))
                .andExpect(jsonPath("data[4].observedDate").value("2013-03-29"))
                .andExpect(jsonPath("data[4].officialDate").value("2013-03-29"))
                .andExpect(jsonPath("data[4].holidayTypes[0]").value("UH"))
                .andExpect(jsonPath("data[5].description").value("Memorial Day"))
                .andExpect(jsonPath("data[5].year").value("2013"))
                .andExpect(jsonPath("data[5].observedDate").value("2013-05-27"))
                .andExpect(jsonPath("data[5].officialDate").value("2013-05-27"))
                .andExpect(jsonPath("data[5].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[5].holidayTypes[1]").value("UH"))
                .andExpect(jsonPath("data[6].description").value("King Kamehameha I Day"))
                .andExpect(jsonPath("data[6].year").value("2013"))
                .andExpect(jsonPath("data[6].observedDate").value("2013-06-11"))
                .andExpect(jsonPath("data[6].officialDate").value("2013-06-11"))
                .andExpect(jsonPath("data[6].holidayTypes[0]").value("UH"))
                .andExpect(jsonPath("data[6].holidayTypes[1]").value("State"))
                .andExpect(jsonPath("data[7].description").value("Independence Day"))
                .andExpect(jsonPath("data[7].year").value("2013"))
                .andExpect(jsonPath("data[7].observedDate").value("2013-07-04"))
                .andExpect(jsonPath("data[7].officialDate").value("2013-07-04"))
                .andExpect(jsonPath("data[7].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[7].holidayTypes[1]").value("UH"))
                .andExpect(jsonPath("data[8].description").value("Statehood Day"))
                .andExpect(jsonPath("data[8].year").value("2013"))
                .andExpect(jsonPath("data[8].observedDate").value("2013-08-16"))
                .andExpect(jsonPath("data[8].officialDate").value("2013-08-16"))
                .andExpect(jsonPath("data[8].holidayTypes[0]").value("UH"))
                .andExpect(jsonPath("data[8].holidayTypes[1]").value("State"))
                .andExpect(jsonPath("data[9].description").value("Labor Day"))
                .andExpect(jsonPath("data[9].year").value("2013"))
                .andExpect(jsonPath("data[9].observedDate").value("2013-09-02"))
                .andExpect(jsonPath("data[9].officialDate").value("2013-09-02"))
                .andExpect(jsonPath("data[9].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[9].holidayTypes[1]").value("UH"))
                .andExpect(jsonPath("data[10].description").value("Veterans' Day"))
                .andExpect(jsonPath("data[10].year").value("2013"))
                .andExpect(jsonPath("data[10].observedDate").value("2013-11-11"))
                .andExpect(jsonPath("data[10].officialDate").value("2013-11-11"))
                .andExpect(jsonPath("data[10].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[10].holidayTypes[1]").value("UH"))
                .andExpect(jsonPath("data[11].description").value("Thanksgiving"))
                .andExpect(jsonPath("data[11].year").value("2013"))
                .andExpect(jsonPath("data[11].observedDate").value("2013-11-28"))
                .andExpect(jsonPath("data[11].officialDate").value("2013-11-28"))
                .andExpect(jsonPath("data[11].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[11].holidayTypes[1]").value("UH"))
                .andExpect(jsonPath("data[12].description").value("Christmas"))
                .andExpect(jsonPath("data[12].year").value("2013"))
                .andExpect(jsonPath("data[12].observedDate").value("2013-12-25"))
                .andExpect(jsonPath("data[12].officialDate").value("2013-12-25"))
                .andExpect(jsonPath("data[12].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[12].holidayTypes[1]").value("UH"))
                .andReturn();

        mockMvc.perform(get("/rest/inYear")
                        .param("year", "2019")
                        .param("type", "uh")
                        .param("isObserved", "false"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(13)))
                .andExpect(jsonPath("data[0].description").value("New Year's Day"))
                .andExpect(jsonPath("data[0].year").value("2019"))
                .andExpect(jsonPath("data[0].observedDate").value("2019-01-01"))
                .andExpect(jsonPath("data[0].officialDate").value("2019-01-01"))
                .andExpect(jsonPath("data[0].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[0].holidayTypes[1]").value("UH"))
                .andExpect(jsonPath("data[1].description").value("Dr. Martin Luther King, Jr. Day"))
                .andExpect(jsonPath("data[1].year").value("2019"))
                .andExpect(jsonPath("data[1].observedDate").value("2019-01-21"))
                .andExpect(jsonPath("data[1].officialDate").value("2019-01-21"))
                .andExpect(jsonPath("data[1].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[1].holidayTypes[1]").value("UH"))
                .andExpect(jsonPath("data[2].description").value("Presidents' Day"))
                .andExpect(jsonPath("data[2].year").value("2019"))
                .andExpect(jsonPath("data[2].observedDate").value("2019-02-18"))
                .andExpect(jsonPath("data[2].officialDate").value("2019-02-18"))
                .andExpect(jsonPath("data[2].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[2].holidayTypes[1]").value("UH"))
                .andExpect(jsonPath("data[3].description").value("Prince Jonah Kuhio Kalanianaole Day"))
                .andExpect(jsonPath("data[3].year").value("2019"))
                .andExpect(jsonPath("data[3].observedDate").value("2019-03-26"))
                .andExpect(jsonPath("data[3].officialDate").value("2019-03-26"))
                .andExpect(jsonPath("data[3].holidayTypes[0]").value("UH"))
                .andExpect(jsonPath("data[3].holidayTypes[1]").value("State"))
                .andExpect(jsonPath("data[4].description").value("Good Friday"))
                .andExpect(jsonPath("data[4].year").value("2019"))
                .andExpect(jsonPath("data[4].observedDate").value("2019-04-19"))
                .andExpect(jsonPath("data[4].officialDate").value("2019-04-19"))
                .andExpect(jsonPath("data[4].holidayTypes[0]").value("UH"))
                .andExpect(jsonPath("data[5].description").value("Memorial Day"))
                .andExpect(jsonPath("data[5].year").value("2019"))
                .andExpect(jsonPath("data[5].observedDate").value("2019-05-27"))
                .andExpect(jsonPath("data[5].officialDate").value("2019-05-27"))
                .andExpect(jsonPath("data[5].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[5].holidayTypes[1]").value("UH"))
                .andExpect(jsonPath("data[6].description").value("King Kamehameha I Day"))
                .andExpect(jsonPath("data[6].year").value("2019"))
                .andExpect(jsonPath("data[6].observedDate").value("2019-06-11"))
                .andExpect(jsonPath("data[6].officialDate").value("2019-06-11"))
                .andExpect(jsonPath("data[6].holidayTypes[0]").value("UH"))
                .andExpect(jsonPath("data[6].holidayTypes[1]").value("State"))
                .andExpect(jsonPath("data[7].description").value("Independence Day"))
                .andExpect(jsonPath("data[7].year").value("2019"))
                .andExpect(jsonPath("data[7].observedDate").value("2019-07-04"))
                .andExpect(jsonPath("data[7].officialDate").value("2019-07-04"))
                .andExpect(jsonPath("data[7].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[7].holidayTypes[1]").value("UH"))
                .andExpect(jsonPath("data[8].description").value("Statehood Day"))
                .andExpect(jsonPath("data[8].year").value("2019"))
                .andExpect(jsonPath("data[8].observedDate").value("2019-08-16"))
                .andExpect(jsonPath("data[8].officialDate").value("2019-08-16"))
                .andExpect(jsonPath("data[8].holidayTypes[0]").value("UH"))
                .andExpect(jsonPath("data[8].holidayTypes[1]").value("State"))
                .andExpect(jsonPath("data[9].description").value("Labor Day"))
                .andExpect(jsonPath("data[9].year").value("2019"))
                .andExpect(jsonPath("data[9].observedDate").value("2019-09-02"))
                .andExpect(jsonPath("data[9].officialDate").value("2019-09-02"))
                .andExpect(jsonPath("data[9].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[9].holidayTypes[1]").value("UH"))
                .andExpect(jsonPath("data[10].description").value("Veterans' Day"))
                .andExpect(jsonPath("data[10].year").value("2019"))
                .andExpect(jsonPath("data[10].observedDate").value("2019-11-11"))
                .andExpect(jsonPath("data[10].officialDate").value("2019-11-11"))
                .andExpect(jsonPath("data[10].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[10].holidayTypes[1]").value("UH"))
                .andExpect(jsonPath("data[11].description").value("Thanksgiving"))
                .andExpect(jsonPath("data[11].year").value("2019"))
                .andExpect(jsonPath("data[11].observedDate").value("2019-11-28"))
                .andExpect(jsonPath("data[11].officialDate").value("2019-11-28"))
                .andExpect(jsonPath("data[11].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[11].holidayTypes[1]").value("UH"))
                .andExpect(jsonPath("data[12].description").value("Christmas"))
                .andExpect(jsonPath("data[12].year").value("2019"))
                .andExpect(jsonPath("data[12].observedDate").value("2019-12-25"))
                .andExpect(jsonPath("data[12].officialDate").value("2019-12-25"))
                .andExpect(jsonPath("data[12].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[12].holidayTypes[1]").value("UH"))
                .andReturn();

        mockMvc.perform(get("/rest/inYear")
                        .param("year", "2020")
                        .param("type", "uh")
                        .param("isObserved", "false"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(APPLICATION_JSON))
                .andExpect(jsonPath("data", hasSize(14)))
                .andExpect(jsonPath("data[0].description").value("New Year's Day"))
                .andExpect(jsonPath("data[0].year").value("2020"))
                .andExpect(jsonPath("data[0].observedDate").value("2020-01-01"))
                .andExpect(jsonPath("data[0].officialDate").value("2020-01-01"))
                .andExpect(jsonPath("data[0].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[0].holidayTypes[1]").value("UH"))
                .andExpect(jsonPath("data[1].description").value("Dr. Martin Luther King, Jr. Day"))
                .andExpect(jsonPath("data[1].year").value("2020"))
                .andExpect(jsonPath("data[1].observedDate").value("2020-01-20"))
                .andExpect(jsonPath("data[1].officialDate").value("2020-01-20"))
                .andExpect(jsonPath("data[1].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[1].holidayTypes[1]").value("UH"))
                .andExpect(jsonPath("data[2].description").value("Presidents' Day"))
                .andExpect(jsonPath("data[2].year").value("2020"))
                .andExpect(jsonPath("data[2].observedDate").value("2020-02-17"))
                .andExpect(jsonPath("data[2].officialDate").value("2020-02-17"))
                .andExpect(jsonPath("data[2].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[2].holidayTypes[1]").value("UH"))
                .andExpect(jsonPath("data[3].description").value("Prince Jonah Kuhio Kalanianaole Day"))
                .andExpect(jsonPath("data[3].year").value("2020"))
                .andExpect(jsonPath("data[3].observedDate").value("2020-03-26"))
                .andExpect(jsonPath("data[3].officialDate").value("2020-03-26"))
                .andExpect(jsonPath("data[3].holidayTypes[0]").value("UH"))
                .andExpect(jsonPath("data[3].holidayTypes[1]").value("State"))
                .andExpect(jsonPath("data[4].description").value("Good Friday"))
                .andExpect(jsonPath("data[4].year").value("2020"))
                .andExpect(jsonPath("data[4].observedDate").value("2020-04-10"))
                .andExpect(jsonPath("data[4].officialDate").value("2020-04-10"))
                .andExpect(jsonPath("data[4].holidayTypes[0]").value("UH"))
                .andExpect(jsonPath("data[5].description").value("Memorial Day"))
                .andExpect(jsonPath("data[5].year").value("2020"))
                .andExpect(jsonPath("data[5].observedDate").value("2020-05-25"))
                .andExpect(jsonPath("data[5].officialDate").value("2020-05-25"))
                .andExpect(jsonPath("data[5].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[5].holidayTypes[1]").value("UH"))
                .andExpect(jsonPath("data[6].description").value("King Kamehameha I Day"))
                .andExpect(jsonPath("data[6].year").value("2020"))
                .andExpect(jsonPath("data[6].observedDate").value("2020-06-11"))
                .andExpect(jsonPath("data[6].officialDate").value("2020-06-11"))
                .andExpect(jsonPath("data[6].holidayTypes[0]").value("UH"))
                .andExpect(jsonPath("data[6].holidayTypes[1]").value("State"))
                .andExpect(jsonPath("data[7].description").value("Independence Day"))
                .andExpect(jsonPath("data[7].year").value("2020"))
                .andExpect(jsonPath("data[7].observedDate").value("2020-07-03"))
                .andExpect(jsonPath("data[7].officialDate").value("2020-07-04"))
                .andExpect(jsonPath("data[7].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[7].holidayTypes[1]").value("UH"))
                .andExpect(jsonPath("data[8].description").value("Statehood Day"))
                .andExpect(jsonPath("data[8].year").value("2020"))
                .andExpect(jsonPath("data[8].observedDate").value("2020-08-21"))
                .andExpect(jsonPath("data[8].officialDate").value("2020-08-21"))
                .andExpect(jsonPath("data[8].holidayTypes[0]").value("UH"))
                .andExpect(jsonPath("data[8].holidayTypes[1]").value("State"))
                .andExpect(jsonPath("data[9].description").value("Labor Day"))
                .andExpect(jsonPath("data[9].year").value("2020"))
                .andExpect(jsonPath("data[9].observedDate").value("2020-09-07"))
                .andExpect(jsonPath("data[9].officialDate").value("2020-09-07"))
                .andExpect(jsonPath("data[9].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[9].holidayTypes[1]").value("UH"))
                .andExpect(jsonPath("data[10].description").value("General Election Day"))
                .andExpect(jsonPath("data[10].year").value("2020"))
                .andExpect(jsonPath("data[10].observedDate").value("2020-11-03"))
                .andExpect(jsonPath("data[10].officialDate").value("2020-11-03"))
                .andExpect(jsonPath("data[10].holidayTypes[0]").value("UH"))
                .andExpect(jsonPath("data[10].holidayTypes[1]").value("State"))
                .andExpect(jsonPath("data[11].description").value("Veterans' Day"))
                .andExpect(jsonPath("data[11].year").value("2020"))
                .andExpect(jsonPath("data[11].observedDate").value("2020-11-11"))
                .andExpect(jsonPath("data[11].officialDate").value("2020-11-11"))
                .andExpect(jsonPath("data[11].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[11].holidayTypes[1]").value("UH"))
                .andExpect(jsonPath("data[12].description").value("Thanksgiving"))
                .andExpect(jsonPath("data[12].year").value("2020"))
                .andExpect(jsonPath("data[12].observedDate").value("2020-11-26"))
                .andExpect(jsonPath("data[12].officialDate").value("2020-11-26"))
                .andExpect(jsonPath("data[12].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[12].holidayTypes[1]").value("UH"))
                .andExpect(jsonPath("data[13].description").value("Christmas"))
                .andExpect(jsonPath("data[13].year").value("2020"))
                .andExpect(jsonPath("data[13].observedDate").value("2020-12-25"))
                .andExpect(jsonPath("data[13].officialDate").value("2020-12-25"))
                .andExpect(jsonPath("data[13].holidayTypes[0]").value("Federal"))
                .andExpect(jsonPath("data[13].holidayTypes[1]").value("UH"))
                .andReturn();
    }

    @Test
    public void httpGetHolidaysWithWrongIdType() throws Exception {
        MvcResult result = mockMvc.perform(get("/api/holidays/xxx"))
                .andExpect(status().is3xxRedirection())
                .andExpect(view().name("redirect:/"))
                .andReturn();
        assertNotNull(result);
    }

    @Test
    public void httpGetTypes() throws Exception {
        MvcResult result = mockMvc.perform(get("/api/types"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("data", hasSize(3)))
                .andExpect(jsonPath("data", hasSize(3)))
                .andExpect(jsonPath("data[0].description").value("Federal"))
                .andExpect(jsonPath("data[1].description").value("UH"))
                .andExpect(jsonPath("data[2].description").value("State"))
                .andReturn();
        assertNotNull(result);
    }

    @Test
    public void httpGetHolidaysGrid() throws Exception {
        MvcResult result = mockMvc.perform(get("/api/holidaygrid/get?page=1&size=10"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("content", hasSize(10)))
                .andExpect(jsonPath("last").value("false"))
                .andExpect(jsonPath("totalPages").value(32))
                .andExpect(jsonPath("totalElements").value(298 + 13))
                .andExpect(jsonPath("size").value("10"))
                .andExpect(jsonPath("number").value("1"))
                .andExpect(jsonPath("first").value("false"))
                .andExpect(jsonPath("numberOfElements").value("10"))
                .andExpect(jsonPath("content[9].description").value("Memorial Day"))
                .andReturn();
        assertNotNull(result);
    }

}