package com.ssafy.lions.domain.navigation.service;

import com.ssafy.lions.domain.navigation.dto.PointResultDto;
import com.ssafy.lions.domain.navigation.entity.GateToGateExitStair;
import com.ssafy.lions.domain.navigation.repository.BlockToGateRepository;
import com.ssafy.lions.domain.navigation.repository.FacilityCloseGateRepository;
import com.ssafy.lions.domain.navigation.repository.GateToGateExitStairRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class NaviService {
    @Autowired
    BlockToGateRepository blockToGateRepository;
    @Autowired
    FacilityCloseGateRepository facilityCloseGateRepository;
    @Autowired
    GateToGateExitStairRepository gateToGateExitStairRepository;

    ArrayList<Integer>[] graph = new ArrayList[521];

    public PointResultDto blockToFacility(String blockId, int facilityId){
        PointResultDto pointResultDto = null;
        System.out.println("------------- service -----------------");
        // blockId와 가까운 gate_id 얻어오기
        int gateIdCloseWithBlock = blockToGateRepository.findGateIdByBlockId(blockId);
        // facilityId와 가까운 gate_id 얻어오기
        int gateIdCloseWithFacility = facilityCloseGateRepository.findGateIdByFacilityId(facilityId);
        System.out.println(gateIdCloseWithBlock + " " + gateIdCloseWithFacility);
        makeGraph();

        // 그래프 그리기

        return pointResultDto;
    }

    public void makeGraph(){
        List<GateToGateExitStair> list = gateToGateExitStairRepository.findAll();
        for(GateToGateExitStair g : list){
            System.out.println(g);
        }
        for(int i=1; i<=520; i++){
            graph[i] = new ArrayList<>();
        }

    }
}