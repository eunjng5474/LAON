package com.ssafy.lions.domain.eyesight.repository;

import com.ssafy.lions.domain.eyesight.entity.Block;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface blockRepository extends JpaRepository<Block, String> {


}
