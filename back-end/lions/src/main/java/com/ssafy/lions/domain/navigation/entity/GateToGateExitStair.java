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
    private Integer gateId;

    @Column(name = "connected_gate_id")
    private Integer connectedGateId;

    @Column(name = "connected_exit_id")
    private Integer connectedExitId;

    @Column(name = "connected_stair_id")
    private Integer connectedStairId;

}
