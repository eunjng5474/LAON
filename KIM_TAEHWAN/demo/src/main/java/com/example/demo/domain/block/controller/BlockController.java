package com.example.demo.domain.block.controller;

import com.example.demo.domain.block.service.BlockService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class BlockController {

    private final BlockService blockService;
}
