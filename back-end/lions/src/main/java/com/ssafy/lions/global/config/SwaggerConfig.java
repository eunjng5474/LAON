package com.ssafy.lions.global.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class SwaggerConfig{
    @Bean
    public OpenAPI openAPI(){
        final Server prodServer = new Server();
        prodServer.setUrl("https://laon.info/api/swagger-ui/index.html#/");
        prodServer.description("운영 환경 서버 URL");

        final Server devServer  = new Server();
        devServer.setUrl("http://localhost:8080/api/swagger-ui/index.html#/");
        devServer.description("개발 환경 서버 URL");

        Info info = new Info()
                .title("삼성 라이온즈 API 문서")
                .version("v2.1")
                .description("삼성 라이온즈 파크 API 명세서");

        return new OpenAPI().info(info).servers(List.of(devServer, prodServer));
    }
}
