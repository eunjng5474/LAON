package com.ssafy.lions.domain.awayteam.service;

import com.ssafy.lions.domain.awayteam.dto.TeamResultDto;

public interface TeamService {
    TeamResultDto getTeamInfo(int teamId);
}
