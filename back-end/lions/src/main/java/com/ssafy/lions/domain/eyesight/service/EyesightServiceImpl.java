package com.ssafy.lions.domain.eyesight.service;

import com.ssafy.lions.domain.eyesight.dto.SightDto;
import com.ssafy.lions.domain.eyesight.dto.SightResultDto;
import com.ssafy.lions.domain.eyesight.entity.Area;
import com.ssafy.lions.domain.eyesight.repository.AreaRepository;
import com.ssafy.lions.domain.navigation.repository.BlockToGateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EyesightServiceImpl implements EyesightService{

    @Autowired
    AreaRepository areaRepository;
    private static final int SUCCESS = 1;
    private static final int FAIL = -1;
    @Override
    public SightResultDto getEyeSight(String blockId, int areaNum) {
        System.out.println("------------- eyesight service -----------------");

        SightResultDto sightResultDto = new SightResultDto();

        try{
            Area area = areaRepository.findByBlockIdAndAreaNum(blockId, areaNum).orElseThrow();
            sightResultDto.setResult(SUCCESS);
            sightResultDto.setArea(area);
            sightResultDto.setCount(1);
            System.out.println("클릭한 영역 사진 존재 O");
        }catch (Exception e){
            e.printStackTrace();
            sightResultDto.setResult(FAIL);
            sightResultDto.setCount(0);
            System.out.println("클릭한 영역 사진 존재 X");
        }
        System.out.println(sightResultDto);
        return sightResultDto;
    }

    @Override
    public SightResultDto searchBlock(String blockId) {
        System.out.println("------------- eyesight service -----------------");

        SightResultDto sightResultDto = new SightResultDto();

        List<Area> areaList = areaRepository.findByBlockId(blockId); // 블럭에 맞는 영역을 검색
        if(areaList.size() == 0){
            sightResultDto.setResult(FAIL);
            System.out.println("검색 결과 없음");
        }else{
            sightResultDto.setResult(SUCCESS);
            sightResultDto.setAreaList(areaList);
            sightResultDto.setCount(areaList.size());
            System.out.println("검색 결과 있음");
        }

        return sightResultDto;
    }
}
