package com.ssafy.lions.domain.navigation.dto;

import lombok.Builder;
import lombok.Data;

@Data
public class PointDto {
    int pointId;
    String pointName;
    char type; // G : 기둥, S : 계단, E : 출구

    @Builder
    public PointDto(int pointId, String pointName, char type){
        this.pointId = pointId;
        this.pointName = pointName;
        this.type = type;
    }
}
