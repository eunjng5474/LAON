package com.ssafy.lions.domain.navigation.dto;

import lombok.Data;

@Data
public class PointDto {
    int floor;
    int label;
    String type; // G : 기둥, S : 계단
}
