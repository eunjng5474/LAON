package com.ssafy.lions.domain.awayteam.service;

import com.ssafy.lions.domain.awayteam.dto.TeamResultDto;
import com.ssafy.lions.domain.awayteam.entity.Team;
import com.ssafy.lions.domain.awayteam.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TeamServiceImpl implements TeamService{
    @Autowired
    TeamRepository teamRepository;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;
    @Override
    public TeamResultDto getTeamInfo(int teamId) {
        System.out.println("----------------- service ---------------------");
        TeamResultDto teamResultDto = new TeamResultDto();
        try{
            Team teamInfo = teamRepository.findByTeamId(teamId).orElseThrow(); // findByTeamId -> 객체가 없으면 예외를 발생시킨다.
            System.out.println(teamInfo);
            teamResultDto.setTeam(teamInfo);
            teamResultDto.setResult(SUCCESS);
        }catch(Exception e){
            e.printStackTrace();
            teamResultDto.setResult(FAIL);
        }

        System.out.println(teamResultDto);
        return teamResultDto;
    }
}
