import React, { useEffect, useRef, useState } from 'react'
import './styles/Seat.css'
import parkimg from './img/LP.png'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import park_away from './img/LP_away.png'
import park_away from './img/seat_r.png'
// import park_home from './img/LP_home.png'
import park_home from './img/seat_l.png'

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
      title: "SKY 자유석 1", seat: "SKY자유석1 4", weekdayPrice: "7,000", seekendPRice : "9,000"
    },
    {
      title: "SKY 자유석 2", seat: "SKY자유석2 3", weekdayPrice: "7,000", seekendPRice : "9,000"
    },
    {
      title: "SKY 자유석 3", seat: "SKY자유석3 3", weekdayPrice: "7,000", seekendPRice : "9,000"
    },
    {
      title: "SKY 자유석 4", seat: "SKY자유석4 3", weekdayPrice: "7,000", seekendPRice : "9,000"
    },
    {
      title: "SKY 자유석 5", seat: "SKY자유석5 3", weekdayPrice: "7,000", seekendPRice : "9,000"
    },
    {
      title: "SKY 자유석 6", seat: "SKY자유석6 3", weekdayPrice: "7,000", seekendPRice : "9,000"
    },
    {
      title: "SKY 지정석 1", seat: "U-28 1", weekdayPrice: "8,000", seekendPRice : "10,000"
    },
    {
      title: "SKY 지정석 2", seat: "U-22 1", weekdayPrice: "8,000", seekendPRice : "10,000"
    },
    {
      title: "SKY 지정석 3", seat: "U-18 1", weekdayPrice: "8,000", seekendPRice : "10,000"
    },
    {
      title: "SKY 지정석 4", seat: "U-12 1", weekdayPrice: "8,000", seekendPRice : "10,000"
    },
    {
      title: "SKY 지정석 5", seat: "U-7 1", weekdayPrice: "8,000", seekendPRice : "10,000"
    },
    {
      title: "SKY 지정석 6", seat: "U-3 1", weekdayPrice: "8,000", seekendPRice : "10,000"
    },
    {
      title: "3루 내야지정석", seat: "3-9 2", weekdayPrice: "11,000", seekendPRice : "13,000"
    },
    {
      title: "블루존", seat: "3-5 2", weekdayPrice: "13,000", seekendPRice : "15,000"
    },
    {
      title: "지브로존", seat: "T3-2 2", weekdayPrice: "30,000", seekendPRice : "40,000"
    },
    {
      title: "으뜸병원 중앙테이블석", seat: "TC-2 2", weekdayPrice: "35,000", seekendPRice : "45,000"
    },
    {
      title: "3루 익사이팅석", seat: "3E-2 1", weekdayPrice: "20,000", seekendPRice : "25,000"
    },
    {
      title: "외야 테이블석 1", seat: "TL-0 1", weekdayPrice: "60,000/4인", seekendPRice : "72,000/4인"
    },
    {
      title: "외야 지정석 1", seat: "LF-4 1", weekdayPrice: "8,000", seekendPRice : "10,000"
    },
    {
      title: "외야 지정석 2", seat: "LF-8 1", weekdayPrice: "8,000", seekendPRice : "10,000"
    },
    {
      title: "외야 미니테이블석 1", seat: "ML-4 1", weekdayPrice: "24,000/2인", seekendPRice : "30,000/2인"
    },
    {
      title: "외야 미니테이블석 2", seat: "ML-8 1", weekdayPrice: "24,000/2인", seekendPRice : "30,000/2인"
    },
    {
      title: "외야 테이블석 2", seat: "TL-9 1", weekdayPrice: "60,000/4인", seekendPRice : "72,000/4인"
    },
    {
      title: "땅땅치킨 루프탑", seat: "루프탑 2", weekdayPrice: "18,000", seekendPRice : "21,000"
    },
    {
      title: "VIP석", seat: "VIP2 1", weekdayPrice: "40,000", seekendPRice : "50,000"
    },
    {
      title: "대구는 지브로존", seat: "T1-2 2", weekdayPrice: "30,000", seekendPRice : "40,000"
    },
    {
      title: "원정 응원석", seat: "1-3 2", weekdayPrice: "13,000", seekendPRice : "15,000"
    },
    {
      title: "1루 내야지정석", seat: "1-9 2", weekdayPrice: "8,000", seekendPRice : "10,000"
    },
    {
      title: "1루 익사이팅석", seat: "1E-2 1", weekdayPrice: "20,000", seekendPRice : "25,000"
    },
    {
      title: "잔디석", seat: "잔디석 2", weekdayPrice: "8,000", seekendPRice : "10,000"
    },
    {
      title: "외야 테이블석 3", seat: "TR-0 1", weekdayPrice: "60,000/4인", seekendPRice : "72,000/4인"
    },
    {
      title: "외야 테이블석 4", seat: "TR-5 1", weekdayPrice: "60,000/4인", seekendPRice : "72,000/4인"
    },
    {
      title: "외야 테이블석 5", seat: "TR-9 1", weekdayPrice: "60,000/4인", seekendPRice : "72,000/4인"
    },
    {
      title: "외야 지정석 3", seat: "RF-8 1", weekdayPrice: "8,000", seekendPRice : "10,000"
    },
    {
      title: "외야 지정석 4", seat: "RF-4 1", weekdayPrice: "8,000", seekendPRice : "10,000"
    },
    {
      title: "외야 미니테이블석 3", seat: "MR-8 1", weekdayPrice: "24,000/2인", seekendPRice : "30,000/2인"
    },
    {
      title: "외야 미니테이블석 4", seat: "MR-4 1", weekdayPrice: "24,000/2인", seekendPRice : "30,000/2인"
    },
    {
      title: "외야 패밀리석", seat: "F-2 1", weekdayPrice: "15,000/1인", seekendPRice : "18,000/1인"
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
        setSelectSeat(seats.seat);
        console.log(seats.weekdayPrice)
        setSeatWeekdayPrice(seats.weekdayPrice);
        setSeatWeekendPrice(seats.seekendPRice);
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
                  <span className='seat-info-header-title'>
                    {showSeatName ? showSeatName : "블럭 선택하기"}
                  </span>
                  <span className='seat-info-header-desc'>
                    {seatWeekdayPrice ? "주중: " + seatWeekdayPrice : ""}
                  </span>
                  <span className='seat-info-header-desc'>
                    {seatWeekendPrice ? "주말 : " + seatWeekendPrice : ""} 
                  </span>
                </div>
                <div className='seat-info-footer'>
                  <button className='font' onClick={toSectionDetail}>
                    VIEW
                  </button>
                </div>
              </div>
              <button onClick={toTicketing} className='ticket-button font'>
                  TICKET
              </button>
            </div>

            <img className='park-home-img' src={park_home} usemap="#home-map"/>

            <map name="home-map">
              <area target="" onClick={selectSection} alt="SKY 자유석 1" title="SKY 자유석 1" coords="172,461,159,497,221,497,221,461" shape="poly"/>
              <area target="" onClick={selectSection} alt="SKY 자유석 2" title="SKY 자유석 2" coords="169,459,156,495,90,434,114,409" shape="poly"/>
              <area target="" onClick={selectSection} alt="SKY 자유석 3" title="SKY 자유석 3" coords="35,340,112,409,89,433,13,363" shape="poly"/>
              <area target="" onClick={selectSection} alt="SKY 자유석 4" title="SKY 자유석 4" coords="6,182,33,182,33,339,12,362,5,356" shape="poly"/>
              <area target="" onClick={selectSection} alt="SKY 지정석 1" title="SKY 지정석 1" coords="35,182,46,182,46,325,35,337" shape="poly"/>
              <area target="" onClick={selectSection} alt="SKY 지정석 2" title="SKY 지정석 2" coords="37,338,47,327,123,397,114,407" shape="poly"/>
              <area target="" onClick={selectSection} alt="SKY 지정석 3" title="SKY 지정석 3" coords="115,408,125,398,174,443,170,457" shape="poly"/>
              <area target="" onClick={selectSection} alt="SKY 지정석 4" title="SKY 지정석 4" coords="176,444,171,458,221,458,221,444" shape="poly"/>
              <area target="" onClick={selectSection} alt="3루 내야지정석" title="3루 내야지정석" coords="50,195,60,195,118,252,118,275,50,275" shape="poly"/>
              <area target="" onClick={selectSection} alt="블루존" title="블루존" coords="50,278,118,278,118,300,160,339,118,385,50,325" shape="poly"/>
              <area target="" onClick={selectSection} alt="지브로존" title="지브로존" coords="120,387,162,341,200,372,178,438" shape="poly"/>
              <area target="" onClick={selectSection} alt="으뜸병원 중앙테이블석" title="으뜸병원 중앙테이블석" coords="203,376,221,376,221,439,182,439" shape="poly"/>
              <area target="" onClick={selectSection} alt="3루 익사이팅석" title="3루 익사이팅석" coords="122,253,122,300,148,324,148,275" shape="poly"/>
              <area target="" onClick={selectSection} alt="외야 테이블석 1" title="외야 테이블석 1" coords="57,187,67,178,99,207,89,217" shape="poly"/>
              <area target="" onClick={selectSection} alt="외야 지정석 1" title="외야 지정석 1" coords="69,175,88,194,142,140,122,122" shape="poly"/>
              <area target="" onClick={selectSection} alt="외야 지정석 2" title="외야 지정석 2" coords="124,120,144,138,183,99,203,99,203,73,171,73" shape="poly"/>
              <area target="" onClick={selectSection} alt="외야 미니테이블석 1" title="외야 미니테이블석 1" coords="90,196,100,206,154,150,143,141" shape="poly"/>
              <area target="" onClick={selectSection} alt="외야 미니테이블석 2" title="외야 미니테이블석 2" coords="146,140,155,148,186,116,203,116,203,101,184,101" shape="poly"/>
              <area target="" onClick={selectSection} alt="외야 테이블석 2" title="외야 테이블석 2" coords="173,56,173,66,203,66,203,56" shape="poly"/>
              <area target="" onClick={selectSection} alt="땅땅치킨 루프탑" title="땅땅치킨 루프탑" coords="58,110,74,125,135,66,120,51" shape="poly"/>
              <area target="" onClick={selectSection} alt="VIP석" title="VIP석" coords="206,362,203,374,221,374,221,362" shape="poly"/>
            </map>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='away-body'>
            <img className='park-away-img' src={park_away} usemap="#away-map"/>

            <map name="away-map">
              <area target="" onClick={selectSection} alt="SKY 자유석 4" title="SKY 자유석 4" coords="0,497,63,497,49,459,-1,460" shape="poly"/>
              <area target="" onClick={selectSection} alt="SKY 자유석 5" title="SKY 자유석 5" coords="51,459,65,495,130,435,105,409" shape="poly"/>
              <area target="" onClick={selectSection} alt="SKY 자유석 6" title="SKY 자유석 6" coords="107,407,132,434,208,363,184,338" shape="poly"/>
              <area target="" onClick={selectSection} alt="SKY 지정석 4" title="SKY 지정석 4" coords="49,457,43,443,0,444,0,458" shape="poly"/>
              <area target="" onClick={selectSection} alt="SKY 지정석 5" title="SKY 지정석 5" coords="95,396,104,407,50,456,44,442" shape="poly"/>
              <area target="" onClick={selectSection} alt="SKY 지정석 6" title="SKY 지정석 6" coords="96,395,105,406,184,336,173,325" shape="poly"/>
              <area target="" onClick={selectSection} alt="으뜸병원 중앙테이블석" title="으뜸병원 중앙테이블석" coords="39,438,19,375,0,376,0,437" shape="poly"/>
              <area target="" onClick={selectSection} alt="VIP석" title="VIP석" coords="20,373,17,362,0,362,0,373" shape="poly"/>
              <area target="" onClick={selectSection} alt="대구는 지브로존" title="대구는 지브로존" coords="23,373,43,436,100,385,59,341" shape="poly"/>
              <area target="" onClick={selectSection} alt="원정 응원석" title="원정 응원석" coords="61,339,101,302,164,327,101,383" shape="poly"/>
              <area target="" onClick={selectSection} alt="1루 내야지정석" title="1루 내야지정석" coords="101,300,101,253,166,194,165,325" shape="poly"/>
              <area target="" onClick={selectSection} alt="1루 익사이팅석" title="1루 익사이팅석" coords="73,277,73,324,98,301,98,255" shape="poly"/>
              <area target="" onClick={selectSection} alt="잔디석" title="잔디석" coords="198,188,217,171,217,341,198,325" shape="poly"/>
              <area target="" onClick={selectSection} alt="외야 테이블석 3" title="외야 테이블석 3" coords="125,208,132,217,163,188,155,180" shape="poly"/>
              <area target="" onClick={selectSection} alt="외야 테이블석 4" title="외야 테이블석 4" coords="157,172,166,163,90,88,82,97" shape="poly"/>
              <area target="" onClick={selectSection} alt="외야 테이블석 5" title="외야 테이블석 5" coords="68,82,77,73,59,56,18,56,18,66,53,67" shape="poly"/>
              <area target="" onClick={selectSection} alt="외야 지정석 3" title="외야 지정석 3" coords="19,74,49,74,97,122,78,140,39,99,19,99" shape="poly"/>
              <area target="" onClick={selectSection} alt="외야 지정석 4" title="외야 지정석 4" coords="81,141,100,123,151,176,132,195" shape="poly"/>
              <area target="" onClick={selectSection} alt="외야 미니테이블석 3" title="외야 미니테이블석 3" coords="19,102,38,102,77,142,67,151,35,118,19,118" shape="poly"/>
              <area target="" onClick={selectSection} alt="외야 미니테이블석 4" title="외야 미니테이블석 4" coords="68,152,78,143,131,196,121,206" shape="poly"/>
              <area target="" onClick={selectSection} alt="외야 패밀리석" title="외야 패밀리석" coords="107,81,170,145,184,130,121,65" shape="poly"/>
            </map>
            <div className='away-right'>
              <button onClick={toTicketing} className='ticket-button font'>
                TICKET
              </button>
              <div id='seat-away-info'>
                <div className='seat-info-header font'>
                  <span className='seat-info-header-title'>
                    {showSeatName ? showSeatName : "블럭 선택하기"}
                  </span>
                  <span className='seat-info-header-desc'>
                    {seatWeekdayPrice ? "주중: " + seatWeekdayPrice : ""}
                  </span>
                  <span className='seat-info-header-desc'>
                    {seatWeekendPrice ? "주말 : " + seatWeekendPrice : ""} 
                  </span>
                </div>
                <div className='seat-info-footer'>
                  <button className='font' onClick={toSectionDetail}>
                    VIEW    
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
