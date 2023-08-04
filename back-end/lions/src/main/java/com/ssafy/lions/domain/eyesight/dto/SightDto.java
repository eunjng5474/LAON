package com.ssafy.lions.domain.eyesight.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Data
@Schema(description = "조회한 좌석 영역 정보를 담은 객체")
public class SightDto {
    @Schema(description = "해당 영역의 블럭 ID", example = "1-3")
    private String blockId;

    @Schema(description = "해당 영역의 블럭 종류", example = "1루 내야 지정석")
    private String blockType;

    @Schema(description = "해당 영역의 번호", example = "3")
    private int areaNum;

    @Schema(description = "해당 영역의 id", example = "12")
    private int areaId;
}
