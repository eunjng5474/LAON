package com.ssafy.lions.domain.facility.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "facility")
public class Facility {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int facilityId;

    @Column(name = "facility_name")
    private String facilityName;

    @Column(name = "type")
    private String type;

    @Column(name = "floor")
    private int floor;
}
