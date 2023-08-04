package com.ssafy.lions.domain.facility.controller;

import com.ssafy.lions.domain.facility.dto.FacilityResultDto;
import com.ssafy.lions.domain.facility.dto.ItemResultDto;
import com.ssafy.lions.domain.facility.service.FacilityService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/lions/facility")
public class FacilityController {
    @Autowired
    FacilityService facilityService;
    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @Operation(summary = "구장 내 전체 편의시설을 FacilityResultDto에 담아 반환합니다."
            , description = "목적지 입력을 위한 클릭 이벤트 발생시 구장 내 전체 편의시설 정보를 FacilityResultDto 내부의 List<Facility>에 담아 반환합니다.")
    @GetMapping("/all")
    public ResponseEntity<FacilityResultDto> getFacilityList(){
        System.out.println("---------------- Facility Controller -------------------");
        System.out.println("---------------- 편의시설 전체 조회 -------------------");
        FacilityResultDto facilityResultDto = facilityService.getFacilityList();
        System.out.println("결과 = " + facilityResultDto);
        return ResponseEntity.ok().body(facilityResultDto);
    }

    @Operation(summary = "선택한 편의시설 메뉴, 가격 정보를 ItemResultDto에 담아 반환합니다."
             ,description = "선택한 편의시설의 하나의 메뉴는 itemDto에 담겨있고 가게 전체 메뉴는 List<ItemDto>에 담깁니다. result = -1 일 경우 해당 가게의 메뉴가 등록되지 않았다는 표시입니다.")
    @GetMapping("/detail/{facility_id}")
    public ResponseEntity<ItemResultDto> getFacilityMenu(@PathVariable(name = "facility_id") int facilityId){
        System.out.println("---------------- Facility Controller -------------------");
        System.out.println("---------------- 편의시설 상세 정보 -------------------");
        ItemResultDto itemResultDto = facilityService.getFacilityMenu(facilityId);
        System.out.println("결과 = " + itemResultDto);
        return ResponseEntity.ok().body(itemResultDto);
    }
}