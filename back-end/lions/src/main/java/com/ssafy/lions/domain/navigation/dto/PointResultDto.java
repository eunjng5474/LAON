package com.ssafy.lions.domain.navigation.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.util.List;

@Data
@Schema(description = "최적 경로 정보를 포함하여 반환하는 객체")
public class PointResultDto {

    @Schema(description = "최적 경로 리스트", example = "List<PointDto>")
    List<PointDto> pointDtoList;

    @Schema(description = "최적 경로 리스트의 크기", example = "10")
    Integer pathCnt;

    @Schema(description = "최적 경로 반환 여부", example = "1 : 최적 경로 있음, -1 : 최적 경로 없음")
    int result;

    @Schema(description = "최적의 목적지 이름", example = "짝태시대(RF-8)")
    String facilityName;

    @Schema(description = "출발지와 목적지의 층 차이", example = "1")
    Integer diffBetweenStartFloorAndEndFloor;
}
