package com.ssafy.lions.domain.strikezone.controller;

import com.ssafy.lions.domain.strikezone.dto.StrikeZoneResultDto;
import com.ssafy.lions.domain.strikezone.service.StrikeZoneService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/lions/strike_zone")
@RequiredArgsConstructor
@ResponseBody
@CrossOrigin(origins = "*")
@Tag(name = "스트라이크존 정보", description = "스트라이크존 정보 조회 API")
public class StrikeZoneController {

    private final StrikeZoneService strikeZoneService;

    @Operation(summary = "마지막 투구 정보를 StrikeZoneResultDto에 담아 반환합니다."
            , description = "주기적인 크롤링 요청으로 마지막 투구 정보 각각을 StrikeZoneResultDto 내부의 필드에 담아 반환합니다.")
    @GetMapping("/{date}/{awayTeam}/{inning}")
    public StrikeZoneResultDto getStrikeZoneInfo(@PathVariable String date, @PathVariable String awayTeam, @PathVariable String inning) throws Exception {
        return strikeZoneService.getStrikeZoneInfo(date, awayTeam, inning);
    }
}
