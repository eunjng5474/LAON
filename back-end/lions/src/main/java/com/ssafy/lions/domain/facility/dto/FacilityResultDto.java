package com.ssafy.lions.domain.facility.dto;

import com.ssafy.lions.domain.facility.entity.Facility;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.util.List;

@Data
@Schema(description = "전체 편의시설 조회시 편의시설 리스트를 담아 반환하는 객체")
public class FacilityResultDto {
    @Schema(description = "구장내 전체 편의시설 정보", example = "Faciliy 테이블 객체의 리스트")
    List<Facility> facilityList;

    @Schema(description = "편의시설 전체 조회 결과", example = "1 : 조회 결과 있음, -1 : 조회 결과 없음")
    int result; // 반환 결과

    @Schema(description = "편의시설 전체 갯수", example = "96")
    int facilityCnt; // 편의시설의 개수
}
