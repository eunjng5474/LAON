package com.ssafy.lions.domain.navigation.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
@Schema(description = "같은 층에 찾는 편의시설이 있을 때 길찾기에 사용되는 객체")
public class DestinationDto {
    @Schema(description = "찾고자 하는 편의시설과 가까운 게이트 ID", example = "312, 313")
    int closeGateId;
    @Schema(description = "찾고자 하는 편의시설의 ID", example = "1, 2, 3")
    int facilityId;
    @Schema(description = "찾고자 하는 편의시설의 이름", example = "짝태시대(Food Street)")
    String facilityName;
}
