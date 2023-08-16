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
    const ballcount = 4;
    const crossPlateX = -0.542066;
    const crossPlateY = 1.4167;
    const topSz = 3.48983;
    const bottomSz = 1.5;
    const vy0 = -130.496;
    const vz0 = -4.74224;
    const vx0 = 7.18303;
    const z0 = 5.60606;
    const y0 = 50.0;
    const x0 = -2.42921;
    const ax = -11.9247;
    const ay = 25.7969;
    const az = -14.6202;
    


    const t = (-vy0 - (vy0 * vy0 - 2 * ay * (y0 - crossPlateY)) ** 0.5) / ay    
    const px = x0 + vx0 * t + ax * t * t * 0.5;
    const pz = z0 + vz0 * t + az * t * t * 0.5;
    
    stZoneBallCtx.beginPath();
    stZoneBallCtx.moveTo(55+(crossPlateX+px)*20, 110-(crossPlateX+pz)*30);
    stZoneBallCtx.arc(55+(crossPlateX+px)*20, 110-(crossPlateX+pz)*30, 8, 0, 2 * Math.PI);
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
