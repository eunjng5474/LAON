package com.ssafy.lions.domain.navigation.dto;

import lombok.Data;

import java.util.List;

@Data
public class PointResultDto {
    List<PointDto> pointDtoList;
    int pathCnt;
    int result;
}
