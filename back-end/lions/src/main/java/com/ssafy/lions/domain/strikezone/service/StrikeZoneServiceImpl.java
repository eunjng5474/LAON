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
        ProcessBuilder builder = new ProcessBuilder("python3", "./secret/crawler.py", date, awayTeam, year, inning);
        builder.redirectErrorStream(true);
        Process process = builder.start();

        BufferedReader br = new BufferedReader(new InputStreamReader(process.getInputStream(),"utf-8"));
        StringBuilder sb = new StringBuilder();
        String line;

        while ((line = br.readLine()) != null) {
            sb.append(line);
        }

        JSONParser parser = new JSONParser();
        JSONObject jsonObject = (JSONObject)parser.parse(sb.toString());
        jsonObject = (JSONObject)jsonObject.get("result");

        StrikeZoneResultDto strikeZoneResultDto = new StrikeZoneResultDto();

        if (jsonObject.size() > 0) {
            jsonObject = (JSONObject)jsonObject.get("textRelayData");
            JSONArray jsonArray = (JSONArray)jsonObject.get("textRelays");
            jsonObject = (JSONObject)jsonArray.get(0);

            jsonArray = (JSONArray)jsonObject.get("textOptions");
            JSONObject textOptions = (JSONObject)jsonArray.get(jsonArray.size() - 1);

            jsonArray = (JSONArray)jsonObject.get("ptsOptions");
            JSONObject ptsOptions = (JSONObject)jsonArray.get(jsonArray.size() - 1);

            try {
                strikeZoneResultDto.setSpeed(textOptions.get("speed").toString());
                strikeZoneResultDto.setStuff(textOptions.get("stuff").toString());
                strikeZoneResultDto.setCrossPlateY(ptsOptions.get("crossPlateY").toString());
                strikeZoneResultDto.setVy0(ptsOptions.get("vy0").toString());
                strikeZoneResultDto.setVz0(ptsOptions.get("vz0").toString());
                strikeZoneResultDto.setVx0(ptsOptions.get("vx0").toString());
                strikeZoneResultDto.setAx(ptsOptions.get("ax").toString());
                strikeZoneResultDto.setAy(ptsOptions.get("ay").toString());
                strikeZoneResultDto.setAz(ptsOptions.get("az").toString());
                strikeZoneResultDto.setZ0(ptsOptions.get("z0").toString());
                strikeZoneResultDto.setY0(ptsOptions.get("y0").toString());
                strikeZoneResultDto.setX0(ptsOptions.get("x0").toString());
            } catch (Exception e) {
                return null;
            }
        }

        return strikeZoneResultDto;
    }
}
