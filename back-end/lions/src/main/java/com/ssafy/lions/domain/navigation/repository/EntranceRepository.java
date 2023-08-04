package com.ssafy.lions.domain.navigation.repository;

import com.ssafy.lions.domain.navigation.entity.Entrance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EntranceRepository extends JpaRepository<Entrance, Long> {
    @Query("SELECT e.entranceName FROM Entrance e WHERE e.entranceId = :entranceId")
    String findEntranceNameByEntranceId(int entranceId);
}