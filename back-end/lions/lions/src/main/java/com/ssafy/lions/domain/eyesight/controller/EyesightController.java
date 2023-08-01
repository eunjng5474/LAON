package com.ssafy.lions.domain.eyesight.controller;

import com.ssafy.lions.domain.eyesight.dto.SightResultDto;
import com.ssafy.lions.domain.eyesight.service.EyesightService;
import com.ssafy.lions.domain.eyesight.service.EyesightServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/lions/eyesight")
public class EyesightController {

    @Autowired
    EyesightService service = new EyesightServiceImpl();

    private static final int SUCCESS = 1;

    private static final int FAIL = -1;

    @GetMapping("/{block_id}/{area_num}")
    public ResponseEntity<SightResultDto> Eyesight(@PathVariable(name = "block_id") String blockId, @PathVariable(name = "area_num") int areaNum) {

        int count = service.isSight(blockId, areaNum);
        System.out.println("isSight = " + count);

        if (count != 1) {
            System.out.println("not found");
            return ResponseEntity.notFound().build();
        }

        System.out.println("block_id = " + blockId + " area_num = " + areaNum);

        SightResultDto sightResultDto;
        sightResultDto = service.eyesight(blockId, areaNum);

        if (sightResultDto != null) {
            System.out.println(sightResultDto);
            sightResultDto.setResult(SUCCESS);
            sightResultDto.setCount(count);
        }else{
            System.out.println("sightResultDto is null");
            sightResultDto.setResult(FAIL);
        }

        if (sightResultDto.getResult() == SUCCESS) {
            return ResponseEntity.ok().body(sightResultDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
