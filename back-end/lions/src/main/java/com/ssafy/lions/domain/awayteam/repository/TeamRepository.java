package com.ssafy.lions.domain.awayteam.repository;

import com.ssafy.lions.domain.awayteam.entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TeamRepository extends JpaRepository<Team, Long> {

    Optional<Team> findByTeamId(int teamId);
}
