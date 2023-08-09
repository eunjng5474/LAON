package com.ssafy.lions.domain.navigation.service;

import com.ssafy.lions.domain.facility.dto.FacilityCloseGateDto;
import com.ssafy.lions.domain.facility.repository.FacilityRepository;
import com.ssafy.lions.domain.navigation.dto.DestinationDto;
import com.ssafy.lions.domain.navigation.dto.PointDto;
import com.ssafy.lions.domain.navigation.dto.PointResultDto;
import com.ssafy.lions.domain.navigation.entity.GateToGateExitStair;
import com.ssafy.lions.domain.navigation.entity.StairToStair;
import com.ssafy.lions.domain.navigation.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class NaviServiceImpl implements NaviService{
    @Autowired
    BlockToGateRepository blockToGateRepository;
    @Autowired
    FacilityCloseGateRepository facilityCloseGateRepository;
    @Autowired
    GateToGateExitStairRepository gateToGateExitStairRepository;
    @Autowired
    StairToStairRepository stairToStairRepository;
    @Autowired
    GateRepository gateRepository;
    @Autowired
    StairRepository stairRepository;
    @Autowired
    EntranceRepository entranceRepository;
    @Autowired
    FacilityRepository facilityRepository;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    /*
        출발지 : 좌석
        도착지 : 편의시설
     */
    public PointResultDto blockToFacility(String blockId, int facilityId){
        System.out.println("------------- navigation service -----------------");
        System.out.println("------------- blockToFacility call -----------------");
        PointResultDto pointResultDto = new PointResultDto();
        // blockId와 가까운 gate_id 얻어오기(5층 게이트의 경우 가까운 통로가 2개일 수 있다)
        List<Integer> gateIdCloseWithBlockList = blockToGateRepository.findGateIdByBlockId(blockId);
        // facilityId와 가까운 gate_id 얻어오기
        int gateIdCloseWithFacility = facilityCloseGateRepository.findGateIdByFacilityId(facilityId);
        System.out.println("[현재 좌석과 가까운 기둥] = " + gateIdCloseWithBlockList + ", " + "[편의시설과 가까운 기둥] =" + gateIdCloseWithFacility);

        // 그래프 그리기
        makeGraph();

        PriorityQueue<PointResultDto> pq = new PriorityQueue<>( (p1, p2) -> {
            if(p1.getDiffBetweenStartFloorAndEndFloor() == p2.getDiffBetweenStartFloorAndEndFloor()){
                return p1.getPathCnt() - p2.getPathCnt();
            }else{
                return p1.getDiffBetweenStartFloorAndEndFloor() - p2.getDiffBetweenStartFloorAndEndFloor();
            }
        });

        for(Integer gateIdCloseWithBlock: gateIdCloseWithBlockList){
            // BFS를 통해 최적경로 찾기
            List<PointDto> result = bfs(gateIdCloseWithBlock, gateIdCloseWithFacility);

            // 최적경로 리스트를 PointResultDto에 담기
            if(result == null){
                pointResultDto.setResult(FAIL);
                pointResultDto.setPathCnt(0);
            }else{
                pointResultDto.setPointDtoList(result);
                pointResultDto.setPathCnt(result.size());
                pointResultDto.setResult(SUCCESS);
                pointResultDto.setDiffBetweenStartFloorAndEndFloor(Math.abs(gateIdCloseWithBlock/100 - gateIdCloseWithFacility/100));
            }

            pq.offer(pointResultDto);
        }

        return pq.poll();
    }

    @Override
    public PointResultDto blockToFacilityChooseOne(String blockId, String type) {
        System.out.println("------------- navigation service -----------------");
        System.out.println("------------- blockToFacilityChooseOne call -----------------");

        // 1. 그래프 그리기
        makeGraph();
        // 2. 우선순위 큐 생성(출발층과 도착층 차이가 같으면 거쳐간 지점 수 작은 것, 층이 다르면
        PriorityQueue<PointResultDto> pq = new PriorityQueue<>( (p1, p2) -> {
            if(p1.getDiffBetweenStartFloorAndEndFloor() == p2.getDiffBetweenStartFloorAndEndFloor()){
                return p1.getPathCnt() - p2.getPathCnt();
            }else{
                return p1.getDiffBetweenStartFloorAndEndFloor() - p2.getDiffBetweenStartFloorAndEndFloor();
            }
        });
        // 선택한 편의시설과 가까운 게이트 리스트를 얻어온다.
        List<FacilityCloseGateDto> facilityCloseGateDtoList = facilityRepository.findIdsByFacilityNameLike(type);
        System.out.println(facilityCloseGateDtoList);
        // 목적지 중 출발지와 같은 층에 있는 것만 남긴다.
        List<DestinationDto> realDestinationList = new ArrayList<>();
        // 출발지를 얻어온다.
        List<Integer> gateIdListCloseWithBlock = blockToGateRepository.findGateIdByBlockId(blockId);
        System.out.println(gateIdListCloseWithBlock);
        // 출발지의 층과 도착지의 층이 같은 경우만 찾는다.
        for(FacilityCloseGateDto facilityCloseGateDto : facilityCloseGateDtoList){
            if(facilityCloseGateDto.getCloseGateId() / 100 == gateIdListCloseWithBlock.get(0) / 100){
                DestinationDto destinationDto = new DestinationDto();
                destinationDto.setFacilityId(facilityCloseGateDto.getFacilityId());
                destinationDto.setCloseGateId(facilityCloseGateDto.getCloseGateId());
                destinationDto.setFacilityName(facilityCloseGateDto.getFacilityName());
            }
        }

        // 같은 층에 클릭한 목적지가 없다면 어쩔 수 없이 완전탐색
        if(realDestinationList.size() == 0){
            for(Integer gateIdCloseWithBlock : gateIdListCloseWithBlock){
                for(FacilityCloseGateDto facilityCloseGateDto : facilityCloseGateDtoList){
                    PointResultDto pointResultDto = new PointResultDto();
                    // BFS를 통해 최적경로 찾기
                    List<PointDto> result = bfs(gateIdCloseWithBlock, facilityCloseGateDto.getCloseGateId());
                    // 최적경로 리스트를 PointResultDto에 담기
                    if(result == null){
                        pointResultDto.setResult(FAIL);
                    }else{
                        pointResultDto.setPointDtoList(result);
                        pointResultDto.setPathCnt(result.size());
                        pointResultDto.setResult(SUCCESS);
                        pointResultDto.setFacilityName(facilityCloseGateDto.getFacilityName());
                        pointResultDto.setDiffBetweenStartFloorAndEndFloor(Math.abs(gateIdCloseWithBlock/100 - facilityCloseGateDto.getCloseGateId()/100));
                    }
                    pq.offer(pointResultDto);
                }
            }
        }
        // 같은 층에 클릭한 목적지가 있다면 탐색 범위 압축
        else{
            for(Integer gateIdCloseWithBlock : gateIdListCloseWithBlock){
                for(DestinationDto destinationDto : realDestinationList){
                    PointResultDto pointResultDto = new PointResultDto();
                    // BFS를 통해 최적경로 찾기
                    List<PointDto> result = bfs(gateIdCloseWithBlock, destinationDto.getCloseGateId());
                    // 최적경로 리스트를 PointResultDto에 담기
                    if(result == null){
                        pointResultDto.setResult(FAIL);
                    }else{
                        pointResultDto.setPointDtoList(result);
                        pointResultDto.setPathCnt(result.size());
                        pointResultDto.setResult(SUCCESS);
                        pointResultDto.setFacilityName(destinationDto.getFacilityName());
                        pointResultDto.setDiffBetweenStartFloorAndEndFloor(Math.abs(gateIdCloseWithBlock/100 - destinationDto.getCloseGateId()/100));
                    }
                    pq.offer(pointResultDto);
                }
            }
        }

        System.out.println("전달된 name에 해당 하는 곳으로 가는 경로 리스트");
        System.out.println(pq);
        System.out.println("-------------------- 그 중에서 가장 빠른 루트 ------------------");
        PointResultDto finalPointResultDto = pq.poll();
        System.out.println(finalPointResultDto);
        System.out.println("-------------------- 결과 -------------------------");
        while(!pq.isEmpty()){
            System.out.println("-------------------- 결과 리스트 -------------------------");
            System.out.println(pq.poll());
        }

        return finalPointResultDto;
    }

    ArrayList<Integer>[] graph = new ArrayList[522];
    char[] type = new char[522];

    public class Point{
        int curPoint; // 현재 지점의 id
        List<PointDto> route;
        int pathCnt;
    }
    public List<PointDto> bfs(int start, int end){
        Queue<Point> q = new ArrayDeque<>();
        Point point = new Point();
        point.curPoint = start;
        point.route = new ArrayList<>();
        point.pathCnt = 1;
        if(type[start] == 'G'){
            String pointName = gateRepository.findGateNameByGateId(start);
            point.route.add(new PointDto(start, pointName ,type[start]));
        }else if(type[start] == 'S'){
            String pointName = stairRepository.findStairNameByStairId(start);
            point.route.add(new PointDto(start, pointName ,type[start]));
        }else if(type[start] == 'E'){
            String pointName = entranceRepository.findEntranceNameByEntranceId(start);
            point.route.add(new PointDto(start, pointName ,type[start]));
        }
        q.offer(point);
        boolean[] visit = new boolean[522];
        visit[start] = true;
        while(!q.isEmpty()){
            Point cur = q.poll();

            if(cur.curPoint == end){
                return cur.route;
            }

            for(Integer next : graph[cur.curPoint]){
                if(!visit[next]){
                    int destinationFloor = end / 100;
                    int currentFloor = cur.curPoint / 100;
                    // 현재층 == 도착층
                    if(destinationFloor == currentFloor){
                        // 도착층이랑 같은 층에 있는데 계단이면 무시한다.
                        if(type[next] == 'S') continue;
                    }
                    // 현재층 > 도착층
                    else if(currentFloor > destinationFloor){
                        // 도착층 보다 높은 곳으로 간다면 무시한다.
                        if(next / 100 > currentFloor) continue;
                    }
                    // 현재층 < 도착층
                    else if(currentFloor < destinationFloor){
                        if(next / 100 < currentFloor) continue;
                    }
                    visit[next] = true;
                    Point nextPoint = new Point();
                    nextPoint.pathCnt = cur.pathCnt + 1;
                    nextPoint.curPoint = next;
                    nextPoint.route = new ArrayList<>(cur.route);
                    if(type[next] == 'G'){
                        String pointName = gateRepository.findGateNameByGateId(next);
                        //System.out.println(pointName);
                        nextPoint.route.add(new PointDto(next, pointName ,type[next]));
                    }else if(type[next] == 'S'){
                        String pointName = stairRepository.findStairNameByStairId(next);
                        //System.out.println(pointName);
                        nextPoint.route.add(new PointDto(next, pointName ,type[next]));
                    }else if(type[next] == 'E'){
                        String pointName = entranceRepository.findEntranceNameByEntranceId(next);
                        //System.out.println(pointName);
                        nextPoint.route.add(new PointDto(next, pointName ,type[next]));
                    }
                    q.offer(nextPoint);
                }
            }
        }
        return null;
    }
    public void makeGraph(){
        List<GateToGateExitStair> gateToGateExitStairs = gateToGateExitStairRepository.findAll();
        List<StairToStair> stairToStairs = stairToStairRepository.findAll();

        for(int i=1; i<=521; i++){
            graph[i] = new ArrayList<>();
        }
        /*
            게이트(기둥) - 게이트(기둥)
            게이트(기둥) <-> 출구 (양방향)
            게이트(기둥) <-> 계단 (양방향)
         */
        for(GateToGateExitStair cur : gateToGateExitStairs){
            int gateId = cur.getGateId();
            type[gateId] = 'G';

            Integer connectedGateId = cur.getConnectedGateId();
            Integer connectedExitId = cur.getConnectedExitId();
            Integer connectedStairId = cur.getConnectedStairId();

            if(connectedGateId != null){
                type[connectedGateId] = 'G';
                graph[gateId].add(connectedGateId);
            }else if(connectedExitId != null){
                type[connectedExitId] = 'E';
                graph[gateId].add(connectedExitId);
                graph[connectedExitId].add(gateId);
            }else if(connectedStairId != null){
                type[connectedStairId] = 'S';
                graph[gateId].add(connectedStairId);
                graph[connectedStairId].add(gateId);
            }
        }
        /*
            계단 <-> 계단
         */
        for(StairToStair cur : stairToStairs){
            int stairId = cur.getStairId();
            int connectedStairId = cur.getConnectedStairId();
            type[stairId] = 'S';
            graph[stairId].add(connectedStairId);
        }
    }
}