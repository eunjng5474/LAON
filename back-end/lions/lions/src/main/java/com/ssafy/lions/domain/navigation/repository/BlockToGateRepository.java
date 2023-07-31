package com.ssafy.lions.domain.navigation.repository;

import com.ssafy.lions.domain.navigation.entity.BlockToGate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BlockToGateRepository extends JpaRepository<BlockToGate, Long> {
    @Query("SELECT b.gateId FROM BlockToGate b WHERE b.blockId = :blockId")
    Integer findGateIdByBlockId(String blockId);
}
