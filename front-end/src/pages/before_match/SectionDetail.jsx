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

  if (seatsSeatList.length === 2) {
    seatUrlAdd = seatsSeatList[0] + "/" + seatsSeatList[1] + ".jpg";
  } else if (seatsSeatList.length === 3) {
    seatUrlAdd = seatsSeatList[0] + "-" + seatsSeatList[1] + "/" + seatsSeatList[2] + ".jpg";
  }

  const [seatUrl, setSeatUrl] = useState(imageUrl + seatUrlAdd);
  const [pinCoords, setPinCoords] = useState({ x: 0, y: 0 })


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
    const x = event.clientX
    const y = event.clientY - 650
    setPinCoords({ x, y })
  }

  function getCoordinate(e) {
    console.log("x:", e.nativeEvent.offsetX, "y:", e.nativeEvent.offsetY)
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
        seatUrl = imageUrl + "TL-10/1.jpg"
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
        className='map-controller'
      >
        <TransformComponent>
          <div onClick={getCoordinate}>
            <img src={mapImg} alt="" />
          </div>
        </TransformComponent>
      </TransformWrapper>

    </div>
  )
}

