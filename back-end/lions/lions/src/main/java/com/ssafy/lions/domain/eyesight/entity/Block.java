package com.ssafy.lions.domain.eyesight.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "block")
public class Block {

    @Id
    private String blockId;

    @Column(name = "block_type")
    private String blockType;
}
