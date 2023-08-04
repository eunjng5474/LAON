package com.ssafy.lions.domain.navigation.repository;

import com.ssafy.lions.domain.navigation.entity.GateToGateExitStair;
import com.ssafy.lions.domain.navigation.entity.StairToStair;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StairToStairRepository extends JpaRepository<StairToStair, Long> {
    List<StairToStair> findAll();
}