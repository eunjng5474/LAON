package com.example.demo.domain.facility.repository;

import com.example.demo.domain.facility.Facility;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FacilityRepository extends JpaRepository<Facility, Long> {
}
