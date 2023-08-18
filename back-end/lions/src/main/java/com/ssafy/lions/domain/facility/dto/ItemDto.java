package com.ssafy.lions.domain.facility.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
@Schema(description = "조회한 편의시설의 메뉴 정보 하나를 담은 객체")
public class ItemDto {
    @Schema(description = "메뉴의 ID", example = "1")
    private int itemId;
    @Schema(description = "메뉴 이름", example = "불고기피자")
    private String itemName;
    @Schema(description = "메뉴 가격", example = "20000")
    private int price;
    @Schema(description = "메뉴 종류", example = "단품")
    private String itemType;
}
