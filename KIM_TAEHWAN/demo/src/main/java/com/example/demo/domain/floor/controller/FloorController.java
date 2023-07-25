package com.example.demo.domain.floor.controller;

import com.example.demo.domain.floor.service.FloorService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class FloorController {

    private final FloorService floorService;
}
