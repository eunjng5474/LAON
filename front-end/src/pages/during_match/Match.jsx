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

  // 
  const crossPlateX = -0.347363
  const crossPlateY = 1.4167
  const topSz = 3.48983
  const bottomSz = 1.5
  const vy0 = -130.945
  const vz0 = -4.46333
  const vx0 = 3.86331
  const z0 = 5.64619
  const y0 = 50.0
  const x0 = -0.979984
  const ax = -11.5091
  const ay = 29.6069
  const az = -13.4183


  const t = (-vy0 - (vy0 * vy0 - 2 * ay * (y0 - crossPlateY)) ** 0.5) / ay

  const t40 = (-vy0 - (vy0 * vy0 - 2 * ay * (y0 - 40)) ** 0.5) / ay
  const x40 = x0 + vx0 * t40 + 0.5 * ax * t40 * t40
  const vx40 = vx0 + ax * t40
  const z40 = z0 + vz0 * t40 + 0.5 * az * t40 * t40
  const vz40 = vz0 + az * t40
  const th = t - t40
  const x_no_air = x40 + vx40 * th
  const z_no_air = z40 + vz40 * th - 0.5 * 32.174 * th * th
  const z_no_induced = z0 + vz0 * t

  const px = x0 + vx0 * t + ax * t * t * 0.5
  const pz = z0 + vz0 * t + az * t * t * 0.5

  const pfx_x = (px - x_no_air) * 12
  const pfx_z = (pz - z_no_air) * 12
  const pfx_x_raw = px * 12


  //
  const crossPlateX1 = -0.162813
  const crossPlateY1 = 1.4167
  const topSz1 = 3.48983
  const bottomSz1 = 1.5
  const vy01 = -120.509
  const vz01 = -5.87157
  const vx01 = 4.87711
  const z01 = 5.35805
  const y01 = 50.0
  const x01 = -1.1247
  const ax1 = -12.3174
  const ay1 = 23.4603
  const az1 = -22.8599


  const t1 = (-vy01 - (vy01 * vy01 - 2 * ay1 * (y01 - crossPlateY1)) ** 0.5) / ay1

  const t401 = (-vy01 - (vy01 * vy01 - 2 * ay1 * (y01 - 40)) ** 0.5) / ay1
  const x401 = x01 + vx01 * t401 + 0.5 * ax1 * t401 * t401
  const vx401 = vx01 + ax1 * t401
  const z401 = z01 + vz01 * t401 + 0.5 * az1 * t401 * t401
  const vz401 = vz01 + az1 * t401
  const th1 = t1 - t401
  const x_no_air1 = x401 + vx401 * th1
  const z_no_air1 = z401 + vz401 * th1 - 0.5 * 32.174 * th1 * th1
  const z_no_induced1 = z01 + vz01 * t1

  const px1 = x01 + vx01 * t1 + ax1 * t1 * t1 * 0.5
  const pz1 = z01 + vz01 * t1 + az1 * t1 * t1 * 0.5

  const pfx_x1 = (px1 - x_no_air1) * 12
  const pfx_z1 = (pz1 - z_no_air1) * 12
  const pfx_x_raw1 = px1 * 12

  
  //
  const crossPlateX2 = -0.804936
  const crossPlateY2 = 1.4167
  const topSz2 = 3.48983
  const bottomSz2 = 1.5
  const vy02 = -128.109
  const vz02 = -4.67211
  const vx02 = 3.7303
  const z02 = 5.5469
  const y02 = 50.0
  const x02 = -1.54272
  const ax2 = -9.43036
  const ay2 = 26.4627
  const az2 = -14.8042


  const t2 = (-vy02 - (vy02 * vy02 - 2 * ay2 * (y02 - crossPlateY2)) ** 0.5) / ay2

  const t402 = (-vy02 - (vy02 * vy02 - 2 * ay2 * (y02 - 40)) ** 0.5) / ay2
  const x402 = x02 + vx02 * t402 + 0.5 * ax2 * t402 * t402
  const vx402 = vx02 + ax2 * t402
  const z402 = z02 + vz02 * t402 + 0.5 * az2 * t402 * t402
  const vz402 = vz02 + az2 * t402
  const th2 = t2 - t402
  const x_no_air2 = x402 + vx402 * th2
  const z_no_air2 = z402 + vz402 * th2 - 0.5 * 32.174 * th2 * th2
  const z_no_induced2 = z02 + vz02 * t

  const px2 = x02 + vx02 * t2 + ax2 * t2 * t2 * 0.5
  const pz2 = z02 + vz02 * t2 + az2 * t2 * t2 * 0.5

  const pfx_x2 = (px2 - x_no_air2) * 12
  const pfx_z2 = (pz2 - z_no_air2) * 12
  const pfx_x_raw2 = px2 * 12





  // let t1 = -vy01 - Math.sqrt(vy01 * vy01 - 2 * ay1 * (y01 - crossPlateY1))
  // t1 /= ay1
  // const xp1 = x01 + vx01 * t1 + ax1 * t1 * t1 * 0.5
  // const zp1 = z01 + vz01 * t1 + az1 * t1 * t1 * 0.5

  // let t2 = -vy02 - Math.sqrt(vy02 * vy02 - 2 * ay2 * (y02 - crossPlateY2))
  // t2 /= ay2
  // const xp2 = x02 + vx02 * t2 + ax2 * t2 * t2 * 0.5
  // const zp2 = z02 + vz02 * t2 + az2 * t2 * t2 * 0.5

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
  let homeAttack = false;  // 홈 공격 여부
  let awayAttack = false;  // 어웨이 공격 여부

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
    homeAttack = true;
  } else if (inningData[0] === 'T'){
    inning = inningData[2] + "회초" // 이닝
    awayAttack = true;
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

    console.log('4: ', pfx_x, pfx_z);
    console.log('2: ', pfx_x1, pfx_z1);
    console.log('1: ', pfx_x2, pfx_z2);
    console.log(t, t1, t2);

    function drawBall() {
      stZoneBallCtx.beginPath();
      // 4
      stZoneBallCtx.moveTo(pfx_x, pfx_z);
      stZoneBallCtx.arc(pfx_x, pfx_z, 12, 0, 2 * Math.PI);
      // 2 
      stZoneBallCtx.moveTo(pfx_x1, pfx_z1);
      stZoneBallCtx.arc(pfx_x1, pfx_z1, 12, 0, 2 * Math.PI);
      // 1
      stZoneBallCtx.moveTo(pfx_x2, pfx_z2);
      stZoneBallCtx.arc(pfx_x2, pfx_z2, 12, 0, 2 * Math.PI);

      
      // stZoneBallCtx.moveTo(xp2*30+55, zp2*30+65);
      // stZoneBallCtx.arc(xp2*30+55, zp2*30+65, 12, 0, 2 * Math.PI);
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
            <div className='match-away-info'>
              <h3>AWAY</h3>
              <div className={ awayAttack ? 'match-attack-circle' : 'match-non-attack-circle' }></div>
            </div>
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
            <div className='match-home-info'>
              <div className={ homeAttack ? 'match-attack-circle' : 'match-non-attack-circle' }></div>
              <h3>HOME</h3>
            </div>
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
