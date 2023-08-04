import './styles/Match.css'
import { useSelector } from 'react-redux';

import Field from './img/field.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


export default function Match() {
  const awayTeamLogo = useSelector((state) => state.awayTeamLogo)
  const homeTeamLogo = useSelector((state) => state.homeTeamLogo)
  const inningData = useSelector((state) => state.inning)
  const awayScore = useSelector((state) => state.awayScore )
  const homeScore = useSelector((state) => state.homeScore)
  const liveText = useSelector((state) => state.liveText)
  const ballCount = useSelector((state) => state.ballCount)
  const strikeCount = useSelector((state) => state.strikeCount)
  const outCount = useSelector((state) => state.outCount)
  const homeNowBase1 = useSelector((state) => state.homeNowBase1)
  const homeNowBase2 = useSelector((state) => state.homeNowBase2)
  const homeNowBase3 = useSelector((state) => state.homeNowBase3)
  const awayNowBase1 = useSelector((state) => state.awayNowBase1)
  const awayNowBase2 = useSelector((state) => state.awayNowBase2)
  const awayNowBase3 = useSelector((state) => state.awayNowBase3)

  const base1 = useSelector((state) => state.base1)
  const base2 = useSelector((state) => state.base2)
  const base3 = useSelector((state) => state.base3)
  console.log(base1, base2, base3)

  // 출루정보
  let nowBase1 = null
  let nowBase2 = null
  let nowBase3 = null
  let inning = null //이닝

  if (inningData === "BEFORE"){
    inning = "경기예정" // 이닝
    nowBase1 = null
    nowBase2 = null
    nowBase3 = null
  } else if (inningData === 'END') { 
    inning = "경기종료"
    nowBase1 = null
    nowBase2 = null
    nowBase3 = null
  } else if (inningData === null) {
    console.log('로딩 중..')
  } else if (inningData[0] === "B"){
    inning = inningData[2] + "회말" // 이닝
    nowBase1 = homeNowBase1
    nowBase2 = homeNowBase2
    nowBase3 = homeNowBase3
  } else if (inningData[0] === 'T'){
    inning = inningData[2] + "회초" // 이닝
    nowBase1 = awayNowBase1
    nowBase2 = awayNowBase2
    nowBase3 = awayNowBase3
  } else if (inningData === null){
    inning = "경기종료" // 이닝
    nowBase1 = null
    nowBase2 = null
    nowBase3 = null
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

  })

  return (
    <div className='match-container font'>

      <div className='match-header'>
        {/* <Link to="/facilities">
          <h3 className='match-link'>시설 안내</h3>
        </Link>
        <h1>스코어 보드</h1>
        <Link to="/seat">
          <h3 className='match-link'>좌석 안내</h3>
        </Link> */}
      </div>

      <div className='match-body'>

        <div className='match-score-board'>
          <div className='match-away-team-container'>
            <img className='match-away-team' src={awayTeamLogo} alt="" />
            <h3>AWAY</h3>
          </div>
          
          <div className='score-board-center'>
            <span className='score-board-inning'>{inning}</span>
            <span className='score-board-point'>{awayScore} | {homeScore}</span>
          </div>
          
          <div className='match-home-team-container'>
            <img className='match-home-team' src={homeTeamLogo} alt="" />
            <h3>HOME</h3>
          </div>
        </div>

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
          
          <div className='liveText'>
            <h2>{liveText}</h2>
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
