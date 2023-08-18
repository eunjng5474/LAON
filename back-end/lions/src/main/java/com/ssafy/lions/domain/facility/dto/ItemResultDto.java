package com.ssafy.lions.domain.facility.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.util.List;

@Data
@Schema(description = "조회한 편의시설의 전체 메뉴 정보를 담은 객체")
public class ItemResultDto {
    @Schema(description = "조회한 편의시설의 단품 메뉴 리스트", example = "List<ItemDto>")
    List<ItemDto> singleItemDtoList;

    @Schema(description = "조회한 편의시설의 세트 메뉴 리스트", example = "List<ItemDto>")
    List<ItemDto> setItemDtoList;

    @Schema(description = "조회한 편의시설의 사이드 메뉴 리스트", example = "List<ItemDto>")
    List<ItemDto> sideItemDtoList;

    @Schema(description = "조회한 편의시설의 음료 메뉴 리스트", example = "List<ItemDto>")
    List<ItemDto> beverageItemDtoList;

    @Schema(description = "편의시설 메뉴 조회 결과", example = "1 : 조회 성공, -1 : 조회 실패")
    int result;
}
