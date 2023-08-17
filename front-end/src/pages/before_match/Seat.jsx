import React, { useEffect, useRef, useState } from 'react'
import './styles/Seat.css'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import park_away from './img/seat_r.png'
import park_home from './img/seat_l.png'
import store from '../../store/store.js';

import ImageMap from 'image-map'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import Wrapper from '../../components/AnimateWrapper'

export default function Seat() {
  const [selectSeat, setSelectSeat] = useState(null); // 넘겨줄 변수(3-1 이런 식으로)
  const [showSeatName, setShowSeatName] = useState(null); // 보여줄 이름(블루존)
  const [sectionSelect, setSectionSelect] = useState() // sectionDetail에서 보여줄 사진 이름

  // const [onClick, setOnClick] = useState(false);
  const [seatWeekdayPrice, setSeatWeekdayPrice] = useState(null);
  const [seatWeekendPrice, setSeatWeekendPrice] = useState(null);

  const awayTeam = useSelector(state => state.awayTeamName)
  console.log(awayTeam)

  const navigate = useNavigate();

  const seatData = [
    {
      title: "SKY 자유석 1", seat: "BSKY1_4", weekdayPrice: "7,000", weekendPrice: "9,000", seatSelect: "SKY1"
    },
    {
      title: "SKY 자유석 2", seat: "BSKY2_3", weekdayPrice: "7,000", weekendPrice: "9,000", seatSelect: "SKY2"
    },
    {
      title: "SKY 자유석 3", seat: "BSKY3_3", weekdayPrice: "7,000", weekendPrice: "9,000", seatSelect: "SKY2"
    },
    {
      title: "SKY 자유석 4", seat: "BSKY4_3", weekdayPrice: "7,000", weekendPrice: "9,000", seatSelect: "SKY3"
    },
    {
      title: "SKY 자유석 5", seat: "BSKY5_3", weekdayPrice: "7,000", weekendPrice: "9,000", seatSelect: "SKY4"
    },
    {
      title: "SKY 자유석 6", seat: "BSKY6_3", weekdayPrice: "7,000", weekendPrice: "9,000", seatSelect: "SKY4"
    },
    {
      title: "SKY 지정석 1", seat: "BU_28_1", weekdayPrice: "8,000", weekendPrice: "10,000", seatSelect: "SKY1"
    },
    {
      title: "SKY 지정석 2", seat: "BU_22_1", weekdayPrice: "8,000", weekendPrice: "10,000", seatSelect: "SKY2"
    },
    {
      title: "SKY 지정석 3", seat: "BU_18_1", weekdayPrice: "8,000", weekendPrice: "10,000", seatSelect: "SKY2"
    },
    {
      title: "SKY 지정석 4", seat: "BU_12_1", weekdayPrice: "8,000", weekendPrice: "10,000", seatSelect: "SKY3"
    },
    {
      title: "SKY 지정석 5", seat: "BU_7_1", weekdayPrice: "8,000", weekendPrice: "10,000", seatSelect: "SKY4"
    },
    {
      title: "SKY 지정석 6", seat: "BU_3_1", weekdayPrice: "8,000", weekendPrice: "10,000", seatSelect: "SKY4"
    },
    {
      title: "SKY 여기보존", seat: "Byogibo_1", weekdayPrice: "15,000", weekendPrice: "18,000", seatSelect: "SKY3"
    },
    {
      title: "3루 내야지정석", seat: "B3_9_2", weekdayPrice: "11,000", weekendPrice: "13,000", seatSelect: "INFIELD3"
    },
    {
      title: "블루존", seat: "B3_5_2", weekdayPrice: "13,000", weekendPrice: "15,000", seatSelect: "BLUE"
    },
    {
      title: "지브로존", seat: "BT3_2_2", weekdayPrice: "30,000", weekendPrice: "40,000", seatSelect: "ZBRO3"
    },
    {
      title: "으뜸병원 중앙테이블석", seat: "BTC_2_2", weekdayPrice: "35,000", weekendPrice: "45,000", seatSelect: "MAINTABLE"
    },
    {
      title: "3루 익사이팅석", seat: "B3E_2_1", weekdayPrice: "20,000", weekendPrice: "25,000", seatSelect: "EXCITING3"
    },
    {
      title: "외야 테이블석 1", seat: "BTL_0_1", weekdayPrice: "60,000/4인", weekendPrice: "72,000/4인", seatSelect: "OUTFIELD1"
    },
    {
      title: "외야 지정석 1", seat: "BLF_4_1", weekdayPrice: "8,000", weekendPrice: "10,000", seatSelect: "OUTFIELD1"
    },
    {
      title: "외야 지정석 2", seat: "BLF_8_1", weekdayPrice: "8,000", weekendPrice: "10,000", seatSelect: "OUTFIELD1"
    },
    {
      title: "외야 미니테이블석 1", seat: "BML_4_1", weekdayPrice: "24,000/2인", weekendPrice: "30,000/2인", seatSelect: "OUTFIELD1"
    },
    {
      title: "외야 미니테이블석 2", seat: "BML_8_1", weekdayPrice: "24,000/2인", weekendPrice: "30,000/2인", seatSelect: "OUTFIELD1"
    },
    {
      title: "외야 테이블석 2", seat: "BTL_9_1", weekdayPrice: "60,000/4인", weekendPrice: "72,000/4인", seatSelect: "OUTFIELD1"
    },
    {
      title: "땅땅치킨 루프탑", seat: "BROOFTOP_2", weekdayPrice: "18,000", weekendPrice: "21,000", seatSelect: "DDANG"
    },
    {
      title: "VIP석", seat: "BVIP2_1", weekdayPrice: "40,000", weekendPrice: "50,000", seatSelect: "MAINTABLE"
    },
    {
      title: "대구는 지브로존", seat: "BT1_2_2", weekdayPrice: "30,000", weekendPrice: "40,000", seatSelect: "ZBRO1"
    },
    {
      title: "원정 응원석", seat: "B1_3_2", weekdayPrice: "13,000", weekendPrice: "15,000", seatSelect: "AWAYSUPPORT"
    },
    {
      title: "1루 내야지정석", seat: "B1_9_2", weekdayPrice: "8,000", weekendPrice: "10,000", seatSelect: "INFIELD1"
    },
    {
      title: "1루 익사이팅석", seat: "B1E_2_1", weekdayPrice: "20,000", weekendPrice: "25,000", seatSelect: "EXCITING1"
    },
    {
      title: "잔디석", seat: "BGRASS_2", weekdayPrice: "8,000", weekendPrice: "10,000", seatSelect: "GRASSZONE"
    },
    {
      title: "외야 테이블석 3", seat: "BTR_0_1", weekdayPrice: "60,000/4인", weekendPrice: "72,000/4인", seatSelect: "OUTFIELDTable"
    },
    {
      title: "외야 테이블석 4", seat: "BTR_5_1", weekdayPrice: "60,000/4인", weekendPrice: "72,000/4인", seatSelect: "OUTFIELDTable"
    },
    {
      title: "외야 테이블석 5", seat: "BTR_9_1", weekdayPrice: "60,000/4인", weekendPrice: "72,000/4인", seatSelect: "OUTFIELDTable"
    },
    {
      title: "외야 지정석 3", seat: "BRF_8_1", weekdayPrice: "8,000", weekendPrice: "10,000", seatSelect: "OUTFIELD3"
    },
    {
      title: "외야 지정석 4", seat: "BRF_4_1", weekdayPrice: "8,000", weekendPrice: "10,000", seatSelect: "OUTFIELD3"
    },
    {
      title: "외야 미니테이블석 3", seat: "BMR_8_1", weekdayPrice: "24,000/2인", weekendPrice: "30,000/2인", seatSelect: "OUTFIELD3"
    },
    {
      title: "외야 미니테이블석 4", seat: "BMR_4_1", weekdayPrice: "24,000/2인", weekendPrice: "30,000/2인", seatSelect: "OUTFIELD3"
    },
    {
      title: "외야 패밀리석", seat: "BF_2_1", weekdayPrice: "15,000/1인", weekendPrice: "18,000/1인", seatSelect: "OUTFIELDFamily"
    }
  ]

  function toSectionDetail() {
    if (sectionSelect) {
      navigate('/section', {
        state: {
          sectionSelect: sectionSelect,
          selectSeat: selectSeat
        }
      });
    } else {
      return
    }
  }

  function toTicketing() {
    window.location.href = "https://m.ticketlink.co.kr/sports/137/57"
  }

  function selectSection(event) {
    // console.log(event.target.title)
    // 좌표 수정하기
    // setSelectSeat("3_4_1");
    const title = event.target.title
    setShowSeatName(title);
    for (let index = 0; index < seatData.length; index++) {
      if (title === seatData[index].title) {
        const seats = seatData[index];
        console.log(seats.title);
        const seatsSeat = seats.seat
        const sectionSelect = seats.seatSelect

        setSectionSelect(sectionSelect)
        setSelectSeat(seats.seat);
        setSeatWeekdayPrice(seats.weekdayPrice);
        setSeatWeekendPrice(seats.weekendPrice);
      }
    }
  }

  useEffect(() => {
    ImageMap('img[useMap]')
  }, [])

  return (
    <Wrapper>
      <div className='seat-container font'>

        <div className='swiper-container'>
          <Swiper>
            <SwiperSlide>
              <div className='home-body'>
                <MdOutlineKeyboardDoubleArrowRight size={80} className='swipe-left-icon'/>
                <img className='park-home-img' src={park_home} useMap="#home-map" />

                <map name="home-map">
                  <area target="" alt="땅땅치킨 루프탑" title="땅땅치킨 루프탑" coords="49,87,58,98,110,49,100,39" shape="poly" onClick={selectSection} />
                  <area target="" alt="SKY 자유석 1" title="SKY 자유석 1" coords="6,150,29,149,29,279,6,297" shape="poly" onClick={selectSection} />
                  <area target="" alt="SKY 자유석 2" title="SKY 자유석 2" coords="10,300,30,279,92,336,73,357" shape="poly" onClick={selectSection} />
                  <area target="" alt="SKY 자유석 3" title="SKY 자유석 3" coords="75,358,94,337,139,377,130,407" shape="poly" onClick={selectSection} />
                  <area target="" alt="SKY 자유석 4" title="SKY 자유석 4" coords="141,379,132,407,180,408,180,379" shape="poly" onClick={selectSection} />
                  <area target="" alt="SKY 지정석 1" title="SKY 지정석 1" coords="30,149,38,149,38,267,30,273" shape="poly" onClick={selectSection} />
                  <area target="" alt="SKY 지정석 2" title="SKY 지정석 2" coords="32,278,39,270,101,327,93,335" shape="poly" onClick={selectSection} />
                  <area target="" alt="SKY 지정석 3" title="SKY 지정석 3" coords="95,335,103,328,145,365,140,375" shape="poly" onClick={selectSection} />
                  <area target="" alt="SKY 지정석 4" title="SKY 지정석 4" coords="146,365,141,376,180,377,180,366" shape="poly" onClick={selectSection} />
                  <area target="" alt="3루 내야지정석" title="3루 내야지정석" coords="42,159,49,159,99,207,98,225,41,225" shape="poly" onClick={selectSection} />
                  <area target="" alt="블루존" title="블루존" coords="41,228,41,268,98,318,132,278,99,248,99,228" shape="poly" onClick={selectSection} />
                  <area target="" alt="지브로존" title="지브로존" coords="135,279,101,321,148,359,167,305" shape="poly" onClick={selectSection} />
                  <area target="" alt="으뜸병원 중앙테이블석" title="으뜸병원 중앙테이블석" coords="167,310,150,360,180,361,180,309" shape="poly" onClick={selectSection} />
                  <area target="" alt="3루 익사이팅석" title="3루 익사이팅석" coords="102,208,102,248,123,265,123,226" shape="poly" onClick={selectSection} />
                  <area target="" alt="외야 테이블석 1" title="외야 테이블석 1" coords="48,152,55,144,82,169,73,178" shape="poly" onClick={selectSection} />
                  <area target="" alt="외야 지정석 1" title="외야 지정석 1" coords="58,142,73,159,117,113,101,98" shape="poly" onClick={selectSection} />
                  <area target="" alt="외야 지정석 2" title="외야 지정석 2" coords="103,97,119,112,150,80,168,79,168,58,142,58" shape="poly" onClick={selectSection} />
                  <area target="" alt="외야 미니테이블석 1" title="외야 미니테이블석 1" coords="76,159,83,167,126,123,119,116" shape="poly" onClick={selectSection} />
                  <area target="" alt="외야 미니테이블석 2" title="외야 미니테이블석 2" coords="121,112,128,119,153,94,166,92,167,81,151,81" shape="poly" onClick={selectSection} />
                  <area target="" alt="외야 테이블석 2" title="외야 테이블석 2" coords="143,42,143,52,168,52,167,42" shape="poly" onClick={selectSection} />
                  <area target="" alt="VIP석" title="VIP석" coords="171,296,167,306,180,304,180,296" shape="poly" onClick={selectSection} />
                  <area target="" alt="SKY 여기보존" title="SKY 여기보존" coords="151,394,150,407,179,407,179,394" shape="poly" onClick={selectSection} />
                </map>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`away-body ${awayTeam}`}>
                <MdOutlineKeyboardDoubleArrowLeft size={80} className='swipe-right-icon'/>
                <img className='park-away-img' src={park_away} useMap="#away-map" />

                <map name="away-map">
                  <area target="" onClick={selectSection} alt="SKY 자유석 4" title="SKY 자유석 4" coords="1,508,50,507,69,547,17,545,17,527,-1,525" shape="poly" />
                  <area target="" onClick={selectSection} alt="SKY 자유석 5" title="SKY 자유석 5" coords="71,543,139,479,112,451,55,505" shape="poly" />
                  <area target="" onClick={selectSection} alt="SKY 자유석 6" title="SKY 자유석 6" coords="143,475,224,401,199,374,116,447" shape="poly" />
                  <area target="" onClick={selectSection} alt="SKY 지정석 4" title="SKY 지정석 4" coords="1,504,51,505,43,489,-1,489" shape="poly" />
                  <area target="" onClick={selectSection} alt="SKY 지정석 5" title="SKY 지정석 5" coords="53,500,111,448,101,437,47,486" shape="poly" />
                  <area target="" onClick={selectSection} alt="SKY 지정석 6" title="SKY 지정석 6" coords="114,445,200,371,187,361,104,434" shape="poly" />
                  <area target="" onClick={selectSection} alt="SKY 여기보존" title="SKY 여기보존" coords="0,545,19,545,18,526,2,527" shape="poly" />
                  <area target="" onClick={selectSection} alt="으뜸병원 중앙테이블석" title="으뜸병원 중앙테이블석" coords="-1,483,42,484,21,415,-1,414" shape="poly" />
                  <area target="" onClick={selectSection} alt="VIP석" title="VIP석" coords="-1,411,18,411,15,398,-1,395" shape="poly" />
                  <area target="" onClick={selectSection} alt="대구는 지브로존" title="대구는 지브로존" coords="47,480,105,425,61,375,23,410" shape="poly" />
                  <area target="" onClick={selectSection} alt="원정 응원석" title="원정 응원석" coords="109,422,178,361,108,335,65,374" shape="poly" />
                  <area target="" onClick={selectSection} alt="1루 내야지정석" title="1루 내야지정석" coords="181,358,109,330,109,281,173,219,181,222" shape="poly" />
                  <area target="" onClick={selectSection} alt="1루 익사이팅석" title="1루 익사이팅석" coords="80,356,106,333,105,284,78,306" shape="poly" />
                  <area target="" onClick={selectSection} alt="잔디석" title="잔디석" coords="233,369,233,196,216,207,214,356" shape="poly" />
                  <area target="" onClick={selectSection} alt="외야 테이블석 3" title="외야 테이블석 3" coords="72,89,80,81,63,63,18,63,18,72,55,75" shape="poly" />
                  <area target="" onClick={selectSection} alt="외야 테이블석 4" title="외야 테이블석 4" coords="171,190,88,107,96,96,179,182" shape="poly" />
                  <area target="" onClick={selectSection} alt="외야 테이블석 5" title="외야 테이블석 5" coords="143,238,175,209,167,200,138,227" shape="poly" />
                  <area target="" onClick={selectSection} alt="외야 지정석 3" title="외야 지정석 3" coords="19,110,40,110,83,152,103,134,53,85,20,84" shape="poly" />
                  <area target="" onClick={selectSection} alt="외야 지정석 4" title="외야 지정석 4" coords="87,154,144,216,165,195,106,135" shape="poly" />
                  <area target="" onClick={selectSection} alt="외야 미니테이블석 3" title="외야 미니테이블석 3" coords="71,164,37,131,19,129,20,114,39,113,80,155" shape="poly" />
                  <area target="" onClick={selectSection} alt="외야 미니테이블석 4" title="외야 미니테이블석 4" coords="130,225,74,169,83,160,143,218" shape="poly" />
                  <area target="" onClick={selectSection} alt="외야 패밀리석" title="외야 패밀리석" coords="184,160,117,90,132,74,201,144" shape="poly" />
                </map>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

          <div className='seat-body'>
            <div className='seat-body-header'>
              <span className='seat-body-title'>{showSeatName ? showSeatName + " : " : "블럭을 선택해주세요"} {sectionSelect}</span>
            </div>
            <div className='seat-body-button-container'>
              <button className='seat-body-button' onClick={toSectionDetail}>
                <span>좌석 시야 보기</span>
              </button>
              <button className='seat-body-button' onClick={toTicketing}>
                <span>예매 페이지 이동</span>
              </button>
            </div>
          </div>
      </div>
    </Wrapper>
  )
}
