package com.ssafy.lions.domain.strikezone.service;

import com.ssafy.lions.domain.strikezone.dto.StrikeZoneResultDto;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;

@Service
public class StrikeZoneServiceImpl implements StrikeZoneService {

    @Override
    public StrikeZoneResultDto getStrikeZoneInfo(String date, String awayTeam, String inning) throws Exception {
        String year = date.substring(0, 4);
        ProcessBuilder builder = new ProcessBuilder("python", "test.py", date, awayTeam, year, inning);
        builder.redirectErrorStream(true);
        Process process = builder.start();

        BufferedReader br = new BufferedReader(new InputStreamReader(process.getInputStream(),"euc-kr"));
        StringBuilder sb = new StringBuilder();
        String line;

        while ((line = br.readLine()) != null) {
            sb.append(line);
        }

        System.out.println(sb);

//        JSONParser parser = new JSONParser();
//        JSONObject jsonObject = (JSONObject)parser.parse(sb.toString());
//        jsonObject = (JSONObject)jsonObject.get("result");
//
//        if (jsonObject.size() > 0) {
//            jsonObject = (JSONObject)jsonObject.get("textRelayData");
//            JSONArray jsonArray = (JSONArray)jsonObject.get("textRelays");
//            jsonObject = (JSONObject)jsonArray.get(0);
//
////            jsonArray = (JSONArray)jsonObject.get("ptsOptions");
////            JSONObject textOptions = (JSONObject)jsonArray.get(1);
//
//            jsonArray = (JSONArray)jsonObject.get("textOptions");
//            JSONObject ptsOptions = (JSONObject)jsonArray.get(jsonArray.size() - 2);
//
////            System.out.println(jsonObject.get("ptsPitchId") + " " + jsonObject.get("speed") + " " + jsonObject.get("stuff"));
////            System.out.println(textOptions);
////            System.out.println(strikeZoneResultDto);
//            return new StrikeZoneResultDto(ptsOptions.get("speed").toString(), ptsOptions.get("stuff").toString());
//        }

        return null;
    }
}
