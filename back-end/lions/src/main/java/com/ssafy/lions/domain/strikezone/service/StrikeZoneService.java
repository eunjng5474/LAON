package com.ssafy.lions.domain.strikezone.service;

import com.ssafy.lions.domain.strikezone.dto.StrikeZoneResultDto;

public interface StrikeZoneService {

    StrikeZoneResultDto getStrikeZoneInfo(String date, String awayTeam, String inning) throws Exception;
}
