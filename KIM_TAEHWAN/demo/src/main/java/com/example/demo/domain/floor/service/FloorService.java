package com.example.demo.domain.floor.service;

import com.example.demo.domain.floor.repository.FloorRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class FloorService {

    private final FloorRepository floorRepository;
}
