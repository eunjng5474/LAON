package com.ssafy.lions.domain.navigation.entity;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "block_to_gate")
@Data
public class BlockToGate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long connectId;

    @Column(name = "block_id")
    private String blockId;

    @Column(name = "gate_id")
    private int gateId;


}
