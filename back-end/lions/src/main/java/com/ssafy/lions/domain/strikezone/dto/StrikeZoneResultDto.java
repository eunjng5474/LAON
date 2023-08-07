package com.ssafy.lions.domain.strikezone.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
@Schema(description = "투수의 투구 정보와 타자의 배팅 결과를 담아 반환하는 객체")
public class StrikeZoneResultDto {

    @Schema(description = "투수의 투구 구속")
    private String speed;

    @Schema(description = "투수의 투구 구종")
    private String stuff;

    public StrikeZoneResultDto(String speed, String stuff) {
        this.speed = speed;
        this.stuff = stuff;
    }
}
