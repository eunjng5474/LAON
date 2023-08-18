package com.ssafy.lions.domain.eyesight.repository;

import com.ssafy.lions.domain.awayteam.entity.Team;
import com.ssafy.lions.domain.eyesight.entity.Area;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AreaRepository extends JpaRepository<Area, Long> {
    Optional<Area> findByBlockIdAndAreaNum(String blockId, int areaNum);
    List<Area> findByBlockId(String blockId);
}
