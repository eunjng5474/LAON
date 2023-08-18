package com.ssafy.lions.domain.eyesight.dto;

import com.ssafy.lions.domain.eyesight.entity.Area;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.List;

@Data
@Schema(description = "블럭 검색, 좌석 영역 클릭시 결과를 담아 반환하는 객체")
public class SightResultDto {
    @Schema(description = "좌석 영역 클릭시 영역 정보", example = "Area 객체")
    private Area area; // 좌석 영역 클릭시 해당 객체에 값 넣는다.

    @Schema(description = "블럭 검색시 해당 블럭에 해당하는 영역 정보", example = "Area 리스틑 객체")
    private List<Area> areaList; // 블럭으로 검색시 해당 블럭에 해당하는 영역을 리스트로 담아준다.

    @Schema(description = "블럭 검색, 좌석 영역 정보 조회 성공 여부", example = "1 : 성공, -1 : 실패")
    private int result;

    @Schema(description = "블럭 검색시 해당 블럭에 해당하는 영역 리스트의 갯수", example = "3")
    private int count;
}
