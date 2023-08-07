package com.ssafy.lions.domain.awayteam.controller;

import com.ssafy.lions.domain.awayteam.dto.TeamResultDto;
import com.ssafy.lions.domain.awayteam.service.TeamServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Schema;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/lions/team")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true", allowedHeaders = "*", methods = {
        RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS,
    RequestMethod.HEAD })
public class TeamController {
    @Autowired
    TeamServiceImpl teamService;
    private static final int SUCCESS = 1;
    private static final int FAIL = -1;
    @Operation(summary = "팀 id 전달시 팀의 팀명, 엠블럼, 로고 정보를 포함하는 Team 객체를 반환합니다.", description = "teamId = 1(롯데)\n" +
            "        teamId = 2(LG)\n" +
            "        teamId = 3(SSG)\n" +
            "        teamId = 4(두산)\n" +
            "        teamId = 5(NC)\n" +
            "        teamId = 6(KT)\n" +
            "        teamId = 7(기아)\n" +
            "        teamId = 8(한화)\n" +
            "        teamId = 9(키움)\n" +
            "        teamId = 10(삼성)" +
            "        원하는 팀 id를 전달하세요.")
    @GetMapping("/{team_id}")
    public ResponseEntity<TeamResultDto> getTeamInfo(@PathVariable("team_id") Integer teamId){
        System.out.println("---------------- Team Controller --------------------");
        System.out.println("---------------- 팀 정보 조회 -------------------");
        System.out.println("입력된 팀 id = " + teamId);
        TeamResultDto teamResultDto = teamService.getTeamInfo(teamId);
        System.out.println("결과 = " + teamResultDto);
        return ResponseEntity.ok().body(teamResultDto);
    }
}
