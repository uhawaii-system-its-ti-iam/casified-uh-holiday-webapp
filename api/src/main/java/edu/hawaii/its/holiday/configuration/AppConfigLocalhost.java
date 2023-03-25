package edu.hawaii.its.holiday.configuration;

import javax.annotation.PostConstruct;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Profile(value = { "localhost" })
@Configuration
@ComponentScan(basePackages = "edu.hawaii.its.holiday")
@EntityScan(basePackages = { "edu.hawaii.its.holiday.type" })
@EnableJpaRepositories(basePackages = { "edu.hawaii.its.holiday.repository" })
@PropertySources({
        @PropertySource("classpath:custom.properties"),
        @PropertySource(value = "file:${user.home}/.${user.name}-conf/holiday-overrides.properties",
                ignoreResourceNotFound = true)
})
public class AppConfigLocalhost {

    private static final Log logger = LogFactory.getLog(AppConfigLocalhost.class);

    @PostConstruct
    public void init() {
        logger.info("init starting");
        logger.info("init finished");
    }

}
