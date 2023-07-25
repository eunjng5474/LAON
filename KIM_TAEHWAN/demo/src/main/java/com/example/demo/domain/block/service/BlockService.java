package com.example.demo.domain.block.service;

import com.example.demo.domain.block.repository.BlockRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class BlockService {

    private final BlockRepository blockRepository;
}
