package com.ssafy.lions.domain.facility.service;

import com.ssafy.lions.domain.facility.dto.FacilityResultDto;
import com.ssafy.lions.domain.facility.dto.ItemDto;
import com.ssafy.lions.domain.facility.dto.ItemResultDto;
import com.ssafy.lions.domain.facility.entity.Facility;
import com.ssafy.lions.domain.facility.entity.Item;
import com.ssafy.lions.domain.facility.repository.FacilityRepository;
import com.ssafy.lions.domain.facility.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FacilityServiceImpl implements FacilityService{
    @Autowired
    FacilityRepository facilityRepository;
    @Autowired
    ItemRepository itemRepository;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @Override
    public FacilityResultDto getFacilityList() {
        System.out.println("-------------------- facility service ------------------");
        System.out.println("-------------------- 편의 시설 전체 조회 ------------------");
        List<Facility> facilityList = facilityRepository.findAll();
        System.out.println(facilityList);

        FacilityResultDto facilityResultDto = new FacilityResultDto();
        facilityResultDto.setFacilityList(facilityList);
        facilityResultDto.setFacilityCnt(facilityList.size());
        facilityResultDto.setResult(SUCCESS);
        return facilityResultDto;
    }

    @Override
    public ItemResultDto getFacilityMenu(int facilityId) {
        System.out.println("-------------------- facility service ------------------");
        System.out.println("-------------------- 선택한 편의시설의 메뉴 조회 ------------------");
        List<Item> itemList = itemRepository.findByFacility_FacilityId(facilityId);
        List<ItemDto> itemDtoList = new ArrayList<>();
        for(Item item : itemList){
            ItemDto itemDto = new ItemDto();
            itemDto.setItemId(item.getItemId());
            itemDto.setItemName(item.getItemName());
            itemDto.setPrice(item.getPrice());
            itemDtoList.add(itemDto);
        }
        System.out.println(itemDtoList);
        ItemResultDto itemResultDto = new ItemResultDto();
        // 해당 가게 메뉴가 등록되지 않았을 경우
        if(itemDtoList.size() == 0){
            itemResultDto.setItemDtoList(itemDtoList);
            itemResultDto.setResult(FAIL);
        }else{
            itemResultDto.setItemDtoList(itemDtoList);
            itemResultDto.setResult(SUCCESS);
        }
        return itemResultDto;
    }
}
