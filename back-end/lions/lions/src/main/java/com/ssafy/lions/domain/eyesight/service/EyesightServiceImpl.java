package com.ssafy.lions.domain.eyesight.service;

import com.ssafy.lions.domain.eyesight.dto.SightDto;
import com.ssafy.lions.domain.eyesight.dto.SightResultDto;
import com.ssafy.lions.domain.eyesight.repository.AreaRepository;
import com.ssafy.lions.domain.navigation.repository.BlockToGateRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class EyesightServiceImpl implements EyesightService{

    @Autowired
    AreaRepository areaRepository;

    @Override
    public SightResultDto eyesight(String blockId, int areaNum) {
        System.out.println("------------- service -----------------");

        SightDto sightDto = new SightDto();
        // 지금은 blockId와 areaNum을 이용해서 areaId를 가져오게 해놈
        // 나중에 파노라마 사진 url로 변경해야함.
        sightDto.setAreaId(areaRepository.findAreaNumByAreaNumAndBlockId(blockId, areaNum));

        // sightDto 를 SightResultDto에 넣어준다.
        SightResultDto sightResultDto = new SightResultDto();
        sightResultDto.setSightDto(sightDto);

        return sightResultDto;

    }
}
