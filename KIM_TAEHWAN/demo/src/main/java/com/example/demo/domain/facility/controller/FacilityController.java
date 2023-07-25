package com.example.demo.domain.facility.controller;

import com.example.demo.domain.facility.service.FacilityService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class FacilityController {

    private final FacilityService facilityService;
}
