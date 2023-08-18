package com.ssafy.lions.domain.facility.repository;

import com.ssafy.lions.domain.facility.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
    List<Item> findByFacility_FacilityId(int facility_id);
}
