package com.ssafy.lions.domain.facility.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "item")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int itemId;

    @Column(name = "item_name")
    private String itemName;

    @Column(name = "price")
    private int price;

    // Item 엔티티 클래스가 Facility 엔티티 클래스와 다대일 관계를 가지도록 설정
    // Many to one => Item : Facility = N : 1
    // 외래키는 이렇게 설정하는 것 같음
    @ManyToOne
    @JoinColumn(name = "facility_id")
    private Facility facility;

    @Column(name = "item_type")
    private String itemType;
}
