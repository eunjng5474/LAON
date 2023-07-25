package com.example.demo.domain.facility;

import jakarta.persistence.*;
import lombok.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Builder
@Table(name = "FACILITY")
@AllArgsConstructor
public class Facility {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "f_id")
    private int id;

    private int gateFacilityStairId;

    private int type;
    private int name;
    private int menu;
    private int open;
    private int gateId;
}
