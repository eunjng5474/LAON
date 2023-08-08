package com.ssafy.lions.domain.strikezone.controller;

import com.ssafy.lions.domain.strikezone.dto.StrikeZoneResultDto;
import com.ssafy.lions.domain.strikezone.service.StrikeZoneService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/lions/strike_zone")
@RequiredArgsConstructor
@ResponseBody
public class StrikeZoneController {

    private final StrikeZoneService strikeZoneService;

    @GetMapping("/{date}/{awayTeam}/{inning}")
    public StrikeZoneResultDto getStrikeZoneInfo(@PathVariable String date, @PathVariable String awayTeam, @PathVariable String year, @PathVariable String inning) throws Exception {
        return strikeZoneService.getStrikeZoneInfo(date, awayTeam, inning);
    }
}
