package com.ssafy.lions.domain.navigation.controller;

import com.ssafy.lions.domain.navigation.dto.PointResultDto;
import com.ssafy.lions.domain.navigation.service.NaviServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/lions/route")
public class NaviController {
    @Autowired
    NaviServiceImpl naviService;
    /*
        출발지 : 좌석
        도착지 : 편의시설
     */
    @GetMapping("/{block_id}/{facility_id}")
    public ResponseEntity<PointResultDto> blockToFacility(@PathVariable("block_id") String blockId, @PathVariable("facility_id") int facilityId) {
        System.out.println("block_id = " + blockId + " facilityId = " + facilityId);

        PointResultDto pointResultDto = naviService.blockToFacility(blockId, facilityId);
        System.out.println("------------- controller -----------------");

        return ResponseEntity.ok().body(pointResultDto);
    }
}
