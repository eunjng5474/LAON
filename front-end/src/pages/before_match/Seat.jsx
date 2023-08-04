import React, { useEffect, useRef, useState } from 'react'
import './styles/Seat.css'
import parkimg from './img/LP.png'
import ToLive from '../../components/ToLive'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import park_away from './img/LP_away.png'
import park_home from './img/LP_home.png'


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles/SwiperStyle.css";


export default function Seat() {
  const awayTeamLogo = useSelector((state) => state.awayTeamLogo)
  const homeTeamLogo = useSelector((state) => state.homeTeamLogo)
  
  // 좌석들 이름으로 받을 거라면 리스트 만들기
  // 정확하게 입력 안 해도 포함만 되면 되게끔?
  const seatNames = new Array("블루존", "지브로존", "SKY 상단지정석");
  const clickCanvasRef = useRef(null);
  const [selectSeat, setSelectSeat] = useState(null);

  const onInputBlock = (e) => {
    if(seatNames.includes(e.target.value)) {
      setSelectSeat(e.target.value);
      console.log(e.target.value);
    }
  }

  const navigate = useNavigate();

  function toSectionDetail() {
    navigate('/section', { state: selectSeat});
    // console.log(selectSeat);
  }

  function getCoordinate(event) {
    console.log(event.clientX)
    console.log(event.clientY)
    const x = event.clientX;
    const y = event.clientY;
    let section_name = '';
    if (150 <= x && x <= 185 && 330 <= y && y <= 470) {
      console.log(1)
    } else if (true) {
      console.log(2)
    }
  }

  
  useEffect(() => {
    const canvas = clickCanvasRef.current;
    const ctx = canvas.getContext('2d');

    // function drawBlock() {
    //   ctx.beginPath();
    //   ctx.moveTo(147, 181);
    //   ctx.lineTo(176, 181);
    //   ctx.lineTo(176, 331);
    //   ctx.lineTo(147, 345);
    //   ctx.lineTo(147, 325);
    //   ctx.stroke();
    //   ctx.fillStyle = 'red';
    //   ctx.fill();
    // }

    // drawBlock();
    
    
    // let circles = [new Circle(250, 250, 50)];
    // circles[0].draw();
    
    canvas.addEventListener('click', (event) => {
      setSelectSeat("블루존");
    });

  //   const clickCanvas = clickCanvasRef.current;
  //   clickCanvas.width = 500;
  //   clickCanvas.height = 500;

  })

  return (
    <div className='seat-container'>
      <div className='seat-header'>
        <h1>좌석 정보 안내</h1>
        <button onClick={toSectionDetail} >Go to Section</button>
        <ToLive/> 
      </div>
      
      <div className='swiper-container'>

      {/* <img className='seat-img' src={parkimg} alt=''/> */}

        <Swiper>
          <SwiperSlide>
            <div className='home-body'>
              <img className='park-home-img' src={park_home} alt=''/>
              <canvas onClick={getCoordinate} id="myCanvas" width="500" height="500" className='click-canvas' ref={clickCanvasRef}></canvas>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='away-body'>
              <img className='park-away-img' src={park_away} alt=''/>
            </div>
          </SwiperSlide>
        </Swiper>

        <hr />
        <div className='seat-search-bar'>
          <input type='text' onChange={onInputBlock} placeholder='좌석을 입력해 주세요'/>
        </div>
      </div>
    </div>
  )
}
