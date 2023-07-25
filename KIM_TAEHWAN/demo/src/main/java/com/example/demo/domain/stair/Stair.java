package com.example.demo.domain.stair;

import jakarta.persistence.*;
import lombok.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Builder
@Table(name = "STAIR")
@AllArgsConstructor
public class Stair {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stair_id")
    private int id;

    private int gateFacilityStairId;

    private int upStairId;
    private int downStairId;
}
