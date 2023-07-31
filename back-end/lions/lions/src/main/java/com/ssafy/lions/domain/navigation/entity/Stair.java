package com.ssafy.lions.domain.navigation.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "stair")
public class Stair {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long stairId;

    @Column(name = "floor")
    private int floor;

    @Column(name = "label")
    private int label;

    @Column(name = "stair_name")
    private String stairName;

}
