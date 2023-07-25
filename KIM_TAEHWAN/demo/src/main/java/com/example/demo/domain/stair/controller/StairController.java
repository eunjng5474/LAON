package com.example.demo.domain.stair.controller;

import com.example.demo.domain.stair.service.StairService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class StairController {

    private final StairService stairService;
}
