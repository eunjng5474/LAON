package com.ssafy.lions.domain.navigation.repository;

import com.ssafy.lions.domain.navigation.entity.Gate;
import com.ssafy.lions.domain.navigation.entity.Stair;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StairRepository extends JpaRepository<Stair, Long> {
    @Query("SELECT s.stairName FROM Stair s WHERE s.stairId = :stairId")
    String findStairNameByStairId(int stairId);

    @Query("SELECT s.x FROM Stair s WHERE s.stairId = :stairId")
    int findXByStairId(int stairId);

    @Query("SELECT s.y FROM Stair s WHERE s.stairId = :stairId")
    int findYByStairId(int stairId);

}
