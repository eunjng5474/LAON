package com.ssafy.lions.domain.navigation.controller;

import com.ssafy.lions.domain.navigation.dto.PointResultDto;
import com.ssafy.lions.domain.navigation.service.NaviServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/lions/route")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true", allowedHeaders = "*", methods = {
        RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS,
        RequestMethod.HEAD })
public class NaviController {
    @Autowired
    NaviServiceImpl naviService;
    /*
        출발지 : 좌석
        도착지 : 편의시설
     */
    @Operation(summary = "[출발지 : 블럭 ~ 목적지 : 편의시설] 입력시 최적 경로를 PointResultDto에 담아 반환합니다.", description = "현재 블럭에서 선택한 편의시설까지 최적경로를 제공합니다. 블럭은 1-2, LF-1과 같이 블럭명을 전달해야합니다. 편의시설은 편의시설ID인 숫자를 전달해야합니다.")
    @GetMapping("/onebyone/{block_id}/{facility_id}")
    public ResponseEntity<PointResultDto> blockToFacility(@PathVariable("block_id") String blockId, @PathVariable("facility_id") int facilityId) {
        System.out.println("---------------- Navi Controller --------------------");
        System.out.println("---------------- 출발지(좌석) -> 목적지(편의시설) -------------------");
        System.out.println("block_id(출발지) = " + blockId + " facilityId(목적지) = " + facilityId);
        PointResultDto pointResultDto = naviService.blockToFacility(blockId, facilityId);
        System.out.println("결과 = " + pointResultDto);
        return ResponseEntity.ok().body(pointResultDto);
    }
    @Operation(summary = "[출발지 : 블럭 ~ 목적지 : 편의시설 카테고리] 입력시 최적 경로를 PointResultDto에 담아 반환합니다.", description = "현재 블럭으로 부터 선택한 편의시설까지 최적경로를 제공합니다. 블럭은 1-2, LF-1과 같이 블럭명을 전달해야합니다. 편의시설은 편의시설ID인 숫자를 전달해야합니다.")
    @GetMapping("/{block_id}/{type}")
    public ResponseEntity<PointResultDto> blockToFacilityChooseOne(@PathVariable("block_id") String blockId, @PathVariable("type") String type) {
        System.out.println("---------------- Navi Controller --------------------");
        System.out.println("---------------- 출발지(좌석) -> 목적지(선택한 카테고리) 중 가장 가까운 곳으로 이동 -------------------");
        System.out.println("block_id(출발지) = " + blockId + " facilityId(목적지) = " + type);
        PointResultDto pointResultDto = naviService.blockToFacilityChooseOne(blockId, type);
        System.out.println("결과 = " + pointResultDto);
        return ResponseEntity.ok().body(pointResultDto);
    }

}
