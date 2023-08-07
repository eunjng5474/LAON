package com.ssafy.lions.domain.facility.service;

import com.ssafy.lions.domain.facility.dto.*;
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

        ItemResultDto itemResultDto = new ItemResultDto();

        ArrayList<ItemDto> singleItemDtoList = new ArrayList<>();
        ArrayList<ItemDto> setItemDtoList = new ArrayList<>();
        ArrayList<ItemDto> sideItemDtoList = new ArrayList<>();
        ArrayList<ItemDto> beverageItemDtoList = new ArrayList<>();

        for(Item item : itemList){
            String itemType = item.getItemType();
            ItemDto itemDto = makeItemDto(item);
            if(itemType.equals("단품")){
                singleItemDtoList.add(itemDto);
            }else if(itemType.equals("세트")){
                setItemDtoList.add(itemDto);
            }else if(itemType.equals("사이드")){
                sideItemDtoList.add(itemDto);
            }else if(itemType.equals("음료")){
                beverageItemDtoList.add(itemDto);
            }
        }
        itemResultDto.setResult(FAIL);
        if(singleItemDtoList.size() != 0){
            itemResultDto.setSingleItemDtoList(singleItemDtoList);
            itemResultDto.setResult(SUCCESS);
        }
        if(setItemDtoList.size() != 0){
            itemResultDto.setSetItemDtoList(setItemDtoList);
            itemResultDto.setResult(SUCCESS);
        }
        if(sideItemDtoList.size() != 0){
            itemResultDto.setSideItemDtoList(sideItemDtoList);
            itemResultDto.setResult(SUCCESS);
        }
        if(beverageItemDtoList.size() != 0){
            itemResultDto.setBeverageItemDtoList(beverageItemDtoList);
            itemResultDto.setResult(SUCCESS);
        }

        return itemResultDto;
    }

    public ItemDto makeItemDto(Item item){
        ItemDto itemDto = new ItemDto();
        itemDto.setItemId(item.getItemId());
        itemDto.setItemName(item.getItemName());
        itemDto.setPrice(item.getPrice());
        itemDto.setItemType(item.getItemType());
        return itemDto;
    }
}
