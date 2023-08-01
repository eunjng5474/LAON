package com.ssafy.lions.domain.navigation.repository;

import com.ssafy.lions.domain.navigation.entity.GateToGateExitStair;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GateToGateExitStairRepository extends JpaRepository<GateToGateExitStair, Long> {
    List<GateToGateExitStair> findAll();
}