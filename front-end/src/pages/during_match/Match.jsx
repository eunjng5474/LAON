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



export default function Match() {
  const awayTeamName = useSelector((state) => state.awayTeamName)
  const awayTeamLogo = useSelector((state) => state.awayTeamLogo)
  const homeTeamLogo = useSelector((state) => state.homeTeamLogo)
  const inningData = useSelector((state) => state.inning)
  const awayScore = useSelector((state) => state.awayScore )
  const homeScore = useSelector((state) => state.homeScore)
  let liveText = useSelector((state) => state.liveText)
  const ballCount = useSelector((state) => state.ballCount)
  const strikeCount = useSelector((state) => state.strikeCount)
  const outCount = useSelector((state) => state.outCount)
  const gameDate = useSelector((state) => state.gameDate)
  const gameStatus = useSelector((state) => state.gameStatus)

  const base1 = useSelector((state) => state.base1)
  const base2 = useSelector((state) => state.base2)
  const base3 = useSelector((state) => state.base3)

  const stZoneRef = useRef(null);
  const stZoneRectRef = useRef(null);
  
  
  const [t, setT] = useState('');
  const [px, setPx] = useState('');
  const [pz, setPz] = useState('');
  const [ballSpeed, setBallSpeed] = useState('');
  const [ballStuff, setBallStuff] = useState('');

  const [prevPx, setPrevPx] = useState('')
  const [prevPz, setPrevPz] = useState('')

  const [ballPositions, setBallPositions] = useState([]);

  // const nowBallcount = 1;
  // const pitchResult = 'S';


  // 출루정보
  let inning = null //이닝
  let homeAttack = false;  // 홈 공격 여부
  let awayAttack = false;  // 어웨이 공격 여부

  if (inningData === "BEFORE"){
    inning = "경기 예정" // 이닝
    liveText = `${gameDate.substr(4, 2)}월 ${gameDate.substr(6, 2)}일 경기 예정입니다`
  } else if (inningData === 'END') { 
    inning = "경기 종료"
    liveText = "경기가 종료되었습니다"
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
  const divCountBall = function(payload) {
    const result = []
    for (let i = 0; i < payload; i++) {
      result.push(<div className='bso-circle' key={i}></div>)      
    }
    for(let j = 0; j < 3 - payload; j++) {
      result.push(<div className='no-bso-circle' key={j}></div>)      
    }
    return result
  }

  const divCountSO = function(payload) {
    const result = []
    for (let i = 0; i < payload; i++) {
      result.push(<div className='bso-circle' key={i}></div>)      
    }
    for(let j = 0; j < 2 - payload; j++) {
      result.push(<div className='no-bso-circle' key={j}></div>)      
    }
    return result
  }


  function getStrikeZone(e) {
    axios.get(`https://laon.info/api/lions/strike_zone/20230815/${awayTeamName}/${inning[0]}`)
    .then((res) => {
      console.log(res.data)
      if(res.data){
        setPrevPx(px)
        setPrevPz(pz)

        const newT = (-res.data["vy0"] - (res.data["vy0"] * res.data["vy0"] - 2 * res.data["ay"] * (res.data["y0"] - res.data["crossPlateY"])) ** 0.5) / res.data["ay"]
        const newPx = res.data["x0"] + res.data["vx0"] * t + res.data["ax"] * t * t * 0.5
        const newPz = res.data["z0"] + res.data["vz0"] * t + res.data["az"] * t * t * 0.5

        if(prevPx !== px && prevPz !== pz){

          setT(newT)
          setPx(newPx)
          setPz(newPz)
          setBallSpeed(res.data.speed);
          setBallStuff(res.data.stuff);
          setBallPositions([...ballPositions, { px: newPx, pz: newPz }])
        }
      } 
      // else {
      //   setT('');
      //   setPx('');
      //   setPz('');
      //   setBallSpeed('');
      //   setBallStuff('');
      // }
    })
  }

  if (gameStatus === 'PLAY'){
    // getStrikeZone()
    const getStzone = setInterval(getStrikeZone, 5000)
    // setTimeout(() => {
    //   const getDrawBall = setInterval(drawBall, 5000)
    // }, 100)
  } 

  // const strikeCanvas = stZoneRef.current;
  // strikeCanvas.width = 110;
  // strikeCanvas.height = 130;
  // const stZoneBallCtx = strikeCanvas.getContext("2d");


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




    
  // px, pz 변경될 때만 그리도록? 
  function drawBall() {
    const strikeCanvas = stZoneRef.current;
    strikeCanvas.width = 110;
    strikeCanvas.height = 130;
    const stZoneBallCtx = strikeCanvas.getContext("2d");

    console.log(ballStuff, ballSpeed, px, pz)
    // if(!px && !pz){
    //   return
    // }
    // if(prevPx !== px){
    //   stZoneBallCtx.clearRect(0, 0, strikeRectCanvas.width, strikeRectCanvas.height)
    // }
    ballPositions.forEach((position) => {
      stZoneBallCtx.beginPath();
      stZoneBallCtx.moveTo(60-position.px*25, 155-position.pz*25);
      stZoneBallCtx.arc(60-position.px*25, 155-position.pz*25, 8, 0, 2 * Math.PI);
      stZoneBallCtx.stroke();
      stZoneBallCtx.fillStyle = '#7DB249';
      stZoneBallCtx.fill();
      
    })
    
    stZoneBallCtx.beginPath();
    stZoneBallCtx.moveTo(60 - px * 25, 155 - pz * 25);
    stZoneBallCtx.arc(60-px*25, 155-pz*25, 8, 0, 2 * Math.PI);
    stZoneBallCtx.stroke();
    // 4
    stZoneBallCtx.fillStyle = '#7DB249';
    // if(pitchResult === 'S'){
    //   stZoneBallCtx.fillStyle = '#FFCD4A';
    // } else {
    //   stZoneBallCtx.fillStyle = '#7DB249';
    // }
    stZoneBallCtx.fill();

  }


    drawBall();
  }, [t, px, pz])

  return (
    <div className='match-container font'>

      <div className='match-body'>

        <div className='match-score-board'>
          <div className='match-away-team-container'>
            <img className='match-away-team' src={awayTeamLogo} alt="" />
            <div className='match-away-info'>
              <h3>AWAY</h3>
            </div>
          </div>
          
          <div className='score-board-center'>
            <div className='score-board-inning'>
              {inning}
            </div>
            <div className='score-board-point'>
              {awayScore ? awayScore : 0} : {homeScore ? homeScore : 0}
              <div className='score-board-attack'>
                <div className={ awayAttack ? 'match-attack-circle' : 'match-non-attack-circle' }></div>
                <div className={ homeAttack ? 'match-attack-circle' : 'match-non-attack-circle' }></div>
              </div>
            </div>
          </div>
          
          <div className='match-home-team-container'>
            <img className='match-home-team' src={homeTeamLogo} alt="" />
            <div className='match-home-info'>
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
                  {divCountBall(ballCount)}
                </div>

                <div className='strike-circle-container'>
                  {divCountSO(strikeCount)}
                </div>

                <div className='out-circle-container'>
                  {divCountSO(outCount)}
                </div>

              </div>
            </div>

          </div>
          <div className='strike-zone-container'>
            {/* <span>스트라이크 존</span> */}
            <canvas className='strikezone-canvas' ref={stZoneRef}></canvas>
            <canvas className='strikezone-rect-canvas' ref={stZoneRectRef}></canvas>
          </div>
        </div>

        <div className='match-field'>
          <div className='base1'>
            {base1 ? <img src={base13Yes}/> : <img src={base13No}/>}
          </div>
          <div className='base2'>
            {base2 ? <img src={base2Yes}/> : <img src={base2No}/>}
          </div>
          <div className='base3'>
            {base3 ? <img src={base13Yes}/> : <img src={base13No}/>}
          </div>
          <img className='match-field-img' src={fieldImg} alt="" />
        </div>

      </div>
    </div>
  )
}
