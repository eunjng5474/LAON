package com.ssafy.lions.domain.navigation.service;

import com.ssafy.lions.domain.navigation.dto.PointResultDto;

public interface NaviService {
    PointResultDto blockToFacility(String blockId, int facilityId);
    PointResultDto blockToFacilityChooseOne(String blockId, String type);
}
