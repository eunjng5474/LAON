package com.example.demo.domain.gate.repository;

import com.example.demo.domain.gate.Gate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GateRepository extends JpaRepository<Gate, Long> {
}
