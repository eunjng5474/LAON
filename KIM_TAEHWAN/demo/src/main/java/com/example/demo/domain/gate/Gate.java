package com.example.demo.domain.gate;

import jakarta.persistence.*;
import lombok.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Builder
@Table(name = "GATE")
@AllArgsConstructor
public class Gate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "gate")
    private int id;

    private int gateFacilityStairId;

    private int stairId;

    private int gateNum;
    private double latitude;
    private double longitude;
}
