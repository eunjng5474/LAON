package com.ssafy.lions.domain.facility.repository;

import com.ssafy.lions.domain.facility.dto.FacilityCloseGateDto;
import com.ssafy.lions.domain.facility.entity.Facility;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FacilityRepository extends JpaRepository<Facility, Long> {
    // 가게 전체 정보 추출
    List<Facility> findAll();
    /*
        Facility를 중심으로 만들어진 Repository이지만 다른 Entity와 join할 수 있다!
     */
    @Query("SELECT NEW com.ssafy.lions.domain.facility.dto.FacilityCloseGateDto(f.facilityId, f.facilityName, f.type, g.gateId) " +
            "FROM Facility f, FacilityCloseGate g " +
            "WHERE f.facilityId = g.facilityId " +
            "AND f.facilityName LIKE %:name%")
    List<FacilityCloseGateDto> findIdsByFacilityNameLike(String name);
}
