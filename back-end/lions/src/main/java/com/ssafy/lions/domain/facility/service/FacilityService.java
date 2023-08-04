package com.ssafy.lions.domain.facility.service;

import com.ssafy.lions.domain.facility.dto.FacilityResultDto;
import com.ssafy.lions.domain.facility.dto.ItemResultDto;

public interface FacilityService {
    FacilityResultDto getFacilityList();
    ItemResultDto getFacilityMenu(int facilityId);
}
