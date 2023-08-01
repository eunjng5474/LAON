package com.ssafy.lions.domain.awayteam.dto;

import com.ssafy.lions.domain.awayteam.entity.Team;
import lombok.Data;

@Data
public class TeamResultDto {
    Team team;
    int result;
}
