package com.ssafy.lions.domain.eyesight.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "area")
public class Area {

    @Id
    private int areaId;

    @Column(name = "area_num")
    private int areaNum;

    @Column(name = "block_id")
    private String blockId;
}
