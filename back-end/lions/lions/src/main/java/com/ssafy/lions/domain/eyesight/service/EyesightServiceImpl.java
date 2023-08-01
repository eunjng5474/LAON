package com.ssafy.lions.domain.eyesight.service;

import com.ssafy.lions.domain.eyesight.dto.SightDto;
import com.ssafy.lions.domain.eyesight.dto.SightResultDto;
import com.ssafy.lions.domain.eyesight.repository.AreaRepository;
import com.ssafy.lions.domain.eyesight.repository.BlockRepository;
import com.ssafy.lions.domain.navigation.entity.Block;
import com.ssafy.lions.domain.navigation.repository.BlockToGateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EyesightServiceImpl implements EyesightService{

    @Autowired
    AreaRepository areaRepository;

    @Autowired
    BlockRepository blockRepository;

    @Override
    public SightResultDto eyesight(String blockId, int areaNum) {
        System.out.println("------------- service -----------------");

        SightDto sightDto = new SightDto();

        // 지금은 blockId와 areaNum을 이용해서 areaId를 가져오게 해놈
        // 나중에 파노라마 사진 url로 변경해야함.
        sightDto.setAreaId(areaRepository.findAreaNumByAreaNumAndBlockId(blockId, areaNum));
        sightDto.setBlockId(blockId);
        sightDto.setAreaNum(areaNum);
        List<Block> block = blockRepository.findBlockTypeByBlockId(blockId);

        if (block != null) {
            sightDto.setBlockType(block.get(0).getBlockType());
        }else{
            System.out.println("not found block");
        }

        // sightDto 를 SightResultDto에 넣어준다.
        SightResultDto sightResultDto = new SightResultDto();
        sightResultDto.setSightDto(sightDto);

        return sightResultDto;
    }

    @Override
    public int isSight(String blockId, int areaNum) {
        return areaRepository.findByBlockIdandAreaNum(blockId, areaNum);
    }
}