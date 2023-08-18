package com.ssafy.lions.domain.eyesight.service;

import com.ssafy.lions.domain.eyesight.dto.SightDto;
import com.ssafy.lions.domain.eyesight.dto.SightResultDto;
import org.springframework.stereotype.Service;


public interface EyesightService {
    public SightResultDto getEyeSight(String blockId, int areaNum);
    public SightResultDto searchBlock(String blockId);
}
