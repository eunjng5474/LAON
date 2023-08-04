import './styles/Match.css'
import { useSelector } from 'react-redux';

import Field from './img/field.png'
import { Link } from 'react-router-dom';


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
  } else {
    inning = "경기종료" // 이닝
    nowBase1 = null
    nowBase2 = null
    nowBase3 = null
  }

  // 볼카운트
  const divCount = function(payload) {
    const result = []
    for (let i = 0; i < payload; i++) {
      result.push(<div className='bso-circle' key={i}></div>)      
    }
    return result
  }

  return (
    <div className='match-container'>

      <div className='match-header'>
        <Link to="/facilities">
          <h3 className='match-link'>시설 안내</h3>
        </Link>
        <h1>스코어 보드</h1>
        <Link to="/seat">
          <h3 className='match-link'>좌석 안내</h3>
        </Link>
      </div>

      <div className='match-body'>

        <div className='match-score-board'>
          <div className='match-away-team-container'>
            <img className='match-away-team' src={awayTeamLogo} alt="" />
            {/* (임시 앰뷸럼) 나중에 백에서 사진 받으면 심볼 로고로 교체 할 예정 */}
            <h3>AWAY</h3>
          </div>

          <div className='score-board-center'>
            <span className='score-board-inning'>{inning}</span>
            <span className='score-board-point'>{awayScore} | {homeScore}</span>
            {/* 실시간 점수 변경 */}
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
          
          <div className=''>
            <h1>{liveText}</h1>
          </div>

        </div>

        {/* 이닝에 따른 값(선수번호) 잘 확인 */}
        <div className='match-field'>
          <div className='base1'>
            <span>
              {nowBase1}
            </span>
          </div>
          <div className='base2'>
            <span>
              {nowBase2}
            </span>
          </div>
          <div className='base3'>
            <span>
              {nowBase3}
            </span>
          </div>
          <img className='match-field-img' src={Field} alt="" />
        </div>

      </div>
    </div>
  )
}
