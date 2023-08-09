import React, { useEffect, useRef, useState } from 'react'
import './styles/Seat.css'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import park_away from './img/seat_r.png'
import park_home from './img/seat_l.png'
import roadView from './img/roadviewicon.png'
import store from '../../store/store.js';

import ImageMap from 'image-map'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Seat() {
  
  const awayTeamLogo = useSelector((state) => state.awayTeamLogo)
  const homeTeamLogo = useSelector((state) => state.homeTeamLogo)

  const [selectSeat, setSelectSeat] = useState(null); // 넘겨줄 변수(3-1 이런 식으로)
  const [showSeatName, setShowSeatName] = useState(null); // 보여줄 이름(블루존)

  // const [onClick, setOnClick] = useState(false);
  const [seatWeekdayPrice, setSeatWeekdayPrice] = useState(null);
  const [seatWeekendPrice, setSeatWeekendPrice] = useState(null);

  const navigate = useNavigate();

  const seatData = [
    {
      title: "SKY 자유석 1", seat: "BSKY1_4", weekdayPrice: "7,000", seekendPRice : "9,000"
    },
    {
      title: "SKY 자유석 2", seat: "BSKY2_3", weekdayPrice: "7,000", seekendPRice : "9,000"
    },
    {
      title: "SKY 자유석 3", seat: "BSKY3_3", weekdayPrice: "7,000", seekendPRice : "9,000"
    },
    {
      title: "SKY 자유석 4", seat: "BSKY4_3", weekdayPrice: "7,000", seekendPRice : "9,000"
    },
    {
      title: "SKY 자유석 5", seat: "BSKY5_3", weekdayPrice: "7,000", seekendPRice : "9,000"
    },
    {
      title: "SKY 자유석 6", seat: "BSKY6_3", weekdayPrice: "7,000", seekendPRice : "9,000"
    },
    {
      title: "SKY 지정석 1", seat: "BU_28_1", weekdayPrice: "8,000", seekendPRice : "10,000"
    },
    {
      title: "SKY 지정석 2", seat: "BU_22_1", weekdayPrice: "8,000", seekendPRice : "10,000"
    },
    {
      title: "SKY 지정석 3", seat: "BU_18_1", weekdayPrice: "8,000", seekendPRice : "10,000"
    },
    {
      title: "SKY 지정석 4", seat: "BU_12_1", weekdayPrice: "8,000", seekendPRice : "10,000"
    },
    {
      title: "SKY 지정석 5", seat: "BU_7_1", weekdayPrice: "8,000", seekendPRice : "10,000"
    },
    {
      title: "SKY 지정석 6", seat: "BU_3_1", weekdayPrice: "8,000", seekendPRice : "10,000"
    },
    {
      title: "SKY 여기보존", seat: "Byogibo_1", weekdayPrice: "15,000", seekendPRice : "18,000"
    },
    {
      title: "3루 내야지정석", seat: "B3_9_2", weekdayPrice: "11,000", seekendPRice : "13,000"
    },
    {
      title: "블루존", seat: "B3_5_2", weekdayPrice: "13,000", seekendPRice : "15,000"
    },
    {
      title: "지브로존", seat: "BT3_2_2", weekdayPrice: "30,000", seekendPRice : "40,000"
    },
    {
      title: "으뜸병원 중앙테이블석", seat: "BTC_2_2", weekdayPrice: "35,000", seekendPRice : "45,000"
    },
    {
      title: "3루 익사이팅석", seat: "B3E_2_1", weekdayPrice: "20,000", seekendPRice : "25,000"
    },
    {
      title: "외야 테이블석 1", seat: "BTL_0_1", weekdayPrice: "60,000/4인", seekendPRice : "72,000/4인"
    },
    {
      title: "외야 지정석 1", seat: "BLF_4_1", weekdayPrice: "8,000", seekendPRice : "10,000"
    },
    {
      title: "외야 지정석 2", seat: "BLF_8_1", weekdayPrice: "8,000", seekendPRice : "10,000"
    },
    {
      title: "외야 미니테이블석 1", seat: "BML_4_1", weekdayPrice: "24,000/2인", seekendPRice : "30,000/2인"
    },
    {
      title: "외야 미니테이블석 2", seat: "BML_8_1", weekdayPrice: "24,000/2인", seekendPRice : "30,000/2인"
    },
    {
      title: "외야 테이블석 2", seat: "BTL_9_1", weekdayPrice: "60,000/4인", seekendPRice : "72,000/4인"
    },
    {
      title: "땅땅치킨 루프탑", seat: "BROOFTOP_2", weekdayPrice: "18,000", seekendPRice : "21,000"
    },
    {
      title: "VIP석", seat: "BVIP2_1", weekdayPrice: "40,000", seekendPRice : "50,000"
    },
    {
      title: "대구는 지브로존", seat: "BT1_2_2", weekdayPrice: "30,000", seekendPRice : "40,000"
    },
    {
      title: "원정 응원석", seat: "B1_3_2", weekdayPrice: "13,000", seekendPRice : "15,000"
    },
    {
      title: "1루 내야지정석", seat: "B1_9_2", weekdayPrice: "8,000", seekendPRice : "10,000"
    },
    {
      title: "1루 익사이팅석", seat: "B1E_2_1", weekdayPrice: "20,000", seekendPRice : "25,000"
    },
    {
      title: "잔디석", seat: "BGRASS_2", weekdayPrice: "8,000", seekendPRice : "10,000"
    },
    {
      title: "외야 테이블석 3", seat: "BTR_0_1", weekdayPrice: "60,000/4인", seekendPRice : "72,000/4인"
    },
    {
      title: "외야 테이블석 4", seat: "BTR_5_1", weekdayPrice: "60,000/4인", seekendPRice : "72,000/4인"
    },
    {
      title: "외야 테이블석 5", seat: "BTR_9_1", weekdayPrice: "60,000/4인", seekendPRice : "72,000/4인"
    },
    {
      title: "외야 지정석 3", seat: "BRF_8_1", weekdayPrice: "8,000", seekendPRice : "10,000"
    },
    {
      title: "외야 지정석 4", seat: "BRF_4_1", weekdayPrice: "8,000", seekendPRice : "10,000"
    },
    {
      title: "외야 미니테이블석 3", seat: "BMR_8_1", weekdayPrice: "24,000/2인", seekendPRice : "30,000/2인"
    },
    {
      title: "외야 미니테이블석 4", seat: "BMR_4_1", weekdayPrice: "24,000/2인", seekendPRice : "30,000/2인"
    },
    {
      title: "외야 패밀리석", seat: "BF_2_1", weekdayPrice: "15,000/1인", seekendPRice : "18,000/1인"
    }
  ]


  function toSectionDetail() {
    navigate('/section', { state: selectSeat});
    // selecSeat을 섹션까지 나눠진 번호 넘겨주기 -> detail에서 imgSrc에 해당 변수값만 바꾸면 되게끔
  }

  function toTicketing() {
    window.location.href="https://m.ticketlink.co.kr/sports/137/57"
  }

  function selectSection(event) {
    console.log(event.target.title)
    // 좌표 수정하기
    // setSelectSeat("3_4_1");
    const title = event.target.title
    setShowSeatName(title);
    for (let index = 0; index < seatData.length; index++) {
      if (title === seatData[index].title) {
        const seats = seatData[index];
        console.log(seats.title);
        const seatsSeat = seats.seat
        setSelectSeat(seats.seat);
        console.log(seats.weekdayPrice)
        setSeatWeekdayPrice(seats.weekdayPrice);
        setSeatWeekendPrice(seats.seekendPRice);

        function setSeatData(seatsSeat){
          return {
            type : 'SET_SEAT_DATA',
            seatsSeat
          }
        }
        store.dispatch(setSeatData(seatsSeat))
      }
    }
  }



  useEffect(() => {
    ImageMap('img[useMap]')
  }, [])

  return (
    <div className='seat-container'>
      
      <div className='swiper-container'>
        <Swiper>
          <SwiperSlide>
            <div className='home-body'>
              <div className='home-left'>
            
              <div id='seat-home-info'>
                <div className='seat-info-header font'>
                  <span className='seat-info-header-desc'>
                    {seatWeekdayPrice ? "주중: " + seatWeekdayPrice : ""}
                  </span>
                  <span className='seat-info-header-desc'>
                    {seatWeekendPrice ? "주말 : " + seatWeekendPrice : ""} 
                  </span>
                </div>
                <div className='seat-info-footer'>
                  <button className='road-view-button font' onClick={toSectionDetail}>
                    <img className="road-view-icon" src={roadView} alt="" />
                    <span>시야 보기</span>
                  </button>
                </div>
              </div>
              <button onClick={toTicketing} className='ticket-button font'>
                  TICKET
              </button>
            </div>
            <div className='home-right'>
              <img className='park-home-img' src={park_home} usemap="#home-map"/>
            </div>

            <map name="home-map">
              <area target="" onClick={selectSection} alt="SKY 자유석 1" title="SKY 자유석 1" coords="8,200,37,201,38,370,13,399,6,392" shape="poly"/>
              <area target="" onClick={selectSection} alt="SKY 자유석 2" title="SKY 자유석 2" coords="15,401,99,476,125,452,37,376" shape="poly"/>
              <area target="" onClick={selectSection} alt="SKY 자유석 3" title="SKY 자유석 3" coords="101,479,172,545,185,508,127,453" shape="poly"/>
              <area target="" onClick={selectSection} alt="SKY 자유석 4" title="SKY 자유석 4" coords="175,543,198,544,196,527,239,524,237,507,187,506" shape="poly"/>
              <area target="" onClick={selectSection} alt="SKY 지정석 1" title="SKY 지정석 1" coords="38,203,39,367,49,358,48,202" shape="poly"/>
              <area target="" onClick={selectSection} alt="SKY 지정석 2" title="SKY 지정석 2" coords="41,374,122,449,133,437,51,364" shape="poly"/>
              <area target="" onClick={selectSection} alt="SKY 지정석 3" title="SKY 지정석 3" coords="125,449,183,502,189,487,134,441" shape="poly"/>
              <area target="" onClick={selectSection} alt="SKY 지정석 4" title="SKY 지정석 4" coords="239,506,187,506,191,490,239,492" shape="poly"/>
              <area target="" onClick={selectSection} alt="3루 내야지정석" title="3루 내야지정석" coords="55,218,54,302,128,302,126,278,63,217" shape="poly"/>
              <area target="" onClick={selectSection} alt="블루존" title="블루존" coords="55,308,56,358,129,423,173,374,128,331,125,309" shape="poly"/>
              <area target="" onClick={selectSection} alt="지브로존" title="지브로존" coords="130,427,194,480,217,411,177,378" shape="poly"/>
              <area target="" onClick={selectSection} alt="으뜸병원 중앙테이블석" title="으뜸병원 중앙테이블석" coords="238,483,200,483,221,416,239,416" shape="poly"/>
              <area target="" onClick={selectSection} alt="3루 익사이팅석" title="3루 익사이팅석" coords="159,352,130,330,133,284,161,304" shape="poly"/>
              <area target="" onClick={selectSection} alt="외야 테이블석 1" title="외야 테이블석 1" coords="96,239,105,229,72,197,61,206" shape="poly"/>
              <area target="" onClick={selectSection} alt="외야 지정석 1" title="외야 지정석 1" coords="95,213,153,154,132,134,74,194" shape="poly"/>
              <area target="" onClick={selectSection} alt="외야 지정석 2" title="외야 지정석 2" coords="155,151,197,108,218,107,219,82,188,81,135,133" shape="poly"/>
              <area target="" onClick={selectSection} alt="외야 미니테이블석 1" title="외야 미니테이블석 1" coords="109,225,165,166,156,159,101,214" shape="poly"/>
              <area target="" onClick={selectSection} alt="외야 미니테이블석 2" title="외야 미니테이블석 2" coords="171,165,203,132,221,129,222,112,202,112,163,153" shape="poly"/>
              <area target="" onClick={selectSection} alt="외야 테이블석 2" title="외야 테이블석 2" coords="222,74,190,74,191,63,222,62" shape="poly"/>
              <area target="" onClick={selectSection} alt="땅땅치킨 루프탑" title="땅땅치킨 루프탑" coords="80,133,145,69,132,58,67,120" shape="poly"/>
              <area target="" onClick={selectSection} alt="VIP석" title="VIP석" coords="222,410,239,410,240,393,224,393" shape="poly"/>
              <area target="" onClick={selectSection} alt="SKY 여기보존" title="SKY 여기보존" coords="238,543,200,544,198,527,239,529" shape="poly"/>
            </map>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='away-body'>
              <div className='away-left'>
                <img className='park-away-img' src={park_away} usemap="#away-map"/>
              </div>

              <map name="away-map">
                <area target="" onClick={selectSection} alt="SKY 자유석 4" title="SKY 자유석 4" coords="1,508,50,507,69,547,17,545,17,527,-1,525" shape="poly"/>
                <area target="" onClick={selectSection} alt="SKY 자유석 5" title="SKY 자유석 5" coords="71,543,139,479,112,451,55,505" shape="poly"/>
                <area target="" onClick={selectSection} alt="SKY 자유석 6" title="SKY 자유석 6" coords="143,475,224,401,199,374,116,447" shape="poly"/>
                <area target="" onClick={selectSection} alt="SKY 지정석 4" title="SKY 지정석 4" coords="1,504,51,505,43,489,-1,489" shape="poly"/>
                <area target="" onClick={selectSection} alt="SKY 지정석 5" title="SKY 지정석 5" coords="53,500,111,448,101,437,47,486" shape="poly"/>
                <area target="" onClick={selectSection} alt="SKY 지정석 6" title="SKY 지정석 6" coords="114,445,200,371,187,361,104,434" shape="poly"/>
                <area target="" onClick={selectSection} alt="SKY 여기보존" title="SKY 여기보존" coords="0,545,19,545,18,526,2,527" shape="poly"/>
                <area target="" onClick={selectSection} alt="으뜸병원 중앙테이블석" title="으뜸병원 중앙테이블석" coords="-1,483,42,484,21,415,-1,414" shape="poly"/>
                <area target="" onClick={selectSection} alt="VIP석" title="VIP석" coords="-1,411,18,411,15,398,-1,395" shape="poly"/>
                <area target="" onClick={selectSection} alt="대구는 지브로존" title="대구는 지브로존" coords="47,480,105,425,61,375,23,410" shape="poly"/>
                <area target="" onClick={selectSection} alt="원정 응원석" title="원정 응원석" coords="109,422,178,361,108,335,65,374" shape="poly"/>
                <area target="" onClick={selectSection} alt="1루 내야지정석" title="1루 내야지정석" coords="181,358,109,330,109,281,173,219,181,222" shape="poly"/>
                <area target="" onClick={selectSection} alt="1루 익사이팅석" title="1루 익사이팅석" coords="80,356,106,333,105,284,78,306" shape="poly"/>
                <area target="" onClick={selectSection} alt="잔디석" title="잔디석" coords="233,369,233,196,216,207,214,356" shape="poly"/>
                <area target="" onClick={selectSection} alt="외야 테이블석 3" title="외야 테이블석 3" coords="72,89,80,81,63,63,18,63,18,72,55,75" shape="poly"/>
                <area target="" onClick={selectSection} alt="외야 테이블석 4" title="외야 테이블석 4" coords="171,190,88,107,96,96,179,182" shape="poly"/>
                <area target="" onClick={selectSection} alt="외야 테이블석 5" title="외야 테이블석 5" coords="143,238,175,209,167,200,138,227" shape="poly"/>
                <area target="" onClick={selectSection} alt="외야 지정석 3" title="외야 지정석 3" coords="19,110,40,110,83,152,103,134,53,85,20,84" shape="poly"/>
                <area target="" onClick={selectSection} alt="외야 지정석 4" title="외야 지정석 4" coords="87,154,144,216,165,195,106,135" shape="poly"/>
                <area target="" onClick={selectSection} alt="외야 미니테이블석 3" title="외야 미니테이블석 3" coords="71,164,37,131,19,129,20,114,39,113,80,155" shape="poly"/>
                <area target="" onClick={selectSection} alt="외야 미니테이블석 4" title="외야 미니테이블석 4" coords="130,225,74,169,83,160,143,218" shape="poly"/>
                <area target="" onClick={selectSection} alt="외야 패밀리석" title="외야 패밀리석" coords="184,160,117,90,132,74,201,144" shape="poly"/>
              </map>
              <div className='away-right'>
                <button onClick={toTicketing} className='ticket-button font'>
                  TICKET
                </button>
                <div id='seat-away-info'>
                  <div className='seat-info-header font'>
                    {/* <span className='seat-info-header-title'>
                      {showSeatName}
                    </span> */}
                    <span className='seat-info-header-desc'>
                      {seatWeekdayPrice ? "주중: " + seatWeekdayPrice : ""}
                    </span>
                    <span className='seat-info-header-desc'>
                      {seatWeekendPrice ? "주말 : " + seatWeekendPrice : ""} 
                    </span>
                  </div>
                  <div className='seat-info-footer'>
                    <button className='road-view-button font' onClick={toSectionDetail}>
                      <img className="road-view-icon" src={roadView} alt="" />
                      <span>시야 보기</span>
                    </button>
                  </div>
                </div>
                
              </div>


            </div>
          </SwiperSlide>
        </Swiper>
      </div>


      {selectSeat && 
        <div className='seat-body'>
          
        </div>
      }
    </div>
  )
}
