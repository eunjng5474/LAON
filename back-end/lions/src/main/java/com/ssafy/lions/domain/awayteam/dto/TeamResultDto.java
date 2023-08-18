package com.ssafy.lions.domain.awayteam.dto;

import com.ssafy.lions.domain.awayteam.entity.Team;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
@Schema(description = "팀 정보 조회시 결과를 담아 반환하는 객체")
public class TeamResultDto {

    @Schema(description = "조회한 팀 정보", example = "Team 객체")
    Team team;

    @Schema(description = "팀 조회 결과 성공 여부", example = "1 : 성공, -1 : 실패")
    int result;
}
