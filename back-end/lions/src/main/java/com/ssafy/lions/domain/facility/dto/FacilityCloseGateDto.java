package com.ssafy.lions.domain.facility.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;
/*
    편의시설과 가까운 게이트의 정보
    문제 : FacilityRespository에서는 조인 결과 열을 받을 때 Facility Entity내부의 변수만을 받을 수 있다. 나는 facility_close_gate 안의 gate_id를 알고싶다!
    해결방법 : join결과 cloumn을 모두 담은 Dto를 만들어서 해결한다.
 */
@Data
@Schema(description = "facility테이블과 facility_close_gate테이블의 join 결과를 담은 객체(편의시설과 가까운 게이트번호를 알기위함)")
public class FacilityCloseGateDto {
    @Schema(description = "편의시설의 ID", example = "12")
    int facilityId;

    @Schema(description = "편의시설의 이름", example = "남자화장실, 땅땅치킨")
    String facilityName;

    @Schema(description = "편의시설의 종류", example = "식음료, 편의시설")
    String type;

    @Schema(description = "편의시설과 가까운 게이트(기둥)", example = "213, 214")
    int closeGateId;

    @Builder
    public FacilityCloseGateDto(int facilityId, String facilityName, String type, int closeGateId){
        this.facilityId = facilityId;
        this.facilityName = facilityName;
        this.type = type;
        this.closeGateId = closeGateId;
    }
}
