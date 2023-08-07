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

  const stZoneRef = useRef(null);
  const stZoneRectRef = useRef(null);
  const nowBallcount = 1;
  const pitchResult = 'S';

  const crossPlateX1 = -0.526267
  const crossPlateY1 = 1.4167
  const topSz1 = 3.40393
  const bottomSz1 = 1.42926
  const vy01 = -117.064
  const vz01 = -4.94352
  const vx01 = 1.87692
  const z01 = 5.65017
  const y01 = 50.0
  const x01 = -1.36354
  const ax1 = 0.282741
  const ay1 = 21.3453
  const az1 = -25.713

  const crossPlateX2 = -0.449976
  const crossPlateY2 = 1.4167
  const topSz2 = 3.40393
  const bottomSz2 = 1.42926
  const vy02 = -130.023
  const vz02 = -8.43999
  const vx02 = 4.22331
  const z02 = 5.43352
  const y02 = 50.0
  const x02 = -1.14148
  const ax2 = -12.5548
  const ay2 = 29.7531
  const az2 = -12.9796

  let t1 = -vy01 - Math.sqrt(vy01 * vy01 - 2 * ay1 * (y01 - crossPlateY1))
  t1 /= ay1
  const xp1 = x01 + vx01 * t1 + ax1 * t1 * t1 * 0.5
  const zp1 = z01 + vz01 * t1 + az1 * t1 * t1 * 0.5

  let t2 = -vy02 - Math.sqrt(vy02 * vy02 - 2 * ay2 * (y02 - crossPlateY2))
  t2 /= ay2
  const xp2 = x02 + vx02 * t2 + ax2 * t2 * t2 * 0.5
  const zp2 = z02 + vz02 * t2 + az2 * t2 * t2 * 0.5

  // // calculate pitch movement(pfx_x, pfx_z)
  // let t40 = -df['vy0'] - np.sqrt(df['vy0'] * df['vy0'] - 2 * df['ay'] * (df['y0'] - 40))
  // t40 /= df['ay']
  // x40 = df['x0'] + df['vx0'] * t40 + 0.5 * df['ax'] * t40 * t40
  // vx40 = df['vx0'] + df['ax'] * t40
  // z40 = df['z0'] + df['vz0'] * t40 + 0.5 * df['az'] * t40 * t40
  // vz40 = df['vz0'] + df['az'] * t40
  // th = t - t40
  // x_no_air = x40 + vx40 * th
  // z_no_air = z40 + vz40 * th - 0.5 * 32.174 * th * th
  // df['pfx_x'] = np.round((xp - x_no_air) * 12, 5)
  // df['pfx_z'] = np.round((zp - z_no_air) * 12, 5)


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
    const strikeCanvas = stZoneRef.current;
    strikeCanvas.width = 110;
    strikeCanvas.height = 130;
    const stZoneBallCtx = strikeCanvas.getContext("2d");

    const strikeRectCanvas = stZoneRectRef.current;
    strikeRectCanvas.width = 110;
    strikeRectCanvas.height = 130;
    const stZoneRectCtx = strikeRectCanvas.getContext("2d");

    console.log(xp1, zp1);

    function drawBall() {
      stZoneBallCtx.beginPath();
      stZoneBallCtx.moveTo(xp1*30+55, zp1*30+65);
      stZoneBallCtx.arc(xp1*30+55, zp1*30+65, 12, 0, 2 * Math.PI);
      
      stZoneBallCtx.moveTo(xp2*30+55, zp2*30+65);
      stZoneBallCtx.arc(xp2*30+55, zp2*30+65, 12, 0, 2 * Math.PI);
      // stZoneBallCtx.moveTo(-1.14148*-10, 5.43352*10);
      // stZoneBallCtx.arc(-1.14148*-10, 5.43352*10, 12, 0, 2 * Math.PI);
      stZoneBallCtx.stroke();
      if(pitchResult === 'S'){
        stZoneBallCtx.fillStyle = 'yellow';
      } else {
        stZoneBallCtx.fillStyle = 'green';
      }
      stZoneBallCtx.fill();
      
      stZoneRectCtx.beginPath();
      stZoneRectCtx.moveTo(24, 24);
      stZoneRectCtx.strokeStyle = "white";
      stZoneRectCtx.strokeRect(24, 24, 62, 82);
      stZoneRectCtx.stroke();
      // stZoneRectCtx.fill();
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
            <canvas className='strikezone-canvas' ref={stZoneRef}></canvas>
            <canvas className='strikezone-text-canvas' ref={stZoneRectRef}></canvas>
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
