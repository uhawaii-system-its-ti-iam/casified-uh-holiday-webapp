package edu.hawaii.its.holiday.configuration;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.annotation.DirtiesContext.ClassMode;

@SpringBootTest(classes = { SpringBootWebApplication.class })
@DirtiesContext(classMode = ClassMode.BEFORE_CLASS)
public class AppConfigRunTest {

    @Test
    public void construction() {
        AppConfigLocalhost appConfigLocalhost = new AppConfigLocalhost();
        assertNotNull(appConfigLocalhost);

        appConfigLocalhost.init();
        assertNotNull(appConfigLocalhost);
    }

}
