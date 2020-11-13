package com.technicaltest.trackingserver.configuration;

import feign.Logger;
import feign.Request;
import org.springframework.context.annotation.Bean;

public class FeignConfiguration {

    @Bean
    public Logger.Level configureLogLevel() {
        return Logger.Level.FULL;
    }

    @Bean
    public Request.Options timeoutConfiguration() {
        return new Request.Options(5000, 30000);
    }
}
