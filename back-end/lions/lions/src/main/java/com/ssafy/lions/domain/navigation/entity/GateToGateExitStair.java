package com.ssafy.lions.domain.navigation.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "gate_to_gate_exit_stair")
public class GateToGateExitStair {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long connectId;

    @Column(name = "gate_id")
    private int gateId;

    @Column(name = "connected_gate_id")
    private int connectedGateId;

    @Column(name = "connected_exit_id")
    private int connectedExitId;

    @Column(name = "connected_stair_id")
    private int connectedStairId;



}
