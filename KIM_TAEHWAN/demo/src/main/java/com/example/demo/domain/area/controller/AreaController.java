package com.example.demo.domain.area.controller;

import com.example.demo.domain.area.service.AreaService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AreaController {

    private final AreaService areaService;
}
