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
import { PiSpeakerSimpleNoneFill } from 'react-icons/pi'



export default function Test() {
  const awayTeamName = useSelector((state) => state.awayTeamName)
  const awayTeamLogo = useSelector((state) => state.awayTeamLogo)
  const homeTeamLogo = useSelector((state) => state.homeTeamLogo)
  const [inningData, setInningData] = useState('');
  const [awayScore, setAwayScore] = useState('');
  const [homeScore, setHomeScore] = useState('');
  const [liveText, setLiveText] = useState('');
  const [ballCount, setBallCount] = useState('');
  const [strikeCount, setStrikeCount] = useState('');
  const [outCount, setOutCount] = useState('');
  const [ballNum, setBallNum] = useState('');

  const [base1, setBase1] = useState('');
  const [base2, setBase2] = useState('');
  const [base3, setBase3] = useState('');


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



  // 출루정보
  let inning = null //이닝
  let homeAttack = false;  // 홈 공격 여부
  let awayAttack = false;  // 어웨이 공격 여부

  if (inningData === "BEFORE"){
    inning = "경기 예정" // 이닝
    // liveText = `${gameDate.substr(4, 2)}월 ${gameDate.substr(6, 2)}일 경기 예정입니다`
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
      result.push(<div className='bso-circle' key={`test-bso` + i}></div>)      
    }
    for(let j = 0; j < 3 - payload; j++) {
      result.push(<div className='no-bso-circle' key={`test-no-bso` + j}></div>)      
    }
    return result
  }



  const divCountSO = function(payload) {
    const result = []
    for (let i = 0; i < payload; i++) {
      result.push(<div className='bso-circle' key={`test-bso` + i}></div>)      
    }
    for(let j = 0; j < 2 - payload; j++) {
      result.push(<div className='no-bso-circle' key={`test-no-bso` + j}></div>)      
    }
    return result
  }


  


  useEffect(() => {
    // axios.get(`https://laon.info/test/reset`)

    const strikeCanvas = stZoneRef.current;
    strikeCanvas.width = 110;
    strikeCanvas.height = 130;
    const stZoneBallCtx = strikeCanvas.getContext("2d");

    function drawBall(px, pz) {
      console.log('그리기')
      console.log(ballStuff, ballSpeed, px, pz)

      // 이전 공들 녹색으로 그리기
      ballPositions.forEach((position) => {
        stZoneBallCtx.beginPath();
        stZoneBallCtx.moveTo(55-position.px*15, 150-position.pz*10);
        stZoneBallCtx.arc(55-position.px*20, 150-+position.pz*10, 8, 0, 2 * Math.PI);
        stZoneBallCtx.stroke();
        stZoneBallCtx.fillStyle = '#7DB249';
        stZoneBallCtx.fill();
        console.log('p:', position)
      })

      stZoneBallCtx.beginPath();
      stZoneBallCtx.moveTo(55 -px*15, 150-pz*10);
      stZoneBallCtx.arc(55 -px*20, 150-pz*10, 8, 0, 2 * Math.PI);
      stZoneBallCtx.stroke();
      stZoneBallCtx.fillStyle = '#FFCF69';
      stZoneBallCtx.fill();
    }


    function getStrikeZone() {
      axios.get(`https://laon.info/test`)
      .then((res) => {
        console.log(res.data)
  
        if(res.data){
          if (res.data.text.includes('번타자') || res.data.text.includes('홈런')) {
            stZoneBallCtx.clearRect(0, 0, strikeCanvas.width, strikeCanvas.height)
          }

          setInningData(res.data.periodType)
          setAwayScore(res.data.awayScore)
          setHomeScore(res.data.homeScore)
          setLiveText(res.data.text)
          setBallCount(res.data.ball)
          setStrikeCount(res.data.strike)
          setOutCount(res.data.out)
          setBase1(res.data.base1)
          setBase2(res.data.base2)
          setBase3(res.data.base3)
  
          setBallSpeed(res.data.speed)
          setBallStuff(res.data.sutff)
          setBallNum(res.data.ballcount)

          setPrevPx(px)
          setPrevPz(pz)
  
          const newT = (-Number(res.data["vy0"]) - (Number(res.data["vy0"]) * Number(res.data["vy0"]) - 2 * Number(res.data["ay"]) * (Number(res.data["y0"]) - Number(res.data["crossPlateY"]))) ** 0.5) / Number(res.data["ay"])
          const newPx = Number(res.data["x0"]) + Number(res.data["vx0"]) * newT + Number(res.data["ax"]) * newT * newT * 0.5 + Number(res.data["crossPlateX"])
          const newPz = Number(res.data["z0"]) + Number(res.data["vz0"]) * newT + Number(res.data["az"]) * newT * newT * 0.5 + Number(res.data["z0"])
  
          if(px !== newPx || pz !== newPz){
            setT(newT)
            setPx(newPx)
            setPz(newPz)
            setBallPositions([...ballPositions, { px: newPx, pz: newPz }])
          }
          
          if (newPx && newPz) {
            drawBall(newPx, newPz);
          }
        }
      })
    }



    // if (gameStatus === 'PLAY'){
      getStrikeZone()
      if ( !liveText.includes('홈런')) {
        const getStzone = setInterval(getStrikeZone, 3000)
      }

      // return () => {
      //   clearInterval(getStzone);
      // }
    // } 

    const strikeRectCanvas = stZoneRectRef.current;
    strikeRectCanvas.width = 110;
    strikeRectCanvas.height = 130;
    const stZoneRectCtx = strikeRectCanvas.getContext("2d");

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
    // drawBall();
     
  },[])

  // useEffect(() => {
    // const strikeCanvas = stZoneRef.current;
    // strikeCanvas.width = 110;
    // strikeCanvas.height = 130;
    // const stZoneBallCtx = strikeCanvas.getContext("2d");

  //   function drawBall() {

  //     console.log(ballStuff, ballSpeed, px, pz)


  //     // 타자 바뀌면 ballPositions 초기화하기!!!!!!!!!!!!
  //     if(ballNum === 1){
  //       setBallPositions([]);
  //     }

  //     // 이전 공들 녹색으로 그리기
  //     ballPositions.forEach((position) => {
  //       stZoneBallCtx.beginPath();
  //       stZoneBallCtx.moveTo(55-position.px*10, 65+position.pz*10);
  //       stZoneBallCtx.arc(55-position.px*10, 65+position.pz*10, 8, 0, 2 * Math.PI);
  //       stZoneBallCtx.stroke();
  //       stZoneBallCtx.fillStyle = '#7DB249';
  //       stZoneBallCtx.fill();
  //     })

  //     console.log(ballPositions)

  //     stZoneBallCtx.beginPath();
  //     stZoneBallCtx.moveTo(55 -px*10, 65+pz*10);
  //     stZoneBallCtx.arc(55 -px*10, 65+pz*10, 8, 0, 2 * Math.PI);
  //     stZoneBallCtx.stroke();
  //     stZoneBallCtx.fillStyle = 'red';
  //     stZoneBallCtx.fill();
  // }
  // if(gameStatus === 'PLAY'){
    
  // drawBall();
  // }

  // }, [t, px, pz])



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
          <PiSpeakerSimpleNoneFill size={30}/>
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
