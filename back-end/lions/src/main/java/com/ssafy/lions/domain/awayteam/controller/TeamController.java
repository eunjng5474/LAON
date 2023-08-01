package com.ssafy.lions.domain.awayteam.controller;

import com.ssafy.lions.domain.awayteam.dto.TeamResultDto;
import com.ssafy.lions.domain.awayteam.service.TeamServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/lions/team")
public class TeamController {
    @Autowired
    TeamServiceImpl teamService;
    private static final int SUCCESS = 1;
    private static final int FAIL = -1;
    @GetMapping("/{team_id}")
    public ResponseEntity<TeamResultDto> getTeamInfo(@PathVariable("team_id") Integer teamId){
        System.out.println("입력된 팀 id = " + teamId);
        /*
        teamId = 1 -> 롯데
        teamId = 2 -> lg
        teamId = 3 -> ssg
        teamId = 4 -> 두산
        teamId = 5 -> nc
        teamId = 6 -> kt
        teamId = 7 -> 기아
        teamId = 8 -> 한화
        teamId = 9 -> 키움
        teamId = 10 -> 삼성
        */
        TeamResultDto teamResultDto = teamService.getTeamInfo(teamId);
        System.out.println(teamResultDto);
        return ResponseEntity.ok().body(teamResultDto);
    }
}
