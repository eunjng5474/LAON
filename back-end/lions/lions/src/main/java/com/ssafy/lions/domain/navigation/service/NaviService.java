package com.ssafy.lions.domain.navigation.service;

import com.ssafy.lions.domain.navigation.dto.PointResultDto;
import com.ssafy.lions.domain.navigation.repository.BlockToGateRepository;
import com.ssafy.lions.domain.navigation.repository.FacilityCloseGateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NaviService {
    @Autowired
    BlockToGateRepository blockToGateRepository;
    @Autowired
    FacilityCloseGateRepository facilityCloseGateRepository;

    public PointResultDto blockToFacility(String blockId, int facilityId){
        PointResultDto pointResultDto = null;
        System.out.println("------------- service -----------------");
        // blockId와 가까운 gate_id 얻어오기
        int gateIdCloseWithBlock = blockToGateRepository.findGateIdByBlockId(blockId);
        // facilityId와 가까운 gate_id 얻어오기
        int gateIdCloseWithFacility = facilityCloseGateRepository.findGateIdByFacilityId(facilityId);
        System.out.println(gateIdCloseWithBlock + " " + gateIdCloseWithFacility);


        return pointResultDto;
    }
}
