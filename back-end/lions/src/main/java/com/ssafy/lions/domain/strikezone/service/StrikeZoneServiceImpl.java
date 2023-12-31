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
        int i = 0;
        int j;

        if (jsonObject.size() > 0) {
            try {
                jsonObject = (JSONObject)jsonObject.get("textRelayData");
                JSONArray textRelays = (JSONArray)jsonObject.get("textRelays");
                jsonObject = (JSONObject)textRelays.get(i);
                JSONArray jsonArray = (JSONArray)jsonObject.get("textOptions");
                JSONObject textOptions = (JSONObject)jsonArray.get(jsonArray.size() - 1);
                j = jsonArray.size() - 1;

                while ((Long)textOptions.get("type") != 1) {
                    j--;

                    if (j < 0) {
                        jsonObject = (JSONObject)textRelays.get(++i);
                        jsonArray = (JSONArray)jsonObject.get("textOptions");
                        j = jsonArray.size() - 1;
                    }

                    textOptions = (JSONObject)jsonArray.get(j);
                }

                jsonArray = (JSONArray)jsonObject.get("ptsOptions");
                JSONObject ptsOptions = (JSONObject)jsonArray.get(jsonArray.size() - 1);

                strikeZoneResultDto.setSpeed(textOptions.get("speed").toString());
                strikeZoneResultDto.setStuff(textOptions.get("stuff").toString());
                strikeZoneResultDto.setBallcount(ptsOptions.get("ballcount").toString());
                strikeZoneResultDto.setCrossPlateX(ptsOptions.get("crossPlateX").toString());
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
                e.printStackTrace();
                return null;
            }
        }

        return strikeZoneResultDto;
    }
}
