package com.ssafy.lions.domain.awayteam.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "team")
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int teamId;

    @Column(name = "team_initial")
    private String teamInitial;

    @Column(name = "team_emblem")
    private String teamEmblem;

    @Column(name = "team_symbol")
    private String teamSymbol;

    @Column(name = "team_name")
    private String teamName;
}
