package com.example.demo.domain.block.repository;

import com.example.demo.domain.block.Block;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlockRepository extends JpaRepository<Block, Long> {
}
