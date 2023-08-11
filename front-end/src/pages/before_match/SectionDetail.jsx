import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import arrow from './img/arrow.png'
import ImageMap from 'image-map';
import mapImg from './img/sectionMap.png'
import pin from './img/pin.png'


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

  if (seatsSeatList.length == 2) {
    seatUrlAdd = seatsSeatList[0] + "/" + seatsSeatList[1] + ".jpg";
  } else if (seatsSeatList.length == 3) {
    seatUrlAdd = seatsSeatList[0] + "-" + seatsSeatList[1] + "/" + seatsSeatList[2] + ".jpg";
  }

  const [seatUrl, setSeatUrl] = useState(imageUrl + seatUrlAdd);
  const [pinCoords, setPinCoords] = useState({x:0, y:0})

  // console.log(seatUrl);

  function toSeat() {
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
    // console.log(seatUrl)
    const x = event.clientX
    const y = event.clientY - 650
    setPinCoords({x, y})
  }

  function getCoordinate(e) {
    console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
    // console.log(e.nativeEvent.offsetY)
    const x = e.nativeEvent.offsetX
    const y = e.nativeEvent.offsetY

    if (7 <= x && x <= 37 && 201 <= y && y <= 223) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY1/1.jpg"
        return seatUrl
      })
    }
    else if (7 <= x && x <= 37 && 227 <= y && y <= 247) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY1/2.jpg"
        return seatUrl
      })
    }
    else if (7 <= x && x <= 37 && 251 <= y && y <= 271) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY1/3.jpg"
        return seatUrl
      })
    }
    else if (7 <= x && x <= 37 && 276 <= y && y <= 296) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY1/4.jpg"
        return seatUrl
      })
    }
    else if (7 <= x && x <= 37 && 301 <= y && y <= 321) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY1/5.jpg"
        return seatUrl
      })
    }
    else if (7 <= x && x <= 37 && 326 <= y && y <= 346) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY1/6.jpg"
        return seatUrl
      })
    }
    else if (7 <= x && x <= 37 && 353 <= y && y <= 371) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY1/7.jpg"
        return seatUrl
      })
    }
    else if (20 <= x && x <= 40 && 381 <= y && y <= 390) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY2/1.jpg"
        return seatUrl
      })
    }
    else if (40 <= x && x <= 54 && 395 <= y && y <= 405) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY2/2.jpg"
        return seatUrl
      })
    }
    else if (55 <= x && x <= 69 && 410 <= y && y <= 423) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY2/3.jpg"
        return seatUrl
      })
    }
    else if (71 <= x && x <= 85 && 423 <= y && y <= 437) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY2/4.jpg"
        return seatUrl
      })
    }
    else if (86 <= x && x <= 100 && 439 <= y && y <= 452) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY2/5.jpg"
        return seatUrl
      })
    }
    else if (103 <= x && x <= 117 && 453 <= y && y <= 466) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY3/1.jpg"
        return seatUrl
      })
    }
    else if (118 <= x && x <= 132 && 469 <= y && y <= 481) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY3/2.jpg"
        return seatUrl
      })
    }
    else if (135 <= x && x <= 147 && 482 <= y && y <= 496) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY3/3.jpg"
        return seatUrl
      })
    }
    else if (149 <= x && x <= 163 && 498 <= y && y <= 511) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY3/4.jpg"
        return seatUrl
      })
    }
    else if (165 <= x && x <= 180 && 512 <= y && y <= 528) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY3/5.jpg"
        return seatUrl
      })
    }
    else if (187 <= x && x <= 206 && 522 <= y && y <= 545) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY4/1.jpg"
        return seatUrl
      })
    }
    else if (210 <= x && x <= 225 && 512 <= y && y <= 545) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY4/2.jpg"
        return seatUrl
      })
    }
    else if (231 <= x && x <= 249 && 512 <= y && y <= 545) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY4/3.jpg"
        return seatUrl
      })
    }
    else if (254 <= x && x <= 272 && 512 <= y && y <= 545) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY4/4.jpg"
        return seatUrl
      })
    }
    else if (277 <= x && x <= 298 && 521 <= y && y <= 545) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY4/5.jpg"
        return seatUrl
      })
    }
    else if (306 <= x && x <= 316 && 509 <= y && y <= 534) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY5/1.jpg"
        return seatUrl
      })
    }
    else if (321 <= x && x <= 336 && 492 <= y && y <= 511) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY5/2.jpg"
        return seatUrl
      })
    }
    else if (339 <= x && x <= 353 && 475 <= y && y <= 497) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY5/3.jpg"
        return seatUrl
      })
    }
    else if (355 <= x && x <= 371 && 462 <= y && y <= 480) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY5/4.jpg"
        return seatUrl
      })
    }
    else if (372 <= x && x <= 386 && 447 <= y && y <= 463) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY6/1.jpg"
        return seatUrl
      })
    }
    else if (390 <= x && x <= 405 && 432 <= y && y <= 447) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY6/2.jpg"
        return seatUrl
      })
    }
    else if (404 <= x && x <= 421 && 416 <= y && y <= 430) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY6/3.jpg"
        return seatUrl
      })
    }
    else if (421 <= x && x <= 437 && 399 <= y && y <= 414) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY6/4.jpg"
        return seatUrl
      })
    }
    else if (440 <= x && x <= 455 && 385 <= y && y <= 399) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY6/5.jpg"
        return seatUrl
      })
    }
    else if (41 <= x && x <= 49 && 201 <= y && y <= 224) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "SKY6/5.jpg"
        return seatUrl
      })
    }
    else if (209 <= x && x <= 227 && 531 <= y && y <= 545) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "yogibo/1.jpg"
        return seatUrl
      })
    }
    else if (231 <= x && x <= 250 && 531 <= y && y <= 545) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "yogibo/2.jpg"
        return seatUrl
      })
    }
    
    // sky하단
    else if (42 <= x && x <= 48 && 202 <= y && y <= 223) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-31/1.jpg"
        return seatUrl
      })
    }
    else if (42 <= x && x <= 48 && 228 <= y && y <= 247) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-30/1.jpg"
        return seatUrl
      })
    }
    else if (42 <= x && x <= 48 && 252 <= y && y <= 271) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-29/1.jpg"
        return seatUrl
      })
    }
    else if (42 <= x && x <= 48 && 276 <= y && y <= 296) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-28/1.jpg"
        return seatUrl
      })
    }
    else if (42 <= x && x <= 48 && 301 <= y && y <= 321) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-27/1.jpg"
        return seatUrl
      })
    }
    else if (42 <= x && x <= 48 && 327 <= y && y <= 347) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-26/1.jpg"
        return seatUrl
      })
    }
    else if (42 <= x && x <= 48 && 354 <= y && y <= 364) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-25/1.jpg"
        return seatUrl
      })
    }
    else if (45 <= x && x <= 54 && 368 <= y && y <= 375) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-24/1.jpg"
        return seatUrl
      })
    }
    else if (59 <= x && x <= 70 && 378 <= y && y <= 390) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-23/1.jpg"
        return seatUrl
      })
    }
    else if (73 <= x && x <= 85 && 395 <= y && y <= 405) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-22/1.jpg"
        return seatUrl
      })
    }
    else if (86 <= x && x <= 102 && 410 <= y && y <= 419) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-21/1.jpg"
        return seatUrl
      })
    }
    else if (105 <= x && x <= 118 && 425 <= y && y <= 433) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-20/1.jpg"
        return seatUrl
      })
    }
    else if (117 <= x && x <= 132 && 437 <= y && y <= 449) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-19/1.jpg"
        return seatUrl
      })
    }
    else if (132 <= x && x <= 148 && 455 <= y && y <= 465) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-18/1.jpg"
        return seatUrl
      })
    }
    else if (147 <= x && x <= 164 && 470 <= y && y <= 479) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-17/1.jpg"
        return seatUrl
      })
    }
    else if (163 <= x && x <= 180 && 485 <= y && y <= 494) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-16/1.jpg"
        return seatUrl
      })
    }
    else if (178 <= x && x <= 190 && 500 <= y && y <= 508) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-15/1.jpg"
        return seatUrl
      })
    }
    else if (194 <= x && x <= 204 && 506 <= y && y <= 510) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-14/1.jpg"
        return seatUrl
      })
    }
    else if (209 <= x && x <= 227 && 506 <= y && y <= 510) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-13/1.jpg"
        return seatUrl
      })
    }
    else if (232 <= x && x <= 250 && 506 <= y && y <= 510) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-12/1.jpg"
        return seatUrl
      })
    }
    else if (255 <= x && x <= 273 && 506 <= y && y <= 510) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-11/1.jpg"
        return seatUrl
      })
    }
    else if (278 <= x && x <= 289 && 506 <= y && y <= 510) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-10/1.jpg"
        return seatUrl
      })
    }
    else if (292 <= x && x <= 305 && 496 <= y && y <= 505) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-9/1.jpg"
        return seatUrl
      })
    }
    else if (307 <= x && x <= 320 && 482 <= y && y <= 496) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-8/1.jpg"
        return seatUrl
      })
    }
    else if (322 <= x && x <= 339 && 464 <= y && y <= 476) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-7/1.jpg"
        return seatUrl
      })
    }
    else if (340 <= x && x <= 355 && 447 <= y && y <= 460) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-6/1.jpg"
        return seatUrl
      })
    }
    else if (356 <= x && x <= 370 && 430 <= y && y <= 445) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-5/1.jpg"
        return seatUrl
      })
    }
    else if (372 <= x && x <= 390 && 443 <= y && y <= 426) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-4/1.jpg"
        return seatUrl
      })
    }
    else if (390 <= x && x <= 406 && 397 <= y && y <= 410) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-3/1.jpg"
        return seatUrl
      })
    }
    else if (405 <= x && x <= 423 && 381 <= y && y <= 390) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-2/1.jpg"
        return seatUrl
      })
    }
    else if (423 <= x && x <= 436 && 366 <= y && y <= 380) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "U-1/1.jpg"
        return seatUrl
      })
    }

    // 3층 어웨이
    else if (460 <= x && x <= 477 && 192 <= y && y <= 248) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "GRASS/3.jpg"
        return seatUrl
      })
    }
    else if (460 <= x && x <= 477 && 257 <= y && y <= 307) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "GRASS/2.jpg"
        return seatUrl
      })
    }
    else if (460 <= x && x <= 477 && 317 <= y && y <= 370) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "GRASS/1.jpg"
        return seatUrl
      })
    }
    else if (405 <= x && x <= 420 && 218 <= y && y <= 229) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-12/1.jpg"
        return seatUrl
      })
    }
    else if (402 <= x && x <= 422 && 235 <= y && y <= 248) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-11/1.jpg"
        return seatUrl
      })
    }
    else if (389 <= x && x <= 397 && 253 <= y && y <= 267) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-10/1.jpg"
        return seatUrl
      })
    }
    else if (402 <= x && x <= 422 && 255 <= y && y <= 267) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-10/2.jpg"
        return seatUrl
      })
    }
    else if (355 <= x && x <= 372 && 276 <= y && y <= 285) {
      setSeatUrl(seatUrl => {
        seatUrl = imageUrl + "1-9/1.jpg"
        return seatUrl
      })
    }
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
  }

  useEffect(() => {
    ImageMap('img[useMap]')
  }, [])

  return (
    <div className='section-detail-container'>
      <div className='section-detail-header' onClick={toSeat}>
        <img className='go-back-arrow' src={arrow} alt="" />
      </div>

      <div>
        <div className='section-detail-img'>
          <img src={seatUrl} onClick={selectSeat}></img>
        </div>
      </div>


      <TransformWrapper
        initialScale={3}
        initialPositionX={-400}
        initialPositionY={-300}
      >
        <TransformComponent>
          <div onClick={getCoordinate}>
            <div className='pin'></div>
            <img src={mapImg} alt="" />
          </div>
        </TransformComponent>
      </TransformWrapper>
      {/* <div className='map-controller'>
        <img src={`https://laon.info/images/sectionSelect/${sectionName}.png`} useMap={`#${sectionName}`} />

        <img src={pin} style={{
          position:'absolute',
          left : pinCoords.x,
          top : pinCoords.y,
          width: '20px',
          height: '20px',
        }}/>

        <map name="INFIELD3">
          <area onClick={selectSeat} alt="3_12_1" title="3_12_1" coords="179,17,180,59,218,60" shape="poly" />
          <area onClick={selectSeat} alt="3_11_1" title="3_11_1" coords="183,109,221,109,221,65,183,66" shape="poly" />
          <area onClick={selectSeat} alt="3_10_2" title="3_10_2" coords="181,160,221,160,221,114,181,115" shape="poly" />
          <area onClick={selectSeat} alt="3_9_3" title="3_9_3" coords="179,211,220,211,220,166,180,166" shape="poly" />
          <area onClick={selectSeat} alt="3_8_3" title="3_8_3" coords="180,260,221,260,220,216,181,216" shape="poly" />
          <area onClick={selectSeat} alt="3_10_1" title="3_10_1" coords="229,160,258,160,258,116,230,117" shape="poly" />
          <area onClick={selectSeat} alt="3_9_2" title="3_9_2" coords="231,209,286,209,286,166,230,166" shape="poly" />
          <area onClick={selectSeat} alt="3_8_2" title="3_8_2" coords="229,259,286,259,285,218,231,218" shape="poly" />
          <area onClick={selectSeat} alt="3_9_1" title="3_9_1" coords="294,210,352,211,349,192,327,191,296,168" shape="poly" />
          <area onClick={selectSeat} alt="3_8_1" title="3_8_1" coords="294,259,351,263,350,216,294,216" shape="poly" />
          <area onClick={selectSeat} alt="3_12_2" title="3_12_2" coords="171,62,160,61,160,16,171,17" shape="poly" />
          <area onClick={selectSeat} alt="3_11_2" title="3_11_2" coords="171,66,163,66,163,109,171,109" shape="poly" />
          <area onClick={selectSeat} alt="3_10_3" title="3_10_3" coords="173,115,159,115,159,154,171,156,173,137" shape="poly" />
          <area onClick={selectSeat} alt="3_9_4" title="3_9_4" coords="175,166,163,164,164,208,174,209" shape="poly" />
          <area onClick={selectSeat} alt="3_8_4" title="3_8_4" coords="173,216,161,216,162,259,173,260" shape="poly" />
        </map>

        <map name="BLUE">
          <area onClick={selectSeat} alt="3_7_1" title="3_7_1" coords="274,10,273,46,229,44,230,10" shape="poly" />
          <area onClick={selectSeat} alt="3_7_2" title="3_7_2" coords="223,10,223,45,178,45,178,10" shape="poly" />
          <area onClick={selectSeat} alt="3_7_3" title="3_7_3" coords="171,11,169,45,139,45,139,10" shape="poly" />
          <area onClick={selectSeat} alt="3_7_4" title="3_7_4" coords="133,10,133,42,126,43,125,11" shape="poly" />
          <area onClick={selectSeat} alt="3_6_1" title="3_6_1" coords="273,50,273,61,232,83,229,51" shape="poly" />
          <area onClick={selectSeat} alt="3_6_2" title="3_6_2" coords="221,85,223,50,178,50,177,104" shape="poly" />
          <area onClick={selectSeat} alt="3_6_3" title="3_6_3" coords="169,107,168,51,138,50,138,122" shape="poly" />
          <area onClick={selectSeat} alt="3_6_4" title="3_6_4" coords="134,120,134,51,125,51,126,123" shape="poly" />
          <area onClick={selectSeat} alt="3_5_1" title="3_5_1" coords="243,96,272,66,232,85" shape="poly" />
          <area onClick={selectSeat} alt="3_5_2" title="3_5_2" coords="209,136,236,105,222,91,179,110" shape="poly" />
          <area onClick={selectSeat} alt="3_5_3" title="3_5_3" coords="180,164,202,140,168,113,137,127" shape="poly" />
          <area onClick={selectSeat} alt="3_5_4" title="3_5_4" coords="173,174,178,167,133,127,125,129" shape="poly" />
          <area onClick={selectSeat} alt="3_4_1" title="3_4_1" coords="269,121,299,88,276,67,246,98" shape="poly" />
          <area onClick={selectSeat} alt="3_4_2" title="3_4_2" coords="235,160,263,128,240,107,212,138" shape="poly" />
          <area onClick={selectSeat} alt="3_4_3" title="3_4_3" coords="203,195,232,164,205,144,177,174" shape="poly" />
          <area onClick={selectSeat} alt="3_3_1" title="3_3_1" coords="296,143,324,112,301,92,273,124" shape="poly" />
          <area onClick={selectSeat} alt="3_3_2" title="3_3_2" coords="264,184,291,153,267,131,239,163" shape="poly" />
          <area onClick={selectSeat} alt="3_3_3" title="3_3_3" coords="227,221,256,189,233,168,202,199" shape="poly" />
          <area onClick={selectSeat} alt="3_2_1" title="3_2_1" coords="324,169,352,139,327,117,299,147" shape="poly" />
          <area onClick={selectSeat} alt="3_2_2" title="3_2_2" coords="291,208,318,177,294,153,266,186" shape="poly" />
          <area onClick={selectSeat} alt="3_2_3" title="3_2_3" coords="264,237,285,213,259,192,237,216" shape="poly" />
          <area onClick={selectSeat} alt="3_2_4" title="3_2_4" coords="255,248,260,242,233,219,230,226" shape="poly" />
          <area onClick={selectSeat} alt="3_1_1" title="3_1_1" coords="339,185,369,155,355,141,327,173" shape="poly" />
          <area onClick={selectSeat} alt="3_1_2" title="3_1_2" coords="307,223,334,191,321,179,293,210" shape="poly" />
          <area onClick={selectSeat} alt="3_1_3" title="3_1_3" coords="280,249,299,227,287,216,265,239" shape="poly" />
          <area onClick={selectSeat} alt="3_1_4" title="3_1_4" coords="272,260,277,254,262,244,257,249" shape="poly" />
        </map>

        <map name="ZBRO3">
          <area onClick={selectSeat} alt="3_4_1" title="3_4_1" coords="287,38,273,27,247,55,260,68" shape="poly" />
          <area onClick={selectSeat} alt="3_4_2" title="3_4_2" coords="254,74,241,61,214,92,228,105" shape="poly" />
          <area onClick={selectSeat} alt="3_4_3" title="3_4_3" coords="222,111,209,99,182,127,196,139" shape="poly" />
          <area onClick={selectSeat} alt="3_3_1" title="3_3_1" coords="313,64,289,43,262,73,285,95" shape="poly" />
          <area onClick={selectSeat} alt="3_3_2" title="3_3_2" coords="281,100,258,79,232,107,254,129" shape="poly" />
          <area onClick={selectSeat} alt="3_3_3" title="3_3_3" coords="249,135,225,113,206,136,229,156" shape="poly" />
          <area onClick={selectSeat} alt="3_3_4" title="3_3_4" coords="227,160,203,139,199,147,220,164" shape="poly" />
          <area onClick={selectSeat} alt="3_2_1" title="3_2_1" coords="337,84,315,65,289,95,310,117" shape="poly" />
          <area onClick={selectSeat} alt="3_2_2" title="3_2_2" coords="305,123,285,101,257,132,279,150" shape="poly" />
          <area onClick={selectSeat} alt="3_2_3" title="3_2_3" coords="274,158,252,139,233,158,256,178" shape="poly" />
          <area onClick={selectSeat} alt="3_2_4" title="3_2_4" coords="252,182,230,163,224,169,244,187" shape="poly" />
          <area onClick={selectSeat} alt="3_1_1" title="3_1_1" coords="358,105,342,89,316,120,340,142" shape="poly" />
          <area onClick={selectSeat} alt="3_1_2" title="3_1_2" coords="337,150,310,125,284,156,321,188" shape="poly" />
          <area onClick={selectSeat} alt="3_1_3" title="3_1_3" coords="319,198,277,159,253,189,303,234" shape="poly" />
        </map>

        <map name="OUTFIELD1">
          <area onClick={selectSeat} alt="TL_9_1" title="TL_9_1" coords="239,33,240,13,216,13,216,30" shape="poly" />
          <area onClick={selectSeat} alt="LF_10_1" title="LF_10_1" coords="240,83,239,54,218,52,218,83" shape="poly" />
          <area onClick={selectSeat} alt="LF_9_1" title="LF_9_1" coords="216,85,215,54,194,52,178,65,208,94" shape="poly" />
          <area onClick={selectSeat} alt="LF_8_1" title="LF_8_1" coords="204,96,176,71,162,84,190,109" shape="poly" />
          <area onClick={selectSeat} alt="LF_7_1" title="LF_7_1" coords="186,113,159,86,146,99,173,126" shape="poly" />
          <area onClick={selectSeat} alt="LF_6_1" title="LF_6_1" coords="170,129,143,102,130,117,155,143" shape="poly" />
          <area onClick={selectSeat} alt="LF_5_1" title="LF_5_1" coords="154,146,128,119,114,134,140,159" shape="poly" />
          <area onClick={selectSeat} alt="LF_4_1" title="LF_4_1" coords="138,163,109,137,97,150,126,176" shape="poly" />
          <area onClick={selectSeat} alt="LF_3_1" title="LF_3_1" coords="120,179,95,154,82,165,106,191" shape="poly" />
          <area onClick={selectSeat} alt="LF_2_1" title="LF_2_1" coords="104,194,80,169,64,182,93,207" shape="poly" />
          <area onClick={selectSeat} alt="LF_1_1" title="LF_1_1" coords="88,210,61,186,48,198,74,225" shape="poly" />
          <area onClick={selectSeat} alt="ML_10_1" title="ML_10_1" coords="240,105,240,94,219,92,219,103" shape="poly" />
          <area onClick={selectSeat} alt="ML_8_1" title="ML_8_1" coords="216,106,213,94,194,113,201,119" shape="poly" />
          <area onClick={selectSeat} alt="ML_7_1" title="ML_7_1" coords="198,124,191,118,178,132,183,137" shape="poly" />
          <area onClick={selectSeat} alt="ML_6_1" title="ML_6_1" coords="183,141,175,135,164,147,171,155" shape="poly" />
          <area onClick={selectSeat} alt="ML_5_1" title="ML_5_1" coords="164,158,157,151,144,163,154,172" shape="poly" />
          <area onClick={selectSeat} alt="ML_4_1" title="ML_4_1" coords="151,174,142,168,130,182,137,188" shape="poly" />
          <area onClick={selectSeat} alt="ML_3_1" title="ML_3_1" coords="133,191,126,184,111,199,119,204" shape="poly" />
          <area onClick={selectSeat} alt="ML_2_1" title="ML_2_1" coords="117,207,109,202,96,215,104,221" shape="poly" />
          <area onClick={selectSeat} alt="ML_1_1" title="ML_1_1" coords="100,224,94,216,81,229,88,239" shape="poly" />
          <area onClick={selectSeat} alt="TL_0_1" title="TL_0_1" coords="60,218,37,198,24,212,44,232" shape="poly" />
          <area onClick={selectSeat} alt="TL_0_2" title="TL_0_2" coords="84,244,61,224,50,236,71,255" shape="poly" />
        </map>

        <map name="DDANG">
          <area onClick={selectSeat} alt="ROOFTOP_3" title="ROOFTOP_3" coords="207,125,255,75,212,33,162,82" shape="poly" />
          <area onClick={selectSeat} alt="ROOFTOP_2" title="ROOFTOP_2" coords="193,137,149,93,101,139,144,184" shape="poly" />
          <area onClick={selectSeat} alt="ROOFTOP_1" title="ROOFTOP_1" coords="128,199,86,155,36,202,81,245" shape="poly" />
        </map>

        <map name="SKY1">
          <area onClick={selectSeat} alt="SKY1_1" title="SKY1_1" coords="9,19,9,49,49,47,51,19" shape="poly" />
          <area onClick={selectSeat} alt="SKY1_3" title="SKY1_3" coords="8,80,49,80,51,53,9,53" shape="poly" />
          <area onClick={selectSeat} alt="SKY1_3" title="SKY1_3" coords="9,111,52,111,50,86,9,86" shape="poly" />
          <area onClick={selectSeat} alt="SKY1_4" title="SKY1_4" coords="9,145,51,145,51,120,8,119" shape="poly" />
          <area onClick={selectSeat} alt="SKY1_5" title="SKY1_5" coords="10,178,49,178,49,151,9,151" shape="poly" />
          <area onClick={selectSeat} alt="SKY1_6" title="SKY1_6" coords="9,213,52,214,51,186,9,185" shape="poly" />
          <area onClick={selectSeat} alt="SKY1_7" title="SKY1_7" coords="9,263,51,243,51,223,11,222" shape="poly" />
          <area onClick={selectSeat} alt="U_31_1" title="U_31_1" coords="56,47,65,47,68,19,56,18" shape="poly" />
          <area onClick={selectSeat} alt="U_30_1" title="U_30_1" coords="57,82,65,81,65,54,56,54" shape="poly" />
          <area onClick={selectSeat} alt="U_29_1" title="U_29_1" coords="55,111,65,111,66,87,57,86" shape="poly" />
          <area onClick={selectSeat} alt="U_28_1" title="U_28_1" coords="56,147,67,147,65,120,56,120" shape="poly" />
          <area onClick={selectSeat} alt="U_27_1" title="U_27_1" coords="56,178,66,178,66,154,57,152" shape="poly" />
          <area onClick={selectSeat} alt="U_26_1" title="U_26_1" coords="56,213,65,213,65,186,56,186" shape="poly" />
          <area onClick={selectSeat} alt="U_25_1" title="U_25_1" coords="56,240,66,237,65,222,57,222" shape="poly" />
        </map>

        <map name="SKY2">
          <area onClick={selectSeat} alt="SKY2_1" title="SKY2_1" coords="8,43,37,68,68,36,54,20" shape="poly" />
          <area onClick={selectSeat} alt="SKY2_2" title="SKY2_2" coords="40,70,59,90,91,58,70,39" shape="poly" />
          <area onClick={selectSeat} alt="SKY2_3" title="SKY2_3" coords="61,92,78,109,111,76,93,58" shape="poly" />
          <area onClick={selectSeat} alt="SKY2_4" title="SKY2_4" coords="83,113,101,129,133,98,113,80" shape="poly" />
          <area onClick={selectSeat} alt="SKY2_5" title="SKY2_5" coords="103,132,123,148,155,118,134,99" shape="poly" />
          <area onClick={selectSeat} alt="SKY3_1" title="SKY3_1" coords="126,152,144,171,176,138,157,121" shape="poly" />
          <area onClick={selectSeat} alt="SKY3_2" title="SKY3_2" coords="147,174,165,191,196,158,177,142" shape="poly" />
          <area onClick={selectSeat} alt="SKY3_3" title="SKY3_3" coords="169,193,188,211,217,179,200,161" shape="poly" />
          <area onClick={selectSeat} alt="SKY3_4" title="SKY3_4" coords="190,212,210,232,240,200,221,181" shape="poly" />
          <area onClick={selectSeat} alt="SKY3_5" title="SKY3_5" coords="209,234,239,258,257,217,241,201" shape="poly" />
          <area onClick={selectSeat} alt="U_24_1" title="U_24_1" coords="58,18,72,34,78,26,68,16" shape="poly" />
          <area onClick={selectSeat} alt="U_23_1" title="U_23_1" coords="75,35,92,51,99,47,80,29" shape="poly" />
          <area onClick={selectSeat} alt="U_22_1" title="U_22_1" coords="94,54,113,73,119,66,102,49" shape="poly" />
          <area onClick={selectSeat} alt="U_21_1" title="U_21_1" coords="115,75,134,96,142,88,123,71" shape="poly" />
          <area onClick={selectSeat} alt="U_20_1" title="U_20_1" coords="137,97,155,115,163,110,145,92" shape="poly" />
          <area onClick={selectSeat} alt="U_19_1" title="U_19_1" coords="160,119,178,137,184,130,166,113" shape="poly" />
          <area onClick={selectSeat} alt="U_18_1" title="U_18_1" coords="181,139,199,156,206,147,188,133" shape="poly" />
          <area onClick={selectSeat} alt="U_17_1" title="U_17_1" coords="202,158,220,177,227,170,208,153" shape="poly" />
          <area onClick={selectSeat} alt="U_16_1" title="U_16_1" coords="222,179,241,196,248,190,230,173" shape="poly" />
          <area onClick={selectSeat} alt="U_15_1" title="U_15_1" coords="246,198,260,211,262,204,251,192" shape="poly" />
        </map>

        <map name="EXCITING3">
          <area onClick={selectSeat} alt="3E_3_1" title="3E_3_1" coords="412,85,498,87,413,8" shape="poly" />
          <area onClick={selectSeat} alt="3E_2_1" title="3E_2_1" coords="416,145,499,145,501,97,412,93" shape="poly" />
          <area onClick={selectSeat} alt="3E_1_1" title="3E_1_1" coords="413,152,499,153,504,251,410,176" shape="poly" />
        </map>

        <map name="ZBRO1">
          <area onClick={selectSeat} alt="T1_1_1" title="T1_1_1" coords="187,107,201,138,222,120,200,95" shape="poly" />
          <area onClick={selectSeat} alt="T1_1_2" title="T1_1_2" coords="203,145,226,124,249,149,216,178" shape="poly" />
          <area onClick={selectSeat} alt="T1_1_3" title="T1_1_3" coords="219,184,253,154,275,178,232,216" shape="poly" />
          <area onClick={selectSeat} alt="T1_2_1" title="T1_2_1" coords="202,94,222,76,244,101,224,118" shape="poly" />
          <area onClick={selectSeat} alt="T1_2_2" title="T1_2_2" coords="229,123,248,105,270,129,251,147" shape="poly" />
          <area onClick={selectSeat} alt="T1_2_3" title="T1_2_3" coords="255,152,274,135,291,153,271,171" shape="poly" />
          <area onClick={selectSeat} alt="T1_2_4" title="T1_2_4" coords="272,173,293,155,297,160,277,177" shape="poly" />
          <area onClick={selectSeat} alt="T1_3_1" title="T1_3_1" coords="223,75,242,57,265,82,245,99" shape="poly" />
          <area onClick={selectSeat} alt="T1_3_2" title="T1_3_2" coords="250,104,269,86,291,111,272,129" shape="poly" />
          <area onClick={selectSeat} alt="T1_3_3" title="T1_3_3" coords="276,133,295,115,312,134,293,152" shape="poly" />
          <area onClick={selectSeat} alt="T1_3_4" title="T1_3_4" coords="294,154,314,136,318,141,299,158" shape="poly" />
          <area onClick={selectSeat} alt="T1_4_1" title="T1_4_1" coords="245,54,256,44,278,69,266,79" shape="poly" />
          <area onClick={selectSeat} alt="T1_4_2" title="T1_4_2" coords="271,84,282,74,304,98,293,108" shape="poly" />
          <area onClick={selectSeat} alt="T1_4_3" title="T1_4_3" coords="298,113,309,103,325,122,314,132" shape="poly" />
          <area onClick={selectSeat} alt="T1_4_4" title="T1_4_4" coords="316,134,328,124,332,129,320,139" shape="poly" />
        </map>

        <map name="AWAYSUPPORT">
          <area onClick={selectSeat} alt="1_1_1" title="1_1_1" coords="133,135,159,164,172,152,147,123" shape="poly" />
          <area onClick={selectSeat} alt="1_1_2" title="1_1_2" coords="164,169,190,198,202,186,177,157" shape="poly" />
          <area onClick={selectSeat} alt="1_1_3" title="1_1_3" coords="194,203,206,191,226,213,214,224" shape="poly" />
          <area onClick={selectSeat} alt="1_1_4" title="1_1_4" coords="216,228,220,233,233,221,229,215" shape="poly" />
          <area onClick={selectSeat} alt="1_2_1" title="1_2_1" coords="148,122,170,101,196,130,173,151" shape="poly" />
          <area onClick={selectSeat} alt="1_2_2" title="1_2_2" coords="179,156,201,135,227,163,204,184" shape="poly" />
          <area onClick={selectSeat} alt="1_2_3" title="1_2_3" coords="208,190,231,169,251,191,228,212" shape="poly" />
          <area onClick={selectSeat} alt="1_2_4" title="1_2_4" coords="231,215,253,194,258,199,235,220" shape="poly" />
          <area onClick={selectSeat} alt="1_3_1" title="1_3_1" coords="171,100,194,79,220,108,197,129" shape="poly" />
          <area onClick={selectSeat} alt="1_3_2" title="1_3_2" coords="203,135,226,113,251,142,228,163" shape="poly" />
          <area onClick={selectSeat} alt="1_3_3" title="1_3_3" coords="233,169,256,147,275,169,253,190" shape="poly" />
          <area onClick={selectSeat} alt="1_3_4" title="1_3_4" coords="255,193,279,172,282,177,259,197" shape="poly" />
          <area onClick={selectSeat} alt="1_4_1" title="1_4_1" coords="196,78,219,57,244,86,222,106" shape="poly" />
          <area onClick={selectSeat} alt="1_4_2" title="1_4_2" coords="227,112,249,91,275,119,252,140" shape="poly" />
          <area onClick={selectSeat} alt="1_4_3" title="1_4_3" coords="258,146,280,125,300,147,277,167" shape="poly" />
          <area onClick={selectSeat} alt="1_4_4" title="1_4_4" coords="279,170,302,150,307,155,284,176" shape="poly" />
          <area onClick={selectSeat} alt="1_5_1" title="1_5_1" coords="221,56,260,72,247,84" shape="poly" />
          <area onClick={selectSeat} alt="1_5_2" title="1_5_2" coords="251,90,278,118,310,92,268,75" shape="poly" />
          <area onClick={selectSeat} alt="1_5_3" title="1_5_3" coords="282,124,314,94,346,106,302,145" shape="poly" />
          <area onClick={selectSeat} alt="1_5_4" title="1_5_4" coords="305,149,349,108,354,114,309,154" shape="poly" />
        </map>

        <map name="INFIELD1">
          <area onClick={selectSeat} alt="1_6_1" title="1_6_1" coords="118,186,118,193,145,204,145,185" shape="poly" />
          <area onClick={selectSeat} alt="1_6_2" title="1_6_2" coords="149,186,177,186,178,216,149,206" shape="poly" />
          <area onClick={selectSeat} alt="1_6_3" title="1_6_3" coords="183,186,211,186,210,229,182,218" shape="poly" />
          <area onClick={selectSeat} alt="1_7_1" title="1_7_1" coords="117,161,117,183,145,182,145,160" shape="poly" />
          <area onClick={selectSeat} alt="1_7_2" title="1_7_2" coords="150,161,149,183,178,183,177,161" shape="poly" />
          <area onClick={selectSeat} alt="1_7_3" title="1_7_3" coords="183,160,183,182,211,182,210,160" shape="poly" />
          <area onClick={selectSeat} alt="1_8_1" title="1_8_1" coords="117,136,116,156,145,157,145,136" shape="poly" />
          <area onClick={selectSeat} alt="1_8_2" title="1_8_2" coords="149,136,149,157,178,158,177,137" shape="poly" />
          <area onClick={selectSeat} alt="1_8_3" title="1_8_3" coords="182,137,210,136,210,158,183,158" shape="poly" />
          <area onClick={selectSeat} alt="1_9_1" title="1_9_1" coords="117,123,117,133,144,133,144,112,131,122" shape="poly" />
          <area onClick={selectSeat} alt="1_9_2" title="1_9_2" coords="149,111,176,111,177,132,148,133" shape="poly" />
          <area onClick={selectSeat} alt="1_9_3" title="1_9_3" coords="182,111,210,111,210,132,181,133" shape="poly" />
          <area onClick={selectSeat} alt="1_10_1" title="1_10_" coords="164,86,177,87,177,108,162,108" shape="poly" />
          <area onClick={selectSeat} alt="1_10_2" title="1_10_2" coords="182,86,210,86,210,108,182,108" shape="poly" />
          <area onClick={selectSeat} alt="1_11_1" title="1_11_1" coords="181,62,209,61,210,83,181,83" shape="poly" />
          <area onClick={selectSeat} alt="1_12_1" title="1_12_1" coords="182,58,209,29,209,58" shape="poly" />
        </map>

        <map name="EXCITING1">
          <area onClick={selectSeat} alt="1E_1_1" title="1E_1_1" coords="178,229,239,173,238,160,178,160" shape="poly" />
          <area onClick={selectSeat} alt="1E_2_1" title="1E_2_1" coords="177,120,177,155,239,154,238,118" shape="poly" />
          <area onClick={selectSeat} alt="1E_3_1" title="1E_3_1" coords="177,115,239,114,238,58" shape="poly" />
        </map>

        <map name="GRASSZONE">
          <area onClick={selectSeat} alt="GRASS_1" title="GRASS_1" coords="39,248,16,228,16,176,39,176" shape="poly" />
          <area onClick={selectSeat} alt="GRASS_2" title="GRASS_2" coords="40,171,16,170,16,108,40,108" shape="poly" />
          <area onClick={selectSeat} alt="GRASS_3" title="GRASS_3" coords="40,102,16,102,16,52,39,30" shape="poly" />
        </map>

        <map name="OUTFIELDFamily">
          <area onClick={selectSeat} alt="F_1_1" title="F_1_1" coords="179,203,217,165,248,201,212,236" shape="poly" />
          <area onClick={selectSeat} alt="F_2_1" title="F_2_1" coords="49,69,87,33,120,71,84,103" shape="poly" />
        </map>

        <map name="OUTFIELD3">
          <area onClick={selectSeat} alt="RF_1_1" title="RF_1_1" coords="210,226,241,195,225,178,194,209" shape="poly" />
          <area onClick={selectSeat} alt="RF_2_1" title="RF_2_1" coords="223,176,207,161,176,192,192,207" shape="poly" />
          <area onClick={selectSeat} alt="RF_3_1" title="RF_3_1" coords="205,159,189,142,159,173,176,189" shape="poly" />
          <area onClick={selectSeat} alt="RF_4_1" title="RF_4_1" coords="187,140,170,124,140,154,156,171" shape="poly" />
          <area onClick={selectSeat} alt="RF_5_1" title="RF_5_1" coords="168,122,152,106,122,137,138,152" shape="poly" />
          <area onClick={selectSeat} alt="RF_6_1" title="RF_6_1" coords="150,104,134,88,103,118,120,134" shape="poly" />
          <area onClick={selectSeat} alt="RF_7_1" title="RF_7_1" coords="132,86,116,69,86,100,101,116" shape="poly" />
          <area onClick={selectSeat} alt="RF_8_1" title="RF_8_1" coords="114,68,98,51,67,81,84,97" shape="poly" />
          <area onClick={selectSeat} alt="RF_9_1" title="RF_9_1" coords="96,49,81,33,54,33,55,70,65,79" shape="poly" />
          <area onClick={selectSeat} alt="RF_10_1" title="RF_10_1" coords="52,33,28,33,28,69,53,70" shape="poly" />
          <area onClick={selectSeat} alt="MR_1_1" title="MR_1_1" coords="207,228,192,212,182,222,197,238" shape="poly" />
          <area onClick={selectSeat} alt="MR_2_1" title="MR_2_1" coords="189,210,173,194,164,204,179,220" shape="poly" />
          <area onClick={selectSeat} alt="MR_3_1" title="MR_3_1" coords="171,192,155,176,146,185,161,201" shape="poly" />
          <area onClick={selectSeat} alt="MR_4_1" title="MR_4_1" coords="153,174,137,157,127,167,144,184" shape="poly" />
          <area onClick={selectSeat} alt="MR_5_1" title="MR_5_1" coords="135,155,118,138,109,148,124,165" shape="poly" />
          <area onClick={selectSeat} alt="MR_6_1" title="MR_6_1" coords="116,136,100,121,91,130,106,146" shape="poly" />
          <area onClick={selectSeat} alt="MR_7_1" title="MR_7_1" coords="98,119,82,104,74,113,88,129" shape="poly" />
          <area onClick={selectSeat} alt="MR_8_1" title="MR_8_1" coords="79,100,55,76,54,93,70,110" shape="poly" />
          <area onClick={selectSeat} alt="MR_10_1" title="MR_10_1" coords="53,75,28,75,28,93,53,93" shape="poly" />
        </map>

        <map name="OUTFIELDTable">
          <area onClick={selectSeat} alt="TR_0_1" title="TR_0_1" coords="178,244,190,257,211,236,198,224" shape="poly" />
          <area onClick={selectSeat} alt="TR_0_2" title="TR_0_2" coords="202,221,223,200,235,213,214,234" shape="poly" />
          <area onClick={selectSeat} alt="TR_1_1" title="TR_1_1" coords="228,191,240,180,224,164,213,176" shape="poly" />
          <area onClick={selectSeat} alt="TR_2_1" title="TR_2_1" coords="210,174,222,162,207,147,195,160" shape="poly" />
          <area onClick={selectSeat} alt="TR_3_1" title="TR_3_1" coords="205,145,190,130,178,142,193,157" shape="poly" />
          <area onClick={selectSeat} alt="TR_4_1" title="TR_4_1" coords="188,128,173,113,162,125,176,139" shape="poly" />
          <area onClick={selectSeat} alt="TR_5_1" title="TR_5_1" coords="172,111,160,122,145,108,157,96" shape="poly" />
          <area onClick={selectSeat} alt="TR_6_1" title="TR_6_1" coords="155,94,140,80,129,92,143,106" shape="poly" />
          <area onClick={selectSeat} alt="TR_7_1" title="TR_7_1" coords="139,78,127,89,113,75,125,63" shape="poly" />
          <area onClick={selectSeat} alt="TR_9_1" title="TR_9_1" coords="107,42,79,16,43,16,43,32,71,31,93,55" shape="poly" />
          <area onClick={selectSeat} alt="TR_10_1" title="TR_10_1" coords="41,15,19,16,19,33,41,33" shape="poly" />
        </map>

        <map name="SKY4">
          <area onClick={selectSeat} alt="U_9_1" title="U_9_1" coords="52,205,66,191,74,198,57,214" shape="poly" />
          <area onClick={selectSeat} alt="U_8_1" title="U_8_1" coords="68,190,90,168,96,176,75,197" shape="poly" />
          <area onClick={selectSeat} alt="U_7_1" title="U_7_1" coords="91,167,112,148,119,155,97,175" shape="poly" />
          <area onClick={selectSeat} alt="U_6_1" title="U_6_1" coords="114,147,135,126,141,133,121,154" shape="poly" />
          <area onClick={selectSeat} alt="U_5_1" title="U_5_1" coords="137,125,158,104,165,111,143,131" shape="poly" />
          <area onClick={selectSeat} alt="U_4_1" title="U_4_1" coords="160,102,181,81,188,89,167,109" shape="poly" />
          <area onClick={selectSeat} alt="U_3_1" title="U_3_1" coords="182,80,204,59,210,66,190,87" shape="poly" />
          <area onClick={selectSeat} alt="U_2_1" title="U_2_1" coords="206,58,226,37,233,44,212,65" shape="poly" />
          <area onClick={selectSeat} alt="U_1_1" title="U_1_1" coords="228,36,248,16,255,23,235,43" shape="poly" />
          <area onClick={selectSeat} alt="BSKY5_1" title="BSKY5_1" coords="58,217,75,200,106,233,77,261" shape="poly" />
          <area onClick={selectSeat} alt="BSKY5_2" title="BSKY5_2" coords="77,199,98,178,129,210,108,231" shape="poly" />
          <area onClick={selectSeat} alt="BSKY5_3" title="BSKY5_3" coords="100,178,121,157,152,189,131,209" shape="poly" />
          <area onClick={selectSeat} alt="BSKY5_4" title="BSKY5_4" coords="123,156,144,135,175,167,154,187" shape="poly" />
          <area onClick={selectSeat} alt="BSKY6_1" title="BSKY6_1" coords="146,134,166,113,198,145,177,165" shape="poly" />
          <area onClick={selectSeat} alt="BSKY6_2" title="BSKY6_2" coords="169,112,190,91,221,124,200,143" shape="poly" />
          <area onClick={selectSeat} alt="BSKY6_3" title="BSKY6_3" coords="192,90,212,69,244,101,222,121" shape="poly" />
          <area onClick={selectSeat} alt="BSKY6_4" title="BSKY6_4" coords="215,68,236,47,267,80,245,100" shape="poly" />
          <area onClick={selectSeat} alt="BSKY6_5" title="BSKY6_5" coords="238,46,259,25,289,57,269,78" shape="poly" />
        </map>

        <map name="MAINTABLE">
          <area onClick={selectSeat} alt="VIP3_1" title="VIP3_1" coords="205,86,200,105,212,105,212,85" shape="poly" />
          <area onClick={selectSeat} alt="VIP2_1" title="VIP2_1" coords="216,86,216,106,246,105,246,86" shape="poly" />
          <area onClick={selectSeat} alt="VIP1_1" title="VIP1_1" coords="249,86,248,106,262,104,258,86" shape="poly" />
          <area onClick={selectSeat} alt="TC_3_1" title="TC_3_1" coords="203,108,213,107,213,140,191,139" shape="poly" />
          <area onClick={selectSeat} alt="TC_3_2" title="TC_3_2" coords="189,145,213,145,213,178,177,178" shape="poly" />
          <area onClick={selectSeat} alt="TC_3_3" title="TC_3_3" coords="175,184,213,184,213,215,164,216" shape="poly" />
          <area onClick={selectSeat} alt="TC_2_1" title="TC_2_1" coords="216,108,247,108,247,140,215,139" shape="poly" />
          <area onClick={selectSeat} alt="TC_2_2" title="TC_2_2" coords="216,145,247,145,247,178,216,178" shape="poly" />
          <area onClick={selectSeat} alt="TC_2_3" title="TC_2_3" coords="216,184,247,184,247,216,215,216" shape="poly" />
          <area onClick={selectSeat} alt="TC_1_1" title="TC_1_1" coords="249,108,258,108,271,140,250,141" shape="poly" />
          <area onClick={selectSeat} alt="TC_1_2" title="TC_1_2" coords="248,146,272,146,285,177,249,178" shape="poly" />
          <area onClick={selectSeat} alt="TC_1_3" title="TC_1_3" coords="249,185,285,184,299,216,249,216" shape="poly" />
        </map>

        <map name="SKY3">
          <area onClick={selectSeat} alt="U_14_1" title="U_14_1" coords="207,147,201,163,239,162,240,148" shape="poly" />
          <area onClick={selectSeat} alt="U_13_1" title="U_13_1" coords="247,147,247,161,300,162,299,147" shape="poly" />
          <area onClick={selectSeat} alt="U_12_1" title="U_12_1" coords="308,147,308,163,361,163,359,147" shape="poly" />
          <area onClick={selectSeat} alt="U_11_1" title="U_11_1" coords="367,147,368,163,420,163,420,147" shape="poly" />
          <area onClick={selectSeat} alt="U_10_1" title="U_10_1" coords="427,148,427,162,465,163,457,147" shape="poly" />
          <area onClick={selectSeat} alt="SKY3_1" title="SKY3_1" coords="198,166,161,251,241,254,240,167" shape="poly" />
          <area onClick={selectSeat} alt="SKY3_2" title="SKY3_2" coords="248,167,247,208,299,209,299,166" shape="poly" />
          <area onClick={selectSeat} alt="SKY3_3" title="SKY3_3" coords="308,167,307,208,360,208,360,167" shape="poly" />
          <area onClick={selectSeat} alt="SKY3_4" title="SKY3_4" coords="368,167,369,254,421,254,419,167" shape="poly" />
          <area onClick={selectSeat} alt="SKY3_5" title="SKY3_5" coords="427,167,427,254,506,252,468,167" shape="poly" />
          <area onClick={selectSeat} alt="yogibo_1" title="yogibo_1" coords="247,214,247,254,299,254,299,213" shape="poly" />
          <area onClick={selectSeat} alt="yogibo_2" title="yogibo_2" coords="308,212,308,253,359,253,359,213" shape="poly" />
        </map>
      </div> */}
    </div>
  )
}

