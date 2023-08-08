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

  function toSectionDetail() {
    navigate('/section', { state: selectSeat});
    // selecSeat을 섹션까지 나눠진 번호 넘겨주기 -> detail에서 imgSrc에 해당 변수값만 바꾸면 되게끔
  }

  function selectSection(event) {
  console.log(event.target.title)
  // 좌표 수정하기
  setSelectSeat("3_4_1");
  setShowSeatName(event.target.title);
  setSeatWeekdayPrice("13,000");
  setSeatWeekendPrice("15,000");
  }

  function showAR() {
    window.location.href = '/ar/ar.html'
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
              
              <button className='ar-on'>
                  <span className='font'>
                    {showSeatName ? showSeatName : "블럭을 선택하세요"} 
                    <br />
                    주중: {seatWeekdayPrice}
                    <br />
                    주말: {seatWeekendPrice} 
                  </span>
                  <br />
                  <br />
                  <span onClick={toSectionDetail} className='font'>시야 보러 가기</span>
                  <br />
                  <Link to="https://m.ticketlink.co.kr/sports/137/57" className='font'>예매 하러 가기</Link>
              </button>

              <img className='park-home-img' src={park_home} usemap="#home-map"/>

              <map name="home-map">
              <area target="" onClick={selectSection} alt="SKY 자유석" title="SKY 자유석" coords="8,201,37,202,37,371,13,396,6,395" shape="poly"/>
                <area target="" onClick={selectSection} alt="SKY 자유석" title="SKY 자유석" coords="13,399,97,477,124,451,38,372" shape="poly"/>
                <area target="" onClick={selectSection} alt="SKY 자유석" title="SKY 자유석" coords="125,453,101,477,169,542,185,507" shape="poly"/>
                <area target="" onClick={selectSection} alt="SKY 자유석" title="SKY 자유석" coords="239,508,186,508,175,546,199,546,198,525,239,526" shape="poly"/>
                <area target="" onClick={selectSection} alt="SKY 지정석" title="SKY 지정석" coords="40,203,49,203,48,355,40,363" shape="poly"/>
                <area target="" onClick={selectSection} alt="SKY 지정석" title="SKY 지정석" coords="50,363,41,372,125,446,133,438" shape="poly"/>
                <area target="" onClick={selectSection} alt="SKY 지정석" title="SKY 지정석" coords="126,450,137,441,188,486,185,502" shape="poly"/>
                <area target="" onClick={selectSection} alt="SKY 지정석" title="SKY 지정석" coords="195,489,237,489,237,504,187,505,192,495" shape="poly"/>
                <area target="" onClick={selectSection} alt="3루 내야지정석" title="3루 내야지정석" coords="55,302,130,304,128,278,65,217,54,215" shape="poly"/>
                <area target="" onClick={selectSection} alt="블루존" title="블루존" coords="54,306,130,307,130,332,175,373,129,424,54,358" shape="poly"/>
                <area target="" onClick={selectSection} alt="지브로존" title="지브로존" coords="178,376,131,427,194,481,219,411,209,403" shape="poly"/>
                <area target="" onClick={selectSection} alt="으뜸병원 중앙테이블석" title="으뜸병원 중앙테이블석" coords="200,484,239,483,239,415,222,413" shape="poly"/>
                <area target="" onClick={selectSection} alt="3루 익사이팅석" title="3루 익사이팅석" coords="134,282,133,331,160,353,161,305" shape="poly"/>
                <area target="" onClick={selectSection} alt="외야 테이블석" title="외야 테이블석" coords="191,74,219,75,218,62,192,61" shape="poly"/>
                <area target="" onClick={selectSection} alt="외야 지정석" title="외야 지정석" coords="137,131,189,79,221,81,220,109,201,107,157,151,145,141" shape="poly"/>
                <area target="" onClick={selectSection} alt="외야 지정석" title="외야 지정석" coords="76,193,96,214,153,155,133,136" shape="poly"/>
                <area target="" onClick={selectSection} alt="외야 미니테이블석" title="외야 미니테이블석" coords="100,215,109,225,167,167,157,157" shape="poly"/>
                <area target="" onClick={selectSection} alt="외야 미니테이블석" title="외야 미니테이블석" coords="169,163,204,128,218,127,221,113,201,111,160,152" shape="poly"/>
                <area target="" onClick={selectSection} alt="외야 테이블석" title="외야 테이블석" coords="191,74,219,75,218,62,192,61" shape="poly"/>
                <area target="" onClick={selectSection} alt="땅땅치킨 루프탑" title="땅땅치킨 루프탑" coords="77,134,145,71,132,57,65,120" shape="poly"/>
                <area target="" onClick={selectSection} alt="VIP석" title="VIP석" coords="223,409,237,411,236,401,225,399" shape="poly"/>
                <area target="" onClick={selectSection} alt="여기보존" title="여기보존" coords="239,544,201,545,200,528,239,526" shape="poly"/>
                <area target="" onClick={selectSection} alt="파티플로어석" title="파티플로어석" coords="98,239,63,206,72,196,108,230" shape="poly"/>

            </map>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='away-body'>
            <img className='park-away-img' src={park_away} usemap="#away-map"/>

            <map name="away-map">
            <area target="" onClick={selectSection} alt="SKY 자유석" title="SKY 자유석" coords="143,476,224,399,200,372,116,448" shape="poly"/>
                <area target="" onClick={selectSection} alt="SKY 자유석" title="SKY 자유석" coords="71,544,140,480,113,452,54,506" shape="poly"/>
                <area target="" onClick={selectSection} alt="SKY 자유석" title="SKY 자유석" coords="18,544,67,546,51,506,-1,508,0,524,16,526" shape="poly"/>
                <area target="" onClick={selectSection} alt="SKY 지정석" title="SKY 지정석" coords="52,504,-1,502,-1,489,43,490" shape="poly"/>
                <area target="" onClick={selectSection} alt="SKY 지정석" title="SKY 지정석" coords="115,446,199,372,191,358,103,436" shape="poly"/>
                <area target="" onClick={selectSection} alt="SKY 지정석" title="SKY 지정석" coords="111,447,55,500,48,488,99,439" shape="poly"/>
                <area target="" onClick={selectSection} alt="으뜸병원 중앙테이블석" title="으뜸병원 중앙테이블석" coords="-1,483,43,484,19,414,0,415" shape="poly"/>
                <area target="" onClick={selectSection} alt="VIP석" title="VIP석" coords="0,412,17,412,15,401,0,400" shape="poly"/>
                <area target="" onClick={selectSection} alt="대구는 지브로존" title="대구는 지브로존" coords="23,411,46,480,108,426,63,375" shape="poly"/>
                <area target="" onClick={selectSection} alt="원정 응원석" title="원정 응원석" coords="111,425,175,362,107,335,65,371" shape="poly"/>
                <area target="" onClick={selectSection} alt="1루 내야지정석" title="1루 내야지정석" coords="111,330,179,356,180,221,173,219,109,280" shape="poly"/>
                <area target="" onClick={selectSection} alt="1루 익사이팅석" title="1루 익사이팅석" coords="79,356,107,332,104,284,79,306" shape="poly"/>
                <area target="" onClick={selectSection} alt="잔디석" title="잔디석" coords="233,373,234,195,214,207,216,359" shape="poly"/>
                <area target="" onClick={selectSection} alt="외야 테이블석" title="외야 테이블석" coords="144,237,175,209,168,199,137,228" shape="poly"/>
                <area target="" onClick={selectSection} alt="외야 테이블석" title="외야 테이블석" coords="170,189,178,180,97,98,90,105" shape="poly"/>
                <area target="" onClick={selectSection} alt="외야 테이블석" title="외야 테이블석" coords="71,88,79,81,61,64,19,62,19,72,54,72" shape="poly"/>
                <area target="" onClick={selectSection} alt="외야 지정석" title="외야 지정석" coords="143,212,163,195,106,138,86,154" shape="poly"/>
                <area target="" onClick={selectSection} alt="외야 지정석" title="외야 지정석" coords="82,150,101,134,51,84,18,82,19,109,40,109" shape="poly"/>
                <area target="" onClick={selectSection} alt="외야 미니테이블석" title="외야 미니테이블석" coords="129,226,139,217,84,160,75,168" shape="poly"/>
                <area target="" onClick={selectSection} alt="외야 미니테이블석" title="외야 미니테이블석" coords="69,162,77,155,39,114,20,112,20,128,35,128" shape="poly"/>
                <area target="" onClick={selectSection} alt="외야 패밀리석" title="외야 패밀리석" coords="115,89,183,159,198,147,131,76" shape="poly"/>
                <area target="" onClick={selectSection} alt="여기보존" title="여기보존" coords="-1,543,18,547,19,528,-1,528" shape="poly"/>
            </map>

            <button className='ar-on'>
                <span className='font'>
                  {showSeatName ? showSeatName : "블럭을 선택하세요"} 
                  <br />
                  주중: {seatWeekdayPrice}
                  <br />
                  주말: {seatWeekendPrice} 
                </span>
                <br />
                <br />
                <span onClick={toSectionDetail} className='font'>시야 보러 가기</span>
                <Link to="https://m.ticketlink.co.kr/sports/137/57" className='font'>예매 하러 가기</Link>
            </button>

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
