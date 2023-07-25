package com.example.demo.domain.stair.service;

import com.example.demo.domain.stair.repository.StairRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class StairService {

    private final StairRepository stairRepository;
}
