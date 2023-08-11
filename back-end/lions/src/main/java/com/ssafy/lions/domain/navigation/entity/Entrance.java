package com.ssafy.lions.domain.navigation.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "entrance")
public class Entrance {
    @Id
    private Long entranceId;

    @Column(name = "floor")
    private int floor;

    @Column(name = "label")
    private int label;

    @Column(name = "entrance_name")
    private String entranceName;

    @Column(name = "x")
    private int x;

    @Column(name = "y")
    private int y;
}
