import './styles/Match.css'
import { useSelector } from 'react-redux';

import Field from './img/field.png'
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';


export default function Match() {
  const awayTeamLogo = useSelector((state) => state.awayTeamLogo)
  const homeTeamLogo = useSelector((state) => state.homeTeamLogo)
  const inningData = useSelector((state) => state.inning)
  const awayScore = useSelector((state) => state.awayScore )
  const homeScore = useSelector((state) => state.homeScore)
  let liveText = useSelector((state) => state.liveText)
  const ballCount = useSelector((state) => state.ballCount)
  const strikeCount = useSelector((state) => state.strikeCount)
  const outCount = useSelector((state) => state.outCount)

  const base1 = useSelector((state) => state.base1)
  const base2 = useSelector((state) => state.base2)
  const base3 = useSelector((state) => state.base3)

  const strikeZoneRef = useRef(null);
  const strikeZoneCountRef = useRef(null);
  const nowBallcount = 1;
  const pitchResult = 'S';

  const vy0 = -117.064;
  const ay = 21.3453;
  const y0 = 50.0;
  const x0 = -1.36354;
  const vx0 = 1.87692;
  const ax = 0.282741;
  const z0 = 5.65017;
  const vz0 = -4.94352;
  const az = -25.713;
  const crossPlateX = -0.526267;
  const crossPlateY = 1.4167;

  let t = vy0 - Math.sqrt(vy0 * vy0 - 2 * ay * (y0 - crossPlateY))
  t /= ay
  const xp = x0 + vx0 * t + ax * t * t * 0.5
  const zp = z0 + vz0 * t + az * t * t * 0.5

  // PitchId로 ptsPitchId 찾아서 해당 투구 찾아서 fillStyle 변경
    // pitchResult === 'B'이면 초록, pitchResult === 'S'이면 노랑
  // x0이 -1.얼마로 변경되고, y0가 다 50.0이라 다른 값이 좌표인지 확인해보기


  // 출루정보
  let inning = null //이닝

  if (inningData === "BEFORE"){
    inning = "경기 예정" // 이닝
    liveText = "경기 예정"
  } else if (inningData === 'END') { 
    inning = "경기 종료"
    liveText = "경기 종료"
  } else if (inningData === null) {
    console.log('로딩 중..')
  } else if (inningData[0] === "B"){
    inning = inningData[2] + "회말" // 이닝
  } else if (inningData[0] === 'T'){
    inning = inningData[2] + "회초" // 이닝
  } else if (inningData === null){
    inning = "경기종료" // 이닝
  } else {
    console.log("end")
  }

  // 볼카운트
  const divCount = function(payload) {
    const result = []
    for (let i = 0; i < payload; i++) {
      result.push(<div className='bso-circle' key={i}></div>)      
    }
    return result
  }

  useEffect(() => {
    const strikeCanvas = strikeZoneRef.current;
    strikeCanvas.width = 110;
    strikeCanvas.height = 130;
    const stZoneBallCtx = strikeCanvas.getContext("2d");

    const strikeCountCanvas = strikeZoneCountRef.current;
    strikeCountCanvas.width = 110;
    strikeCountCanvas.height = 130;
    const stZoneTextCtx = strikeCountCanvas.getContext("2d");

    console.log(xp, zp);

    function drawBall() {
      stZoneBallCtx.beginPath();
      stZoneBallCtx.moveTo(xp, zp);
      stZoneBallCtx.arc(xp, zp, 12, 0, 2 * Math.PI);
      // stZoneBallCtx.moveTo(x2, y2*2);
      // stZoneBallCtx.arc(x2, y2*2, 12, 0, 2 * Math.PI);
      stZoneBallCtx.stroke();
      if(pitchResult === 'S'){
        stZoneBallCtx.fillStyle = 'yellow';
      } else {
        stZoneBallCtx.fillStyle = 'green';
      }
      stZoneBallCtx.fill();
      
      // stZoneTextCtx.beginPath();
      // stZoneTextCtx.moveTo(x1+20, y1);
      // stZoneTextCtx.fillStyle = 'black';
      // stZoneTextCtx.font = "20px bold";
      // stZoneTextCtx.fillText(1, x1+14, y1+6);
      // stZoneTextCtx.fill();
    }

    drawBall();
  })

  return (
    <div className='match-container font'>

      <div className='match-body'>

        <div className='match-score-board'>
          <div className='match-away-team-container'>
            <img className='match-away-team' src={awayTeamLogo} alt="" />
            <h3>AWAY</h3>
          </div>
          
          <div className='score-board-center'>
            <span className='score-board-inning'>
              {inning}
            </span>
            <br />
            <span className='score-board-point'>
              {awayScore ? awayScore : 0} : {homeScore ? homeScore : 0}
            </span>
          </div>
          
          <div className='match-home-team-container'>
            <img className='match-home-team' src={homeTeamLogo} alt="" />
            <h3>HOME</h3>
          </div>
        </div>

          
        <div className='liveText'>
          <span>{liveText}</span>
        </div>

        <div className='match-live-info'>
          <div className='match-ball-count'>

            <div className='bso-container'>
              
              <div className='bso-text-container'>
                <span>B</span>
                <span>S</span>
                <span>O</span>
              </div>

              <div className='bso-circle-container'>

                <div  className='ball-circle-container'>
                  {divCount(ballCount)}
                </div>

                <div className='strike-circle-container'>
                  {divCount(strikeCount)}
                </div>

                <div className='out-circle-container'>
                  {divCount(outCount)}
                </div>

              </div>

              
            </div>

          </div>
          <div className='strike-zone-container'>
            {/* <span>스트라이크 존</span> */}
            <canvas className='strikezone-canvas' ref={strikeZoneRef}></canvas>
            <canvas className='strikezone-text-canvas' ref={strikeZoneCountRef}></canvas>
          </div>
        </div>

        <div className='match-field'>
          <div className={base1 ? 'base1t' : 'base1'}>
          </div>
          <div className={base2 ? 'base2t' : 'base2'}>
          </div>
          <div className={base3 ? 'base3t' : 'base3'}>
            <span>
            </span>
          </div>
          <img className='match-field-img' src={Field} alt="" />
        </div>

      </div>
    </div>
  )
}
