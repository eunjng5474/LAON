package com.ssafy.lions.domain.eyesight.dto;

import lombok.*;

@Data
public class SightDto {
    // block
    private String blockId;
    private String blockType;

    // area
    private int areaNum;
    private int areaId;
}
