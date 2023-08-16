import './styles/Match.css'
import { useSelector } from 'react-redux';

import Field from './img/field.png';
import fieldImg from './img/lapark3.jpg';
import base13Yes from './img/base13_yes.png';
import base13No from './img/base13_no.png';
import base2Yes from './img/base2_yes.png';
import base2No from './img/base2_no.png';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';



export default function Test() {
  
  const stZoneRef = useRef(null);
  const stZoneRectRef = useRef(null);

  useEffect(() => {

    const strikeRectCanvas = stZoneRectRef.current;
    strikeRectCanvas.width = 110;
    strikeRectCanvas.height = 130;
    const stZoneRectCtx = strikeRectCanvas.getContext("2d");
    // console.log(px, pz);

    function drawZone() {
      stZoneRectCtx.beginPath();
      stZoneRectCtx.strokeStyle = "white";
      stZoneRectCtx.lineWidth = 0.7;
      stZoneRectCtx.strokeRect(25, 32, 60, 66);
      stZoneRectCtx.moveTo(45, 32);
      stZoneRectCtx.lineTo(45, 98);
      stZoneRectCtx.moveTo(65, 32);
      stZoneRectCtx.lineTo(65, 98);
      stZoneRectCtx.moveTo(25, 54);
      stZoneRectCtx.lineTo(85, 54);
      stZoneRectCtx.moveTo(25, 76);
      stZoneRectCtx.lineTo(85, 76);
      stZoneRectCtx.stroke();
      stZoneRectCtx.fill();
    }

    drawZone();
     
  },[])

  useEffect(() => {
    const strikeCanvas = stZoneRef.current;
    strikeCanvas.width = 110;
    strikeCanvas.height = 130;
    const stZoneBallCtx = strikeCanvas.getContext("2d");

  function drawBall() {
    const ballcount = 2;
    const crossPlateX = 0.806934;
    const crossPlateY = 1.4167;
    const topSz = 3.67483;
    const bottomSz = 1.64555;
    const vy0 = -131.642;
    const vz0 = -10.5243;
    const vx0 = 6.25119;
    const z0 = 6.04097;
    const y0 = 50.0;
    const x0 = -1.50738;
    const ax = -1.2529;
    const ay = 28.4536;
    const az = -11.2004;
    
    
    


    const t = (-vy0 - (vy0 * vy0 - 2 * ay * (y0 - crossPlateY)) ** 0.5) / ay    
    const px = x0 + vx0 * t + ax * t * t * 0.5;
    const pz = z0 + vz0 * t + az * t * t * 0.5;

    console.log(ballcount, ': ', crossPlateX+px, pz)
    
    stZoneBallCtx.beginPath();
    stZoneBallCtx.moveTo(55+(x0+px)*20, 50+(z0+pz)*20);
    // stZoneBallCtx.arc(55+(x0+px)*10, 50+(z0+pz)*10, 8, 0, 2 * Math.PI);
    stZoneBallCtx.arc(55-(crossPlateX+px)*20, 65+(crossPlateY+pz)*20, 8, 0, 2 * Math.PI);
    stZoneBallCtx.stroke();

    stZoneBallCtx.fillStyle = 'red';
    stZoneBallCtx.fill();

  }

    drawBall();

  }, [])


  return (
    <div className='match-container font'>

      <div className='match-body'>



        <div className='match-live-info'>

          <div className='strike-zone-container'>
            {/* <span>스트라이크 존</span> */}
            <canvas className='strikezone-canvas' ref={stZoneRef}></canvas>
            <canvas className='strikezone-rect-canvas' ref={stZoneRectRef}></canvas>
          </div>
        </div>


      </div>
    </div>
  )
}
