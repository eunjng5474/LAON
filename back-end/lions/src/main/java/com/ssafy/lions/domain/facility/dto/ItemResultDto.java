package com.ssafy.lions.domain.facility.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.util.List;

@Data
@Schema(description = "조회한 편의시설의 전체 메뉴 정보를 담은 객체")
public class ItemResultDto {
    @Schema(description = "편의시설의 전체 메뉴", example = "List<ItemDto>")
    List<ItemDto> itemDtoList;
    @Schema(description = "편의시설 메뉴 조회 결과", example = "1 : 조회 성공, -1 : 조회 실패")
    int result;
}
