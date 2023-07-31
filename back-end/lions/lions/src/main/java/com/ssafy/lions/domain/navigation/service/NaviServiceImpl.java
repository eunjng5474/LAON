package com.ssafy.lions.domain.navigation.service;

import com.ssafy.lions.domain.navigation.dto.PointDto;
import com.ssafy.lions.domain.navigation.dto.PointResultDto;
import com.ssafy.lions.domain.navigation.entity.GateToGateExitStair;
import com.ssafy.lions.domain.navigation.entity.StairToStair;
import com.ssafy.lions.domain.navigation.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;

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

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;
    ArrayList<Integer>[] graph = new ArrayList[522];
    char[] type = new char[522];
    /*
        출발지 : 좌석
        도착지 : 편의시설
     */
    public PointResultDto blockToFacility(String blockId, int facilityId){
        PointResultDto pointResultDto = new PointResultDto();
        System.out.println("------------- service -----------------");
        // blockId와 가까운 gate_id 얻어오기
        int gateIdCloseWithBlock = blockToGateRepository.findGateIdByBlockId(blockId);
        // facilityId와 가까운 gate_id 얻어오기
        int gateIdCloseWithFacility = facilityCloseGateRepository.findGateIdByFacilityId(facilityId);
        System.out.println(gateIdCloseWithBlock + " " + gateIdCloseWithFacility);

        // 그래프 그리기
        makeGraph();

        // BFS를 통해 최적경로 찾기
        List<PointDto> result = bfs(gateIdCloseWithBlock, gateIdCloseWithFacility);

        if(result == null){
            pointResultDto.setResult(FAIL);
        }else{
            pointResultDto.setPointDtoList(result);
            pointResultDto.setPathCnt(result.size());
            pointResultDto.setResult(SUCCESS);
        }
        // 최적경로 리스트를 PointResultDto에 담기
        System.out.println(pointResultDto.getPathCnt());
        return pointResultDto;
    }
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
                    // 도착층이랑 같은 층에 있는데 계단이면 무시한다.
                    if(type[next] == 'S' && (end / 100) == (cur.curPoint / 100)){
                        continue;
                    }
                    visit[next] = true;
                    Point nextPoint = new Point();
                    nextPoint.pathCnt = cur.pathCnt + 1;
                    nextPoint.curPoint = next;
                    nextPoint.route = new ArrayList<>(cur.route);
                    if(type[next] == 'G'){
                        String pointName = gateRepository.findGateNameByGateId(next);
                        System.out.println(pointName);
                        nextPoint.route.add(new PointDto(next, pointName ,type[next]));
                    }else if(type[next] == 'S'){
                        String pointName = stairRepository.findStairNameByStairId(next);
                        System.out.println(pointName);
                        nextPoint.route.add(new PointDto(next, pointName ,type[next]));
                    }else if(type[next] == 'E'){
                        String pointName = entranceRepository.findEntranceNameByEntranceId(next);
                        System.out.println(pointName);
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

        System.out.println(graph[344]);
    }
}