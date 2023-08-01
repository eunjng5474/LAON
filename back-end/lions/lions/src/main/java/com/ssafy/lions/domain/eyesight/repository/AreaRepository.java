package com.ssafy.lions.domain.eyesight.repository;

import com.ssafy.lions.domain.eyesight.entity.Area;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AreaRepository extends JpaRepository<Area, Long> {
    @Query("SELECT a.areaId FROM Area a WHERE a.areaNum = :areaNum and a.blockId = :blockId")
    Integer findAreaNumByAreaNumAndBlockId(String blockId, int areaNum);

    @Query("SELECT count(a.areaId) FROM Area a WHERE a.areaNum = :areaNum and a.blockId = :blockId")
    Integer findByBlockIdandAreaNum(String blockId, int areaNum);
}
