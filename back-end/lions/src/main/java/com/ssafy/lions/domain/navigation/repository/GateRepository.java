package com.ssafy.lions.domain.navigation.repository;

import com.ssafy.lions.domain.facility.dto.FacilityCloseGateDto;
import com.ssafy.lions.domain.navigation.dto.PointDto;
import com.ssafy.lions.domain.navigation.entity.BlockToGate;
import com.ssafy.lions.domain.navigation.entity.Gate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GateRepository extends JpaRepository<Gate, Long> {
    @Query("SELECT g.gateNum FROM Gate g WHERE g.gateId = :gateId")
    String findGateNameByGateId(int gateId);

    @Query("SELECT g.x FROM Gate g WHERE g.gateId = :gateId")
    int findXByGateId(int gateId);

    @Query("SELECT g.y FROM Gate g WHERE g.gateId = :gateId")
    int findYByGateId(int gateId);

    Gate findByGateId(int gateId);
}
