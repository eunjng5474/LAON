package com.ssafy.lions.global.profile;

import lombok.RequiredArgsConstructor;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class ProfileController {

    private static final List<String> PROFILES = Arrays.asList("blue", "green");
    private static final String DEFAULT_PROFILE = "default";

    private final Environment env;

    @GetMapping("/api/profile")
    public String profile() {
        List<String> profiles = Arrays.asList(env.getActiveProfiles());
        String defaultProfile = profiles.isEmpty() ? "DEFAULT_PROFILE" : profiles.get(0);

        return profiles.stream().filter(PROFILES::contains).findAny().orElse(defaultProfile);
    }
}
