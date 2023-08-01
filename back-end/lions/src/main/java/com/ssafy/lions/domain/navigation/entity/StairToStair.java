package com.ssafy.lions.domain.navigation.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "stair_to_stair")
public class StairToStair {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long connectId;

    @Column(name = "stair_id")
    private int stairId;

    @Column(name = "connected_stair_id")
    private int connectedStairId;

}
