package com.ssafy.lions.domain.eyesight.controller;

import com.ssafy.lions.domain.eyesight.dto.SightResultDto;
import com.ssafy.lions.domain.eyesight.service.EyesightService;
import com.ssafy.lions.domain.eyesight.service.EyesightServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/lions/eyesight")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true", allowedHeaders = "*", methods = {
        RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS,
        RequestMethod.HEAD })
public class EyesightController {

    @Autowired
    EyesightService eyesightService;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;
    @Operation(summary = "block_id와 area_num 전달시 좌석 시야 사진을 포함한 Area 객체를 반환합니다."
            , description = "block_id는 1-2, LF-1과 같이 명확한 블럭 이름을 전달해야 합니다. area_num은 해당 블럭 안에서 몇번째 영역인지 숫자로 전달해야합니다.")
    @GetMapping("/{block_id}/{area_num}")
    public ResponseEntity<SightResultDto> getEyesight(@PathVariable(name = "block_id") String blockId, @PathVariable(name = "area_num") int areaNum) {
        System.out.println("---------------- EyeSight Controller --------------------");
        System.out.println("---------------- 선택 영역 좌석 시야 정보 -------------------");
        System.out.println(" 클릭한 block_id = " + blockId + " area_num = " + areaNum);
        SightResultDto sightResultDto = eyesightService.getEyeSight(blockId, areaNum);
        return ResponseEntity.ok().body(sightResultDto);
    }

    /*
        기능 : 좌석 검색
        기능 상세 : 블럭 검색시 해당 블럭에 해당하는 영역 객체를 리스트 형태로 넘겨준다.
     */
    @Operation(summary = "블럭명 검색시 해당 블럭에 속하는 영역을 Area 리스트로 반환합니다.", description = "block_id는 1-2, LF-1과 같이 명확한 블럭 이름을 전달해야 합니다.")
    @GetMapping("/{block_id}")
    public ResponseEntity<SightResultDto> searchBlock(@PathVariable(name = "block_id") String blockId) {
        System.out.println("---------------- EyeSight Controller --------------------");
        System.out.println("---------------- 블럭 검색 -------------------");
        System.out.println("검색한 block_id = " + blockId);
        SightResultDto sightResultDto = eyesightService.searchBlock(blockId);
        System.out.println("결과 = " + sightResultDto);
        return ResponseEntity.ok().body(sightResultDto);
    }
}
