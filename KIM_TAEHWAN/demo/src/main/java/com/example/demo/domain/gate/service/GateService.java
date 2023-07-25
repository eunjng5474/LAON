package com.example.demo.domain.gate.service;

import com.example.demo.domain.gate.repository.GateRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class GateService {

    private GateRepository gateRepository;
}
