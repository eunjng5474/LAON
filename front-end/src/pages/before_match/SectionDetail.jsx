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
    else if (379 <= x && x <= 396 && 273 <= y && y <= 285) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-9/2.jpg"
        return seatUrl
      })
    }
    else if (404 <= x && x <= 421 && 273 <= y && y <= 285) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-9/3.jpg"
        return seatUrl
      })
    }
    else if (355 <= x && x <= 372 && 292 <= y && y <= 304) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-8/1.jpg"
        return seatUrl
      })
    }
    else if (379 <= x && x <= 396 && 292 <= y && y <= 304) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-8/2.jpg"
        return seatUrl
      })
    }
    else if (404 <= x && x <= 421 && 292 <= y && y <= 304) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-8/3.jpg"
        return seatUrl
      })
    }
    else if (355 <= x && x <= 372 && 310 <= y && y <= 322) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-7/1.jpg"
        return seatUrl
      })
    }
    else if (379 <= x && x <= 396 && 310 <= y && y <= 322) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-7/2.jpg"
        return seatUrl
      })
    }
    else if (404 <= x && x <= 421 && 310 <= y && y <= 322) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-7/3.jpg"
        return seatUrl
      })
    }
    else if (356 <= x && x <= 373 && 328 <= y && y <= 334) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-6/1.jpg"
        return seatUrl
      })
    }
    else if (379 <= x && x <= 396 && 328 <= y && y <= 337) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-6/2.jpg"
        return seatUrl
      })
    }
    else if (404 <= x && x <= 421 && 329 <= y && y <= 356) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-6/3.jpg"
        return seatUrl
      })
    }
    else if (324 <= x && x <= 350 && 290 <= y && y <= 303) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1E-3/1.jpg"
        return seatUrl
      })
    }
    else if (324 <= x && x <= 350 && 310 <= y && y <= 321) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1E-2/1.jpg"
        return seatUrl
      })
    }
    else if (324 <= x && x <= 350 && 328 <= y && y <= 340) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1E-1/1.jpg"
        return seatUrl
      })
    }
    else if (360 <= x && x <= 370 && 337 <= y && y <= 343) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-5/1.jpg"
        return seatUrl
      })
    }
    else if (376 <= x && x <= 394 && 347 <= y && y <= 355) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-5/2.jpg"
        return seatUrl
      })
    }
    else if (393 <= x && x <= 412 && 360 <= y && y <= 372) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-5/3.jpg"
        return seatUrl
      })
    }
    else if (398 <= x && x <= 418 && 367 <= y && y <= 377) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-5/4.jpg"
        return seatUrl
      })
    }
    else if (343 <= x && x <= 360 && 340 <= y && y <= 355) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-4/1.jpg"
        return seatUrl
      })
    }
    else if (363 <= x && x <= 375 && 360 <= y && y <= 371) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-4/2.jpg"
        return seatUrl
      })
    }
    else if (377 <= x && x <= 387 && 374 <= y && y <= 385) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-4/3.jpg"
        return seatUrl
      })
    }
    else if (387 <= x && x <= 394 && 385 <= y && y <= 391) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-4/4.jpg"
        return seatUrl
      })
    }
    else if (332 <= x && x <= 345 && 352 <= y && y <= 365) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-3/1.jpg"
        return seatUrl
      })
    }
    else if (347 <= x && x <= 362 && 370 <= y && y <= 383) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-3/2.jpg"
        return seatUrl
      })
    }
    else if (362 <= x && x <= 375 && 387 <= y && y <= 395) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-3/3.jpg"
        return seatUrl
      })
    }
    else if (375 <= x && x <= 382 && 396 <= y && y <= 402) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-3/4.jpg"
        return seatUrl
      })
    }
    else if (319 <= x && x <= 333 && 362 <= y && y <= 376) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-2/1.jpg"
        return seatUrl
      })
    }
    else if (336 <= x && x <= 349 && 381 <= y && y <= 393) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-2/2.jpg"
        return seatUrl
      })
    }
    else if (352 <= x && x <= 363 && 398 <= y && y <= 407) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-2/3.jpg"
        return seatUrl
      })
    }
    else if (360 <= x && x <= 370 && 407 <= y && y <= 413) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-2/4.jpg"
        return seatUrl
      })
    }
    else if (311 <= x && x <= 322 && 373 <= y && y <= 383) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-1/1.jpg"
        return seatUrl
      })
    }
    else if (327 <= x && x <= 340 && 389 <= y && y <= 400) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-1/2.jpg"
        return seatUrl
      })
    }
    else if (342 <= x && x <= 349 && 407 <= y && y <= 415) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-1/3.jpg"
        return seatUrl
      })
    }
    else if (353 <= x && x <= 357 && 418 <= y && y <= 421) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-1/4.jpg"
        return seatUrl
      })
    }
    else if (303 <= x && x <= 316 && 379 <= y && y <= 391) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-4/1.jpg"
        return seatUrl
      })
    }
    else if (317 <= x && x <= 327 && 396 <= y && y <= 408) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-4/2.jpg"
        return seatUrl
      })
    }
    else if (335 <= x && x <= 342 && 414 <= y && y <= 422) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-4/3.jpg"
        return seatUrl
      })
    }
    else if (345 <= x && x <= 349 && 425 <= y && y <= 430) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-4/4.jpg"
        return seatUrl
      })
    }
    else if (290 <= x && x <= 304 && 387 <= y && y <= 401) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-3/1.jpg"
        return seatUrl
      })
    }
    else if (308 <= x && x <= 320 && 406 <= y && y <= 419) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-3/2.jpg"
        return seatUrl
      })
    }
    else if (323 <= x && x <= 335 && 423 <= y && y <= 433) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-3/3.jpg"
        return seatUrl
      })
    }
    else if (333 <= x && x <= 340 && 432 <= y && y <= 439) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-3/4.jpg"
        return seatUrl
      })
    }
    else if (278 <= x && x <= 292 && 400 <= y && y <= 413) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-2/1.jpg"
        return seatUrl
      })
    }
    else if (297 <= x && x <= 311 && 417 <= y && y <= 430) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-2/2.jpg"
        return seatUrl
      })
    }
    else if (310 <= x && x <= 321 && 432 <= y && y <= 443) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-2/3.jpg"
        return seatUrl
      })
    }
    else if (321 <= x && x <= 329 && 443 <= y && y <= 450) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-2/4.jpg"
        return seatUrl
      })
    }
    else if (268 <= x && x <= 282 && 410 <= y && y <= 425) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-1/1.jpg"
        return seatUrl
      })
    }
    else if (280 <= x && x <= 296 && 430 <= y && y <= 444) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-1/2.jpg"
        return seatUrl
      })
    }
    else if (289 <= x && x <= 315 && 450 <= y && y <= 470) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T1-1/3.jpg"
        return seatUrl
      })
    }
    // 중앙
    else if (255 <= x && x <= 260 && 400 <= y && y <= 411) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "VIP1/1.jpg"
        return seatUrl
      })
    }
    else if (225 <= x && x <= 230 && 400 <= y && y <= 411) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "VIP3/1.jpg"
        return seatUrl
      })
    }
    else if (255 <= x && x <= 267 && 416 <= y && y <= 433) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TC-1/1.jpg"
        return seatUrl
      })
    }
    else if (235 <= x && x <= 252 && 416 <= y && y <= 433) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TC-2/1.jpg"
        return seatUrl
      })
    }
    else if (219 <= x && x <= 230 && 416 <= y && y <= 433) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TC-3/1.jpg"
        return seatUrl
      })
    }
    else if (255 <= x && x <= 276 && 439 <= y && y <= 457) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TC-1/2.jpg"
        return seatUrl
      })
    }
    else if (235 <= x && x <= 252 && 439 <= y && y <= 457) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TC-2/2.jpg"
        return seatUrl
      })
    }
    else if (211 <= x && x <= 230 && 439 <= y && y <= 457) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TC-3/2.jpg"
        return seatUrl
      })
    }
    else if (255 <= x && x <= 285 && 465 <= y && y <= 483) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TC-1/3.jpg"
        return seatUrl
      })
    }
    else if (235 <= x && x <= 252 && 465 <= y && y <= 483) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TC-2/3.jpg"
        return seatUrl
      })
    }
    else if (201 <= x && x <= 230 && 465 <= y && y <= 483) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TC-3/3.jpg"
        return seatUrl
      })
    }

    // 외야 1루
    else if (362 <= x && x <= 385 && 77 <= y && y <= 98) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "F-2/1.jpg"
        return seatUrl
      })
    }
    else if (416 <= x && x <= 441 && 133 <= y && y <= 157) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "F-1/1.jpg"
        return seatUrl
      })
    }
    else if (383 <= x && x <= 399 && 220 <= y && y <= 232) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TR-0/1.jpg"
        return seatUrl
      })
    }
    else if (401 <= x && x <= 415 && 202 <= y && y <= 214) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TR-0/2.jpg"
        return seatUrl
      })
    }
    else if (409 <= x && x <= 421 && 176 <= y && y <= 185) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TR-1/1.jpg"
        return seatUrl
      })
    }
    else if (395 <= x && x <= 405 && 162 <= y && y <= 172) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TR-2/1.jpg"
        return seatUrl
      })
    }
    else if (384 <= x && x <= 394 && 150 <= y && y <= 160) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TR-3/1.jpg"
        return seatUrl
      })
    }
    else if (372 <= x && x <= 383 && 138 <= y && y <= 148) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TR-4/1.jpg"
        return seatUrl
      })
    }
    else if (360 <= x && x <= 371 && 125 <= y && y <= 135) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TR-5/1.jpg"
        return seatUrl
      })
    }
    else if (349 <= x && x <= 359 && 113 <= y && y <= 123) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TR-6/1.jpg"
        return seatUrl
      })
    }
    else if (335 <= x && x <= 345 && 101 <= y && y <= 111) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TR-7/1.jpg"
        return seatUrl
      })
    }
    else if (285 <= x && x <= 330 && 62 <= y && y <= 88) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TR-9/1.jpg"
        return seatUrl
      })
    }
    else if (265 <= x && x <= 277 && 62 <= y && y <= 72) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TR-10/1.jpg"
        return seatUrl
      })
    }
    else if (385 <= x && x <= 399 && 193 <= y && y <= 212) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "RF-1/1.jpg"
        return seatUrl
      })
    }
    else if (377 <= x && x <= 385 && 180 <= y && y <= 199) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "RF-2/1.jpg"
        return seatUrl
      })
    }
    else if (360 <= x && x <= 372 && 170 <= y && y <= 187) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "RF-3/1.jpg"
        return seatUrl
      })
    }
    else if (350 <= x && x <= 360 && 158 <= y && y <= 175) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "RF-4/1.jpg"
        return seatUrl
      })
    }
    else if (340 <= x && x <= 350 && 146 <= y && y <= 163) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "RF-5/1.jpg"
        return seatUrl
      })
    }
    else if (328 <= x && x <= 338 && 134 <= y && y <= 152) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "RF-6/1.jpg"
        return seatUrl
      })
    }
    else if (316 <= x && x <= 326 && 121 <= y && y <= 138) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "RF-7/1.jpg"
        return seatUrl
      })
    }
    else if (304 <= x && x <= 314 && 108 <= y && y <= 126) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "RF-8/1.jpg"
        return seatUrl
      })
    }
    else if (283 <= x && x <= 303 && 94 <= y && y <= 115) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "RF-9/1.jpg"
        return seatUrl
      })
    }
    else if (264 <= x && x <= 278 && 92 <= y && y <= 115) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "RF-10/1.jpg"
        return seatUrl
      })
    }
    else if (267 <= x && x <= 377 && 214 <= y && y <= 224) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "MR-1/1.jpg"
        return seatUrl
      })
    }
    else if (356 <= x && x <= 365 && 202 <= y && y <= 212) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "MR-2/1.jpg"
        return seatUrl
      })
    }
    else if (345 <= x && x <= 353 && 190 <= y && y <= 200) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "MR-3/1.jpg"
        return seatUrl
      })
    }
    else if (333 <= x && x <= 342 && 179 <= y && y <= 189) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "MR-4/1.jpg"
        return seatUrl
      })
    }
    else if (320 <= x && x <= 328 && 166 <= y && y <= 176) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "MR-5/1.jpg"
        return seatUrl
      })
    }
    else if (307 <= x && x <= 318 && 153 <= y && y <= 165) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "MR-6/1.jpg"
        return seatUrl
      })
    }
    else if (297 <= x && x <= 304 && 142 <= y && y <= 152) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "MR-7/1.jpg"
        return seatUrl
      })
    }
    else if (283 <= x && x <= 293 && 126 <= y && y <= 143) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "MR-8/1.jpg"
        return seatUrl
      })
    }
    else if (265 <= x && x <= 280 && 118 <= y && y <= 130) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "MR-10/1.jpg"
        return seatUrl
      })
    }


    //3루 내야 지정석
    else if (67 <= x && x <= 78 && 218 <= y && y <= 229) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-12/1.jpg"
        return seatUrl
      })
    }
    else if (61 <= x && x <= 64 && 216 <= y && y <= 230) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-12/2.jpg"
        return seatUrl
      })
    }
    else if (68 <= x && x <= 82 && 233 <= y && y <= 248) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-11/1.jpg"
        return seatUrl
      })
    }
    else if (61 <= x && x <= 64 && 233 <= y && y <= 247) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-11/2.jpg"
        return seatUrl
      })
    }
    else if (85 <= x && x <= 95 && 252 <= y && y <= 267) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-10/1.jpg"
        return seatUrl
      })
    }
    else if (67 <= x && x <= 81 && 251 <= y && y <= 266) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-10/2.jpg"
        return seatUrl
      })
    }
    else if (61 <= x && x <= 64 && 251 <= y && y <= 266) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-10/3.jpg"
        return seatUrl
      })
    }
    else if (110 <= x && x <= 130 && 271 <= y && y <= 285) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-9/1.jpg"
        return seatUrl
      })
    }
    else if (86 <= x && x <= 106 && 270 <= y && y <= 286) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-9/2.jpg"
        return seatUrl
      })
    }
    else if (68 <= x && x <= 81 && 270 <= y && y <= 285) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-9/3.jpg"
        return seatUrl
      })
    }
    else if (61 <= x && x <= 64 && 270 <= y && y <= 285) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-9/4.jpg"
        return seatUrl
      })
    }
    else if (110 <= x && x <= 130 && 290 <= y && y <= 303) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-8/1.jpg"
        return seatUrl
      })
    }
    else if (85 <= x && x <= 105 && 289 <= y && y <= 303) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-8/2.jpg"
        return seatUrl
      })
    }
    else if (68 <= x && x <= 82 && 289 <= y && y <= 303) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-8/3.jpg"
        return seatUrl
      })
    }
    else if (61 <= x && x <= 64 && 289 <= y && y <= 303) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-8/4.jpg"
        return seatUrl
      })
    }

    // 3루 익사이팅석
    else if (135 <= x && x <= 160 && 281 <= y && y <= 303) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3E-3/1.jpg"
        return seatUrl
      })
    }
    else if (135 <= x && x <= 160 && 310 <= y && y <= 320) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3E-2/1.jpg"
        return seatUrl
      })
    }
    else if (135 <= x && x <= 160 && 327 <= y && y <= 335) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3E-1/1.jpg"
        return seatUrl
      })
    }

    // 블루존
    else if (110 <= x && x <= 130 && 310 <= y && y <= 322) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-7/1.jpg"
        return seatUrl
      })
    }
    else if (85 <= x && x <= 105 && 310 <= y && y <= 322) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-7/2.jpg"
        return seatUrl
      })
    }
    else if (66 <= x && x <= 80 && 310 <= y && y <= 322) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-7/3.jpg"
        return seatUrl
      })
    }
    else if (61 <= x && x <= 64 && 307 <= y && y <= 322) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-7/4.jpg"
        return seatUrl
      })
    }
    else if (110 <= x && x <= 130 && 330 <= y && y <= 325) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-6/1.jpg"
        return seatUrl
      })
    }
    else if (85 <= x && x <= 105 && 326 <= y && y <= 344) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-6/2.jpg"
        return seatUrl
      })
    }
    else if (67 <= x && x <= 80 && 327 <= y && y <= 353) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-6/3.jpg"
        return seatUrl
      })
    }
    else if (61 <= x && x <= 64 && 327 <= y && y <= 358) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-6/4.jpg"
        return seatUrl
      })
    }
    else if (111 <= x && x <= 120 && 340 <= y && y <= 345) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-5/1.jpg"
        return seatUrl
      })
    }
    else if (90 <= x && x <= 110 && 345 <= y && y <= 350) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-5/2.jpg"
        return seatUrl
      })
    }
    else if (80 <= x && x <= 95 && 355 <= y && y <= 380) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-5/3.jpg"
        return seatUrl
      })
    }
    else if (60 <= x && x <= 80 && 360 <= y && y <= 380) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-5/4.jpg"
        return seatUrl
      })
    }
    else if (117 <= x && x <= 141 && 336 <= y && y <= 358) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-4/1.jpg"
        return seatUrl
      })
    }
    else if (101 <= x && x <= 126 && 353 <= y && y <= 377) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-4/2.jpg"
        return seatUrl
      })
    }
    else if (85 <= x && x <= 109 && 370 <= y && y <= 394) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-4/3.jpg"
        return seatUrl
      })
    }
    else if (132 <= x && x <= 154 && 347 <= y && y <= 370) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-3/1.jpg"
        return seatUrl
      })
    }
    else if (114 <= x && x <= 138 && 374 <= y && y <= 388) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-3/2.jpg"
        return seatUrl
      })
    }
    else if (97 <= x && x <= 123 && 388 <= y && y <= 406) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-3/3.jpg"
        return seatUrl
      })
    }
    else if (143 <= x && x <= 167 && 357 <= y && y <= 381) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-2/1.jpg"
        return seatUrl
      })
    }
    else if (128 <= x && x <= 150 && 376 <= y && y <= 399) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-2/2.jpg"
        return seatUrl
      })
    }
    else if (114 <= x && x <= 134 && 394 <= y && y <= 413) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-2/3.jpg"
        return seatUrl
      })
    }
    else if (111 <= x && x <= 124 && 406 <= y && y <= 418) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-2/4.jpg"
        return seatUrl
      })
    }
    else if (157 <= x && x <= 175 && 369 <= y && y <= 389) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-1/1.jpg"
        return seatUrl
      })
    }
    else if (140 <= x && x <= 159 && 387 <= y && y <= 407) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-1/2.jpg"
        return seatUrl
      })
    }
    else if (128 <= x && x <= 143 && 405 <= y && y <= 420) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-1/3.jpg"
        return seatUrl
      })
    }
    else if (124 <= x && x <= 131 && 417 <= y && y <= 425) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "3-1/4.jpg"
        return seatUrl
      })
    }

    // 지브로존
    else if (200 <= x && x <= 219 && 408 <= y && y <= 431) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-1/1.jpg"
        return seatUrl
      })
    }
    else if (183 <= x && x <= 209 && 429 <= y && y <= 455) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-1/2.jpg"
        return seatUrl
      })
    }
    else if (169 <= x && x <= 199 && 448 <= y && y <= 479) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-1/3.jpg"
        return seatUrl
      })
    }
    else if (188 <= x && x <= 206 && 400 <= y && y <= 417) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-2/1.jpg"
        return seatUrl
      })
    }
    else if (172 <= x && x <= 190 && 418 <= y && y <= 435) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-2/2.jpg"
        return seatUrl
      })
    }
    else if (159 <= x && x <= 174 && 435 <= y && y <= 448) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-2/3.jpg"
        return seatUrl
      })
    }
    else if (152 <= x && x <= 165 && 444 <= y && y <= 455) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-2/4.jpg"
        return seatUrl
      })
    }
    else if (176 <= x && x <= 196 && 388 <= y && y <= 406) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-3/1.jpg"
        return seatUrl
      })
    }
    else if (159 <= x && x <= 176 && 406 <= y && y <= 422) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-3/2.jpg"
        return seatUrl
      })
    }
    else if (146 <= x && x <= 162 && 423 <= y && y <= 437) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-3/3.jpg"
        return seatUrl
      })
    }
    else if (139 <= x && x <= 152 && 433 <= y && y <= 444) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-2/4.jpg"
        return seatUrl
      })
    }
    else if (165 <= x && x <= 182 && 379 <= y && y <= 393) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-4/1.jpg"
        return seatUrl
      })
    }
    else if (149 <= x && x <= 164 && 397 <= y && y <= 410) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-4/2.jpg"
        return seatUrl
      })
    }
    else if (132 <= x && x <= 148 && 415 <= y && y <= 428) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "T3-4/3.jpg"
        return seatUrl
      })
    }

    // 3루 외야
    else if (83 <= x && x <= 106 && 217 <= y && y <= 239) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TL-0/1.jpg"
        return seatUrl
      })
    }
    else if (63 <= x && x <= 86 && 198 <= y && y <= 219) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TL-0/2.jpg"
        return seatUrl
      })
    }
    else if (106 <= x && x <= 118 && 212 <= y && y <= 224) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "ML-1/1.jpg"
        return seatUrl
      })
    }
    else if (82 <= x && x <= 108 && 189 <= y && y <= 214) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "LF-1/1.jpg"
        return seatUrl
      })
    }
    else if (115 <= x && x <= 129 && 199 <= y && y <= 211) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "ML-2/1.jpg"
        return seatUrl
      })
    }
    else if (93 <= x && x <= 120 && 177 <= y && y <= 202) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "LF-2/1.jpg"
        return seatUrl
      })
    }
    else if (129 <= x && x <= 142 && 188 <= y && y <= 199) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "ML-3/1.jpg"
        return seatUrl
      })
    }
    else if (106 <= x && x <= 134 && 166 <= y && y <= 190) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "LF-3/1.jpg"
        return seatUrl
      })
    }
    else if (141 <= x && x <= 155 && 176 <= y && y <= 187) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "ML-4/1.jpg"
        return seatUrl
      })
    }
    else if (117 <= x && x <= 144 && 153 <= y && y <= 178) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "LF-4/1.jpg"
        return seatUrl
      })
    }
    else if (154 <= x && x <= 166 && 165 <= y && y <= 174) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "ML-5/1.jpg"
        return seatUrl
      })
    }
    else if (154 <= x && x <= 166 && 164 <= y && y <= 175) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "LF-5/1.jpg"
        return seatUrl
      })
    }
    else if (167 <= x && x <= 178 && 152 <= y && y <= 162) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "ML-6/1.jpg"
        return seatUrl
      })
    }
    else if (141 <= x && x <= 129 && 152 <= y && y <= 154) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "LF-6/1.jpg"
        return seatUrl
      })
    }
    else if (177 <= x && x <= 188 && 140 <= y && y <= 151) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "ML-7/1.jpg"
        return seatUrl
      })
    }
    else if (153 <= x && x <= 181 && 117 <= y && y <= 142) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "LF-7/1.jpg"
        return seatUrl
      })
    }
    else if (188 <= x && x <= 204 && 123 <= y && y <= 140) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "ML-8/1.jpg"
        return seatUrl
      })
    }
    else if (165 <= x && x <= 194 && 103 <= y && y <= 131) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "LF-8/1.jpg"
        return seatUrl
      })
    }
    else if (175 <= x && x <= 203 && 91 <= y && y <= 120) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "LF-9/1.jpg"
        return seatUrl
      })
    }
    else if (205 <= x && x <= 221 && 119 <= y && y <= 129) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "ML-10/1.jpg"
        return seatUrl
      })
    }
    else if (205 <= x && x <= 221 && 91 <= y && y <= 112) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "LF-10/1.jpg"
        return seatUrl
      })
    }
    else if (206 <= x && x <= 221 && 63 <= y && y <= 74) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "TL-9/1.jpg"
        return seatUrl
      })
    }
    else if (64 <= x && x <= 99 && 107 <= y && y <= 140) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "ROOFTOP/1.jpg"
        return seatUrl
      })
    }
    else if (90 <= x && x <= 123 && 85 <= y && y <= 114) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "ROOFTOP/2.jpg"
        return seatUrl
      })
    }
    else if (112 <= x && x <= 146 && 60 <= y && y <= 89) {
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

