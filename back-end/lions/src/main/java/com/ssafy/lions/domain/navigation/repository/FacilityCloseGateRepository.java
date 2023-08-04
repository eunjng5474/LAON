package com.ssafy.lions.domain.navigation.repository;

import com.ssafy.lions.domain.facility.entity.Item;
import com.ssafy.lions.domain.navigation.entity.BlockToGate;
import com.ssafy.lions.domain.navigation.entity.FacilityCloseGate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FacilityCloseGateRepository extends JpaRepository<FacilityCloseGate, Long> {
    @Query("SELECT g.gateId FROM FacilityCloseGate g WHERE g.facilityId = :facilityId")
    Integer findGateIdByFacilityId(int facilityId);

}
