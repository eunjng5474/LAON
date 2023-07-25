package com.example.demo.domain.gate.controller;

import com.example.demo.domain.gate.service.GateService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class GateController {

    private GateService gateService;
}
