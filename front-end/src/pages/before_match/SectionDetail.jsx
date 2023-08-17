import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import arrow from './img/arrow.png'
import ImageMap from 'image-map';
import mapImg from './img/sectionMap.png'
import pin from './img/pin.png'
import swipeHand from '../before_match/img/pngegg.png'

import { BiArrowBack } from 'react-icons/bi'

import Wrapper from '../../components/AnimateWrapper';
import './styles/SectionDetail.css';
import { useSelector } from 'react-redux';


export default function SectionDetail() {
  const { state } = useLocation();
  const seatName = state.selectSeat;
  const sectionName = state.sectionSelect;
  const blockName = state.showSeatName;
  const [panoramaSrc, setPanoramaSrc] = useState()
  const navigate = useNavigate();

  let seatUrlAdd = "";
  const imageUrl = "https://laon.info/images/view/";
  const seatsSeat2 = seatName.substr(1);
  const seatsSeatList = seatsSeat2.split('_');

  if (seatsSeatList.length === 2) {
    seatUrlAdd = seatsSeatList[0] + "/" + seatsSeatList[1] + ".jpg";
  } else if (seatsSeatList.length === 3) {
    seatUrlAdd = seatsSeatList[0] + "-" + seatsSeatList[1] + "/" + seatsSeatList[2] + ".jpg";
  }

  const [seatUrl, setSeatUrl] = useState(imageUrl + seatUrlAdd);
  const [pinCoords, setPinCoords] = useState({ x: 0, y: 0 })


  function goBack() {
    navigate('/seat');
  }

  function selectSeat(event) {
    console.log(event.target.title)
    const title = event.target.title;
    const titleList = title.split('_');
    if (titleList.length === 2) {
      setSeatUrl(imageUrl + titleList[0] + "/" + titleList[1] + ".jpg");
    } else if (titleList.length === 3) {
      setSeatUrl(imageUrl + titleList[0] + "-" + titleList[1] + "/" + titleList[2] + ".jpg")
    }
    const x = event.clientX
    const y = event.clientY - 650
    setPinCoords({ x, y })
  }

  function getCoordinate(e) {
    console.log("x:", e.nativeEvent.offsetX, "y:", e.nativeEvent.offsetY)
    const x = e.nativeEvent.offsetX
    const y = e.nativeEvent.offsetY

    if (2 <= x && x <= 17 && 94 <= y && y <= 104) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY1/1.jpg"
        return seatUrl
      })
    }
    else if (2 <= x && x <= 17 && 106 <= y && y <= 115) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY1/2.jpg"
        return seatUrl
      })
    }
    else if (2 <= x && x <= 17 && 117 <= y && y <= 126) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY1/3.jpg"
        return seatUrl
      })
    }
    else if (2 <= x && x <= 17 && 127 <= y && y <= 137) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY1/4.jpg"
        return seatUrl
      })
    }
    else if (2 <= x && x <= 17 && 140 <= y && y <= 149) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY1/5.jpg"
        return seatUrl
      })
    }
    else if (2 <= x && x <= 17 && 152 <= y && y <= 162) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY1/6.jpg"
        return seatUrl
      })
    }
    else if (2 <= x && x <= 17 && 164 <= y && y <= 175) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY1/7.jpg"
        return seatUrl
      })
    }
    else if (4 <= x && x <= 21 && 177 <= y && y <= 180) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY2/1.jpg"
        return seatUrl
      })
    }
    else if (15 <= x && x <= 28 && 184 <= y && y <= 188) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY2/2.jpg"
        return seatUrl
      })
    }
    else if (25 <= x && x <= 30 && 189 <= y && y <= 200) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY2/3.jpg"
        return seatUrl
      })
    }
    else if (33 <= x && x <= 38 && 195 <= y && y <= 207) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY2/4.jpg"
        return seatUrl
      })
    }
    else if (39 <= x && x <= 44 && 202 <= y && y <= 213) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY2/5.jpg"
        return seatUrl
      })
    }
    else if (47 <= x && x <= 53 && 207 <= y && y <= 220) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY3/1.jpg"
        return seatUrl
      })
    }
    else if (55 <= x && x <= 60 && 215 <= y && y <= 228) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY3/2.jpg"
        return seatUrl
      })
    }
    else if (62 <= x && x <= 67 && 223 <= y && y <= 236) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY3/3.jpg"
        return seatUrl
      })
    }
    else if (68 <= x && x <= 74 && 228 <= y && y <= 243) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY3/4.jpg"
        return seatUrl
      })
    }
    else if (75 <= x && x <= 85 && 240 <= y && y <= 250) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY3/5.jpg"
        return seatUrl
      })
    }
    else if (86 <= x && x <= 94 && 240 <= y && y <= 252) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY4/1.jpg"
        return seatUrl
      })
    }
    else if (97 <= x && x <= 105 && 240 <= y && y <= 245) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY4/2.jpg"
        return seatUrl
      })
    }
    else if (108 <= x && x <= 115 && 240 <= y && y <= 245) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY4/3.jpg"
        return seatUrl
      })
    }
    else if (118 <= x && x <= 126 && 240 <= y && y <= 252) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY4/4.jpg"
        return seatUrl
      })
    }
    else if (130 <= x && x <= 140 && 240 <= y && y <= 252) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY4/5.jpg"
        return seatUrl
      })
    }
    else if (140 <= x && x <= 146 && 239 <= y && y <= 250) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY5/1.jpg"
        return seatUrl
      })
    }
    else if (150 <= x && x <= 155 && 230 <= y && y <= 240) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY5/2.jpg"
        return seatUrl
      })
    }
    else if (156 <= x && x <= 165 && 224 <= y && y <= 234) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY5/3.jpg"
        return seatUrl
      })
    }
    else if (162 <= x && x <= 175 && 217 <= y && y <= 226) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY5/4.jpg"
        return seatUrl
      })
    }
    else if (172 <= x && x <= 180 && 205 <= y && y <= 218) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY6/1.jpg"
        return seatUrl
      })
    }
    else if (180 <= x && x <= 186 && 198 <= y && y <= 211) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY6/2.jpg"
        return seatUrl
      })
    }
    else if (188 <= x && x <= 196 && 191 <= y && y <= 203) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY6/3.jpg"
        return seatUrl
      })
    }
    else if (197 <= x && x <= 204 && 183 <= y && y <= 196) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY6/4.jpg"
        return seatUrl
      })
    }
    else if (205 <= x && x <= 213 && 175 <= y && y <= 187) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY6/5.jpg"
        return seatUrl
      })
    }

    else if (98 <= x && x <= 105 && 248 <= y && y <= 252) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "yogibo/1.jpg"
        return seatUrl
      })
    }
    else if (108 <= x && x <= 115 && 248 <= y && y <= 252) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "yogibo/2.jpg"
        return seatUrl
      })
    }

    // sky하단
    else if (19 <= x && x <= 21 && 95 <= y && y <= 104) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-31/1.jpg"
        return seatUrl
      })
    }
    else if (19 <= x && x <= 21 && 107 <= y && y <= 114) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-30/1.jpg"
        return seatUrl
      })
    }
    else if (19 <= x && x <= 21 && 118 <= y && y <= 124) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-29/1.jpg"
        return seatUrl
      })
    }
    else if (19 <= x && x <= 21 && 130 <= y && y <= 136) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-28/1.jpg"
        return seatUrl
      })
    }
    else if (19 <= x && x <= 21 && 141 <= y && y <= 147) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-27/1.jpg"
        return seatUrl
      })
    }
    else if (19 <= x && x <= 21 && 153 <= y && y <= 160) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-26/1.jpg"
        return seatUrl
      })
    }
    else if (19 <= x && x <= 21 && 164 <= y && y <= 169) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-25/1.jpg"
        return seatUrl
      })
    }
    else if (20 <= x && x <= 23 && 171 <= y && y <= 174) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-24/1.jpg"
        return seatUrl
      })
    }
    else if (28 <= x && x <= 30 && 177 <= y && y <= 182) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-23/1.jpg"
        return seatUrl
      })
    }
    else if (35 <= x && x <= 37 && 183 <= y && y <= 188) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-22/1.jpg"
        return seatUrl
      })
    }
    else if (42 <= x && x <= 44 && 190 <= y && y <= 196) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-21/1.jpg"
        return seatUrl
      })
    }
    else if (49 <= x && x <= 52 && 197 <= y && y <= 203) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-20/1.jpg"
        return seatUrl
      })
    }
    else if (56 <= x && x <= 59 && 204 <= y && y <= 210) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-19/1.jpg"
        return seatUrl
      })
    }
    else if (64 <= x && x <= 66 && 211 <= y && y <= 215) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-18/1.jpg"
        return seatUrl
      })
    }
    else if (70 <= x && x <= 74 && 217 <= y && y <= 224) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-17/1.jpg"
        return seatUrl
      })
    }
    else if (78 <= x && x <= 81 && 225 <= y && y <= 231) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-16/1.jpg"
        return seatUrl
      })
    }
    else if (84 <= x && x <= 86 && 232 <= y && y <= 235) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-15/1.jpg"
        return seatUrl
      })
    }
    else if (90 <= x && x <= 93 && 236 <= y && y <= 238) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-14/1.jpg"
        return seatUrl
      })
    }
    else if (97 <= x && x <= 104 && 236 <= y && y <= 238) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-13/1.jpg"
        return seatUrl
      })
    }
    else if (108 <= x && x <= 115 && 236 <= y && y <= 238) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-12/1.jpg"
        return seatUrl
      })
    }
    else if (119 <= x && x <= 125 && 236 <= y && y <= 238) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-11/1.jpg"
        return seatUrl
      })
    }
    else if (129 <= x && x <= 133 && 236 <= y && y <= 238) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-10/1.jpg"
        return seatUrl
      })
    }
    else if (136 <= x && x <= 140 && 232 <= y && y <= 234) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-9/1.jpg"
        return seatUrl
      })
    }
    else if (143 <= x && x <= 146 && 223 <= y && y <= 229) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-8/1.jpg"
        return seatUrl
      })
    }
    else if (150 <= x && x <= 155 && 217 <= y && y <= 221) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-7/1.jpg"
        return seatUrl
      })
    }
    else if (159 <= x && x <= 162 && 209 <= y && y <= 214) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-6/1.jpg"
        return seatUrl
      })
    }
    else if (166 <= x && x <= 171 && 201 <= y && y <= 206) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-5/1.jpg"
        return seatUrl
      })
    }
    else if (175 <= x && x <= 180 && 194 <= y && y <= 199) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-4/1.jpg"
        return seatUrl
      })
    }
    else if (182 <= x && x <= 187 && 187 <= y && y <= 192) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-3/1.jpg"
        return seatUrl
      })
    }
    else if (190 <= x && x <= 195 && 179 <= y && y <= 185) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-2/1.jpg"
        return seatUrl
      })
    }
    else if (198 <= x && x <= 203 && 171 <= y && y <= 176) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-1/1.jpg"
        return seatUrl
      })
    }

    // 3층 어웨이
    else if (214 <= x && x <= 222 && 90 <= y && y <= 115) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "GRASS/3.jpg"
        return seatUrl
      })
    }
    else if (214 <= x && x <= 222 && 119 <= y && y <= 142) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "GRASS/2.jpg"
        return seatUrl
      })
    }
    else if (214 <= x && x <= 222 && 148 <= y && y <= 173) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "GRASS/1.jpg"
        return seatUrl
      })
    }
    else if (192 <= x && x <= 195 && 103 <= y && y <= 106) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-12/1.jpg"
        return seatUrl
      })
    }
    else if (187 <= x && x <= 195 && 110 <= y && y <= 115) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-11/1.jpg"
        return seatUrl
      })
    }
    else if (181 <= x && x <= 184 && 119 <= y && y <= 123) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-10/1.jpg"
        return seatUrl
      })
    }
    else if (187 <= x && x <= 196 && 119 <= y && y <= 123) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-10/2.jpg"
        return seatUrl
      })
    }
    else if (166 <= x && x <= 171 && 128 <= y && y <= 132) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-9/1.jpg"
        return seatUrl
      })
    }
    // 여기부터 찍어야 함
    else if (176 <= x && x <= 184 && 126 <= y && y <= 133) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-9/2.jpg"
        return seatUrl
      })
    }
    else if (187 <= x && x <= 196 && 126 <= y && y <= 133) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-9/3.jpg"
        return seatUrl
      })
    }
    else if (166 <= x && x <= 171 && 135 <= y && y <= 142) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-8/1.jpg"
        return seatUrl
      })
    }
    else if (176 <= x && x <= 184 && 135 <= y && y <= 142) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-8/2.jpg"
        return seatUrl
      })
    }
    else if (187 <= x && x <= 196 && 135 <= y && y <= 142) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-8/3.jpg"
        return seatUrl
      })
    }
    else if (166 <= x && x <= 171 && 143 <= y && y <= 150) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-7/1.jpg"
        return seatUrl
      })
    }
    else if (176 <= x && x <= 184 && 143 <= y && y <= 150) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-7/2.jpg"
        return seatUrl
      })
    }
    else if (187 <= x && x <= 196 && 143 <= y && y <= 150) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-7/3.jpg"
        return seatUrl
      })
    }
    else if (166 <= x && x <= 171 && 152 <= y && y <= 157) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-6/1.jpg"
        return seatUrl
      })
    }
    else if (176 <= x && x <= 184 && 152 <= y && y <= 162) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-6/2.jpg"
        return seatUrl
      })
    }
    else if (187 <= x && x <= 196 && 152 <= y && y <= 166) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-6/3.jpg"
        return seatUrl
      })
    }
    else if (151 <= x && x <= 163 && 131 <= y && y <= 142) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1E-3/1.jpg"
        return seatUrl
      })
    }
    else if (151 <= x && x <= 163 && 144 <= y && y <= 150) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1E-2/1.jpg"
        return seatUrl
      })
    }
    else if (151 <= x && x <= 163 && 151 <= y && y <= 165) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1E-1/1.jpg"
        return seatUrl
      })
    }
    else if (164 <= x && x <= 172 && 156 <= y && y <= 161) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-5/1.jpg"
        return seatUrl
      })
    }
    else if (172 <= x && x <= 184 && 161 <= y && y <= 169) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-5/2.jpg"
        return seatUrl
      })
    }
    else if (179 <= x && x <= 193 && 166 <= y && y <= 175) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-5/3.jpg"
        return seatUrl
      })
    }
    else if (184 <= x && x <= 194 && 168 <= y && y <= 178) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-5/4.jpg"
        return seatUrl
      })
    }
    else if (159 <= x && x <= 169 && 156 <= y && y <= 166) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-4/1.jpg"
        return seatUrl
      })
    }
    else if (167 <= x && x <= 176 && 164 <= y && y <= 175) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-4/2.jpg"
        return seatUrl
      })
    }
    else if (173 <= x && x <= 181 && 173 <= y && y <= 181) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-4/3.jpg"
        return seatUrl
      })
    }
    else if (178 <= x && x <= 183 && 178 <= y && y <= 183) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-4/4.jpg"
        return seatUrl
      })
    }
    else if (153 <= x && x <= 163 && 162 <= y && y <= 172) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-3/1.jpg"
        return seatUrl
      })
    }
    else if (161 <= x && x <= 170 && 170 <= y && y <= 180) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-3/2.jpg"
        return seatUrl
      })
    }
    else if (168 <= x && x <= 176 && 178 <= y && y <= 186) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-3/3.jpg"
        return seatUrl
      })
    }
    else if (173 <= x && x <= 177 && 184 <= y && y <= 188) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-3/4.jpg"
        return seatUrl
      })
    }
    else if (147 <= x && x <= 157 && 167 <= y && y <= 177) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-2/1.jpg"
        return seatUrl
      })
    }
    else if (155 <= x && x <= 164 && 175 <= y && y <= 185) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-2/2.jpg"
        return seatUrl
      })
    }
    else if (162 <= x && x <= 170 && 183 <= y && y <= 191) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-2/3.jpg"
        return seatUrl
      })
    }
    else if (167 <= x && x <= 172 && 188 <= y && y <= 193) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-2/4.jpg"
        return seatUrl
      })
    }
    else if (143 <= x && x <= 151 && 174 <= y && y <= 178) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-1/1.jpg"
        return seatUrl
      })
    }
    else if (152 <= x && x <= 159 && 180 <= y && y <= 188) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-1/2.jpg"
        return seatUrl
      })
    }
    else if (158 <= x && x <= 164 && 188 <= y && y <= 194) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-1/3.jpg"
        return seatUrl
      })
    }
    else if (163 <= x && x <= 166 && 193 <= y && y <= 196) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-1/4.jpg"
        return seatUrl
      })
    }
    else if (141 <= x && x <= 148 && 175 <= y && y <= 183) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-4/1.jpg"
        return seatUrl
      })
    }
    else if (147 <= x && x <= 156 && 183 <= y && y <= 191) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-4/2.jpg"
        return seatUrl
      })
    }
    else if (155 <= x && x <= 161 && 191 <= y && y <= 198) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-4/3.jpg"
        return seatUrl
      })
    }
    else if (160 <= x && x <= 163 && 197 <= y && y <= 199) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-4/4.jpg"
        return seatUrl
      })
    }
    else if (134 <= x && x <= 145 && 178 <= y && y <= 189) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-3/1.jpg"
        return seatUrl
      })
    }
    else if (141 <= x && x <= 152 && 187 <= y && y <= 197) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-3/2.jpg"
        return seatUrl
      })
    }
    else if (148 <= x && x <= 158 && 195 <= y && y <= 204) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-3/3.jpg"
        return seatUrl
      })
    }
    else if (154 <= x && x <= 159 && 200 <= y && y <= 205) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-3/4.jpg"
        return seatUrl
      })
    }
    else if (129 <= x && x <= 139 && 184 <= y && y <= 194) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-2/1.jpg"
        return seatUrl
      })
    }
    else if (136 <= x && x <= 146 && 191 <= y && y <= 202) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-2/2.jpg"
        return seatUrl
      })
    }
    else if (143 <= x && x <= 152 && 200 <= y && y <= 209) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-2/3.jpg"
        return seatUrl
      })
    }
    else if (148 <= x && x <= 153 && 205 <= y && y <= 210) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-2/4.jpg"
        return seatUrl
      })
    }
    else if (124 <= x && x <= 132 && 189 <= y && y <= 200) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-1/1.jpg"
        return seatUrl
      })
    }
    else if (129 <= x && x <= 141 && 197 <= y && y <= 210) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-1/2.jpg"
        return seatUrl
      })
    }
    else if (133 <= x && x <= 147 && 205 <= y && y <= 221) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-1/3.jpg"
        return seatUrl
      })
    }
    // 중앙
    else if (118 <= x && x <= 120 && 186 <= y && y <= 191) {
      setSeatUrl(seatUrl => { 
        seatUrl = imageUrl + "VIP1/1.jpg"
        return seatUrl
      })
    }
    else if (105 <= x && x <= 107 && 186 <= y && y <= 191) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "VIP3/1.jpg"
        return seatUrl
      })
    }
    else if (118 <= x && x <= 124 && 193 <= y && y <= 202) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TC-1/1.jpg"
        return seatUrl
      })
    }
    else if (109 <= x && x <= 118 && 193 <= y && y <= 202) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TC-2/1.jpg"
        return seatUrl
      })
    }
    else if (101 <= x && x <= 107 && 193 <= y && y <= 202) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TC-3/1.jpg"
        return seatUrl
      })
    }
    else if (118 <= x && x <= 128 && 204 <= y && y <= 213) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TC-1/2.jpg"
        return seatUrl
      })
    }
    else if (109 <= x && x <= 118 && 204 <= y && y <= 213) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TC-2/2.jpg"
        return seatUrl
      })
    }
    else if (97 <= x && x <= 107 && 204 <= y && y <= 213) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TC-3/2.jpg"
        return seatUrl
      })
    }
    else if (118 <= x && x <= 132 && 216 <= y && y <= 224) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TC-1/3.jpg"
        return seatUrl
      })
    }
    else if (109 <= x && x <= 118 && 216 <= y && y <= 224) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TC-2/3.jpg"
        return seatUrl
      })
    }
    else if (93 <= x && x <= 107 && 216 <= y && y <= 224) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TC-3/3.jpg"
        return seatUrl
      })
    }

    // 외야 1루
    else if (168 <= x && x <= 179 && 35 <= y && y <= 46) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "F-2/1.jpg"
        return seatUrl
      })
    }
    else if (194 <= x && x <= 205 && 62 <= y && y <= 73) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "F-1/1.jpg"
        return seatUrl
      })
    }
    else if (176 <= x && x <= 187 && 100 <= y && y <= 109) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TR-0/1.jpg"
        return seatUrl
      })
    }
    else if (185 <= x && x <= 195 && 93 <= y && y <= 102) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TR-0/2.jpg"
        return seatUrl
      })
    }
    else if (189 <= x && x <= 196 && 80 <= y && y <= 87) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TR-1/1.jpg"
        return seatUrl
      })
    }
    else if (183 <= x && x <= 191 && 74 <= y && y <= 82) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TR-2/1.jpg"
        return seatUrl
      })
    }
    else if (177 <= x && x <= 185 && 68 <= y && y <= 76) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TR-3/1.jpg"
        return seatUrl
      })
    }
    else if (171 <= x && x <= 179 && 62 <= y && y <= 70) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TR-4/1.jpg"
        return seatUrl
      })
    }
    else if (166 <= x && x <= 174 && 57 <= y && y <= 64) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TR-5/1.jpg"
        return seatUrl
      })
    }
    else if (160 <= x && x <= 168 && 51 <= y && y <= 59) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TR-6/1.jpg"
        return seatUrl
      })
    }
    else if (155 <= x && x <= 162 && 46 <= y && y <= 53) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TR-7/1.jpg"
        return seatUrl
      })
    }
    else if (131 <= x && x <= 151 && 29 <= y && y <= 41) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TR-9/1.jpg"
        return seatUrl
      })
    }
    else if (122 <= x && x <= 129 && 29 <= y && y <= 34) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TR-10/1.jpg"
        return seatUrl
      })
    }
    else if (174 <= x && x <= 187 && 87 <= y && y <= 101) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "RF-1/1.jpg"
        return seatUrl
      })
    }
    else if (169 <= x && x <= 182 && 82 <= y && y <= 95) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "RF-2/1.jpg"
        return seatUrl
      })
    }
    else if (163 <= x && x <= 177 && 77 <= y && y <= 90) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "RF-3/1.jpg"
        return seatUrl
      })
    }
    else if (157 <= x && x <= 171 && 71 <= y && y <= 84) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "RF-4/1.jpg"
        return seatUrl
      })
    }
    else if (152 <= x && x <= 165 && 65 <= y && y <= 78) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "RF-5/1.jpg"
        return seatUrl
      })
    }
    else if (147 <= x && x <= 159 && 60 <= y && y <= 73) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "RF-6/1.jpg"
        return seatUrl
      })
    }
    else if (141 <= x && x <= 154 && 54 <= y && y <= 67) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "RF-7/1.jpg"
        return seatUrl
      })
    }
    else if (135 <= x && x <= 149 && 49 <= y && y <= 62) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "RF-8/1.jpg"
        return seatUrl
      })
    }
    else if (131 <= x && x <= 143 && 43 <= y && y <= 56) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "RF-9/1.jpg"
        return seatUrl
      })
    }
    else if (122 <= x && x <= 129 && 42 <= y && y <= 56) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "RF-10/1.jpg"
        return seatUrl
      })
    }
    else if (170 <= x && x <= 177 && 98 <= y && y <= 104) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "MR-1/1.jpg"
        return seatUrl
      })
    }
    else if (165 <= x && x <= 171 && 93 <= y && y <= 99) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "MR-2/1.jpg"
        return seatUrl
      })
    }
    else if (159 <= x && x <= 165 && 87 <= y && y <= 93) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "MR-3/1.jpg"
        return seatUrl
      })
    }
    else if (153 <= x && x <= 160 && 81 <= y && y <= 88) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "MR-4/1.jpg"
        return seatUrl
      })
    }
    else if (148 <= x && x <= 154 && 76 <= y && y <= 82) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "MR-5/1.jpg"
        return seatUrl
      })
    }
    else if (143 <= x && x <= 149 && 70 <= y && y <= 76) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "MR-6/1.jpg"
        return seatUrl
      })
    }
    else if (137 <= x && x <= 144 && 64 <= y && y <= 70) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "MR-7/1.jpg"
        return seatUrl
      })
    }
    else if (131 <= x && x <= 137 && 56 <= y && y <= 65) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "MR-8/1.jpg"
        return seatUrl
      })
    }
    else if (123 <= x && x <= 130 && 56 <= y && y <= 60) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "MR-10/1.jpg"
        return seatUrl
      })
    }


    //3루 내야 지정석
    else if (31 <= x && x <= 37 && 101 <= y && y <= 107) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-12/1.jpg"
        return seatUrl
      })
    }
    else if (28 <= x && x <= 29 && 101 <= y && y <= 107) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-12/2.jpg"
        return seatUrl
      })
    }
    else if (31 <= x && x <= 37 && 108<= y && y <= 115) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-11/1.jpg"
        return seatUrl
      })
    }
    else if (28 <= x && x <= 29 && 108 <= y && y <= 115) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-11/2.jpg"
        return seatUrl
      })
    }
    else if (40 <= x && x <= 44 && 117 <= y && y <= 124) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-10/1.jpg"
        return seatUrl
      })
    }
    else if (31 <= x && x <= 37 && 117 <= y && y <= 124) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-10/2.jpg"
        return seatUrl
      })
    }
    else if (28 <= x && x <= 29 && 117 <= y && y <= 124) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-10/3.jpg"
        return seatUrl
      })
    }
    else if (51 <= x && x <= 60 && 125 <= y && y <= 132) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-9/1.jpg"
        return seatUrl
      })
    }
    else if (40 <= x && x <= 49 && 125 <= y && y <= 132) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-9/2.jpg"
        return seatUrl
      })
    }
    else if (31 <= x && x <= 37 && 125 <= y && y <= 132) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-9/3.jpg"
        return seatUrl
      })
    }
    else if (28 <= x && x <= 29 && 125 <= y && y <= 132) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-9/4.jpg"
        return seatUrl
      })
    }
    else if (51 <= x && x <= 60 && 134 <= y && y <= 142) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-8/1.jpg"
        return seatUrl
      })
    }
    else if (40 <= x && x <= 49 && 134 <= y && y <= 142) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-8/2.jpg"
        return seatUrl
      })
    }
    else if (31 <= x && x <= 37 && 134 <= y && y <= 142) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-8/3.jpg"
        return seatUrl
      })
    }
    else if (28 <= x && x <= 29 && 134 <= y && y <= 142) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-8/4.jpg"
        return seatUrl
      })
    }

    // 3루 익사이팅석
    else if (62 <= x && x <= 74 && 130 <= y && y <= 141) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3E-3/1.jpg"
        return seatUrl
      })
    }
    else if (62 <= x && x <= 74 && 143 <= y && y <= 150) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3E-2/1.jpg"
        return seatUrl
      })
    }
    else if (62 <= x && x <= 74 && 152 <= y && y <= 165) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3E-1/1.jpg"
        return seatUrl
      })
    }

    // 블루존
    else if (51 <= x && x <= 60 && 143 <= y && y <= 150) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-7/1.jpg"
        return seatUrl
      })
    }
    else if (40 <= x && x <= 49 && 143 <= y && y <= 150) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-7/2.jpg"
        return seatUrl
      })
    }
    else if (31 <= x && x <= 37 && 143 <= y && y <= 150) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-7/3.jpg"
        return seatUrl
      })
    }
    else if (28 <= x && x <= 29 && 143 <= y && y <= 150) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-7/4.jpg"
        return seatUrl
      })
    }
    else if (51 <= x && x <= 60 && 151 <= y && y <= 158) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-6/1.jpg"
        return seatUrl
      })
    }
    else if (40 <= x && x <= 49 && 151 <= y && y <= 163) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-6/2.jpg"
        return seatUrl
      })
    }
    else if (31 <= x && x <= 37 && 151 <= y && y <= 166) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-6/3.jpg"
        return seatUrl
      })
    }
    else if (28 <= x && x <= 29 && 151 <= y && y <= 167) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-6/4.jpg"
        return seatUrl
      })
    }
    else if (52 <= x && x <= 60 && 155 <= y && y <= 161) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-5/1.jpg"
        return seatUrl
      })
    }
    else if (40 <= x && x <= 52 && 161 <= y && y <= 170) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-5/2.jpg"
        return seatUrl
      })
    }
    else if (31 <= x && x <= 44 && 165 <= y && y <= 176) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-5/3.jpg"
        return seatUrl
      })
    }
    else if (29 <= x && x <= 39 && 169 <= y && y <= 178) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-5/4.jpg"
        return seatUrl
      })
    }
    else if (54 <= x && x <= 66 && 156 <= y && y <= 166) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-4/1.jpg"
        return seatUrl
      })
    }
    else if (47 <= x && x <= 58 && 164 <= y && y <= 175) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-4/2.jpg"
        return seatUrl
      })
    }
    else if (40 <= x && x <= 50 && 172 <= y && y <= 183) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-4/3.jpg"
        return seatUrl
      })
    }
    else if (60 <= x && x <= 71 && 161 <= y && y <= 172) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-3/1.jpg"
        return seatUrl
      })
    }
    else if (53 <= x && x <= 64 && 169 <= y && y <= 181) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-3/2.jpg"
        return seatUrl
      })
    }
    else if (45 <= x && x <= 56 && 177 <= y && y <= 188) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-3/3.jpg"
        return seatUrl
      })
    }
    else if (67 <= x && x <= 77 && 172 <= y && y <= 181) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-2/1.jpg"
        return seatUrl
      })
    }
    else if (65 <= x && x <= 73 && 180 <= y && y <= 188) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-2/2.jpg"
        return seatUrl
      })
    }
    else if (59 <= x && x <= 66 && 188 <= y && y <= 195) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-2/3.jpg"
        return seatUrl
      })
    }
    else if (52 <= x && x <= 57 && 189 <= y && y <= 193) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-2/4.jpg"
        return seatUrl
      })
    }
    else if (73 <= x && x <= 81 && 171 <= y && y <= 180) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-1/1.jpg"
        return seatUrl
      })
    }
    else if (65 <= x && x <= 73 && 180 <= y && y <= 189) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-1/2.jpg"
        return seatUrl
      })
    }
    else if (59 <= x && x <= 66 && 188 <= y && y <= 195) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-1/3.jpg"
        return seatUrl
      })
    }
    else if (58 <= x && x <= 61 && 194 <= y && y <= 197) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-1/4.jpg"
        return seatUrl
      })
    }

    // 지브로존
    else if (92 <= x && x <= 102 && 189 <= y && y <= 201) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-1/1.jpg"
        return seatUrl
      })
    }
    else if (85 <= x && x <= 97 && 198 <= y && y <= 212) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-1/2.jpg"
        return seatUrl
      })
    }
    else if (77 <= x && x <= 93 && 206 <= y && y <= 223) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-1/3.jpg"
        return seatUrl
      })
    }
    else if (86 <= x && x <= 97 && 184 <= y && y <= 195) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-2/1.jpg"
        return seatUrl
      })
    }
    else if (78 <= x && x <= 89 && 192 <= y && y <= 204) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-2/2.jpg"
        return seatUrl
      })
    }
    else if (73 <= x && x <= 82 && 200 <= y && y <= 210) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-2/3.jpg"
        return seatUrl
      })
    }
    else if (71 <= x && x <= 77 && 207 <= y && y <= 212) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-2/4.jpg"
        return seatUrl
      })
    }
    else if (80 <= x && x <= 91 && 179 <= y && y <= 190) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-3/1.jpg"
        return seatUrl
      })
    }
    else if (73 <= x && x <= 84 && 187 <= y && y <= 198) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-3/2.jpg"
        return seatUrl
      })
    }
    else if (67 <= x && x <= 76 && 196 <= y && y <= 204) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-3/3.jpg"
        return seatUrl
      })
    }
    else if (65 <= x && x <= 71 && 201 <= y && y <= 206) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-2/4.jpg"
        return seatUrl
      })
    }
    else if (76 <= x && x <= 85 && 175 <= y && y <= 184) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-4/1.jpg"
        return seatUrl
      })
    }
    else if (69 <= x && x <= 77 && 184 <= y && y <= 192) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-4/2.jpg"
        return seatUrl
      })
    }
    else if (61 <= x && x <= 70 && 192 <= y && y <= 201) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-4/3.jpg"
        return seatUrl
      })
    }

    // 3루 외야
    else if (38 <= x && x <= 50 && 100 <= y && y <= 112) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TL-0/1.jpg"
        return seatUrl
      })
    }
    else if (29 <= x && x <= 41 && 92 <= y && y <= 103) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TL-0/2.jpg"
        return seatUrl
      })
    }
    else if (48 <= x && x <= 55 && 97 <= y && y <= 104) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "ML-1/1.jpg"
        return seatUrl
      })
    }
    else if (37 <= x && x <= 51 && 87 <= y && y <= 100) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "LF-1/1.jpg"
        return seatUrl
      })
    }
    else if (54 <= x && x <= 61 && 92 <= y && y <= 99) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "ML-2/1.jpg"
        return seatUrl
      })
    }
    else if (43 <= x && x <= 57 && 82 <= y && y <= 95) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "LF-2/1.jpg"
        return seatUrl
      })
    }
    else if (59 <= x && x <= 66 && 86 <= y && y <= 93) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "ML-3/1.jpg"
        return seatUrl
      })
    }
    else if (49 <= x && x <= 62 && 76 <= y && y <= 89) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "LF-3/1.jpg"
        return seatUrl
      })
    }
    else if (65 <= x && x <= 72 && 82 <= y && y <= 88) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "ML-4/1.jpg"
        return seatUrl
      })
    }
    else if (54 <= x && x <= 68 && 71 <= y && y <= 83) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "LF-4/1.jpg"
        return seatUrl
      })
    }
    else if (71 <= x && x <= 78 && 75 <= y && y <= 82) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "ML-5/1.jpg"
        return seatUrl
      })
    }
    else if (60 <= x && x <= 73 && 65 <= y && y <= 78) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "LF-5/1.jpg"
        return seatUrl
      })
    }
    else if (76 <= x && x <= 83 && 70 <= y && y <= 76) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "ML-6/1.jpg"
        return seatUrl
      })
    }
    else if (65 <= x && x <= 79 && 59 <= y && y <= 72) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "LF-6/1.jpg"
        return seatUrl
      })
    }
    else if (82 <= x && x <= 88 && 64 <= y && y <= 71) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "ML-7/1.jpg"
        return seatUrl
      })
    }
    else if (71 <= x && x <= 85 && 53 <= y && y <= 67) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "LF-7/1.jpg"
        return seatUrl
      })
    }
    else if (88 <= x && x <= 95 && 56 <= y && y <= 65) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "ML-8/1.jpg"
        return seatUrl
      })
    }
    else if (76 <= x && x <= 90 && 48 <= y && y <= 61) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "LF-8/1.jpg"
        return seatUrl
      })
    }
    else if (82 <= x && x <= 95 && 43 <= y && y <= 56) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "LF-9/1.jpg"
        return seatUrl
      })
    }
    else if (96 <= x && x <= 103 && 55 <= y && y <= 60) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "ML-10/1.jpg"
        return seatUrl
      })
    }
    else if (96 <= x && x <= 103 && 42 <= y && y <= 52) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "LF-10/1.jpg"
        return seatUrl
      })
    }
    else if (96 <= x && x <= 103 && 30 <= y && y <= 34) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TL-9/1.jpg"
        return seatUrl
      })
    }
    else if (30 <= x && x <= 34 && 49 <= y && y <= 65) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "ROOFTOP/1.jpg"
        return seatUrl
      })
    }
    else if (41 <= x && x <= 57 && 38 <= y && y <= 53) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "ROOFTOP/2.jpg"
        return seatUrl
      })
    }
    else if (53 <= x && x <= 68 && 27 <= y && y <= 42) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "ROOFTOP/3.jpg"
        return seatUrl
      })
    }
  }

  useEffect(() => {
    ImageMap('img[useMap]')

    const swipeHand = document.querySelector('.swipe-notification-container')
    swipeHand.classList.add('hand-show')
    setTimeout(() => {
      swipeHand.classList.remove('hand-show')
    }, 2500)
  }, [])

  return (
    <Wrapper>
      <div className='section-detail-container'>
        <div className='section-detail-header' onClick={goBack}>
        <BiArrowBack className='section-detail-go-back-button' size={36} onClick={goBack}/>
        </div>

        <div>
          <div className='section-detail-img'>
            <div className='swipe-notification-container'>
              <img className='swipe-hand-img' src={swipeHand} alt="" />
              <span>화면을 드래그 해보세요</span>
            </div>
            <img className='seat-view-img' src={seatUrl} onClick={selectSeat}></img>
          </div>
        </div>

        <div className='transform-container'>
          <TransformWrapper
            initialScale={5}
            initialPositionX={0}
            initialPositionY={-700}
            className='map-controller'
          >
            <TransformComponent>
              <div onClick={getCoordinate}>
                <img src={mapImg} alt="" />
              </div>
            </TransformComponent>
          </TransformWrapper>
        </div>
      </div>
    </Wrapper>
  )
}
