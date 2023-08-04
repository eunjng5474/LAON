package com.ssafy.lions.global.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig{
    @Bean
    public OpenAPI openAPI(){
        Info info = new Info()
                    .title("삼성 라이온즈 API 문서")
                .version("v2.1")
                .description("삼성 라이온즈 파크 API 명세서");

        return new OpenAPI().components(new Components()).info(info);
    }

}
