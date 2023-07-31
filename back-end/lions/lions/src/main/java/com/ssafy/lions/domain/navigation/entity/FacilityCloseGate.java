package com.ssafy.lions.domain.navigation.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "facility_close_gate")
public class FacilityCloseGate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long connectId;

    @Column(name = "facility_id")
    private int facilityId;

    @Column(name = "gate_id")
    private int gateId;
}
