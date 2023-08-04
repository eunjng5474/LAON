import { Routes, Route } from 'react-router-dom';

import './App.css'
import axios from 'axios';
import store from "./store/store"

import Landing from './pages/landing/Landing';
import Seat from './pages/before_match/Seat';
import SectionDetail from './pages/before_match/SectionDetail';
import Match from './pages/during_match/Match';
import Facilities from './pages/during_match/Facilities';
import Navigation from './pages/during_match/Navigation';
import { useSelector } from 'react-redux';

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const formattedDate = `${year}${String(month).padStart(2, "0")}${String(day).padStart(2, "0")}`;

function getData() {

  axios.get(`https://sports.daum.net/prx/hermes/api/game/schedule.json?leagueCode=kbo&seasonKey=2023`)
   .then((res) => {

        const today = new Date();
        const todayMonth = today.getMonth() + 1;
        const todayDay = today.getDate();
        var target;
        var number;

        loop: for (let date in res.data.schedule) {
          let month = date.substring(4, 6);
          let day = date.substring(6);

          if (month >= todayMonth && day >= todayDay) {
            for (let game in res.data.schedule[date]) {
              if (res.data.schedule[date][game].fieldName === '대구 삼성 라이온즈 파크') {
                const gameId = res.data.schedule[date][game].gameId
                function setGameId(gameId){
                  return {
                    type : 'SET_MATCH',
                    gameId
                  }
                }
                store.dispatch(setGameId(gameId))
                
                const awayTeamLogo = res.data.schedule[date][game].awayTeamImageUrl
                function setAwayTeamLogo(awayTeamLogo){
                  return {
                    type : 'SET_AWAY_TEAM_LOGO',
                    awayTeamLogo
                  }
                }
                store.dispatch(setAwayTeamLogo(awayTeamLogo))

                const homeTeamLogo = res.data.schedule[date][game].homeTeamImageUrl
                function setHomeTeamLogo(homeTeamLogo){
                  return {
                    type : 'SET_HOME_TEAM_LOGO',
                    homeTeamLogo
                  }
                }
                store.dispatch(setHomeTeamLogo(homeTeamLogo))

                target = date;
                number = game;

                axios.get(`https://sports.daum.net/prx/hermes/api/game/get.json?gameId=${gameId}&detail=liveData`)
                .then((res) => {
                  const gameStatus = res.data.gameStatus
                  function setStatus(gameStatus){
                    return {
                      type : 'SET_STATUS',
                      gameStatus
                    }
                  }
                  store.dispatch(setStatus(gameStatus))

                  const inning = res.data.periodType
                  function setInning(inning){
                    return {
                      type : 'SET_INNING',
                      inning
                    }
                  }
                  store.dispatch(setInning(inning))

                  // 점수
                  const awayScore = res.data.away.result
                  function setAwayScore(awayScore){
                    return {
                      type : 'SET_AWAY_SCORE',
                      awayScore
                    }
                  }
                  store.dispatch(setAwayScore(awayScore))

                  const homeScore = res.data.home.result
                  function setHomeScore(homeScore){
                    return {
                      type : 'SET_HOME_SCORE',
                      homeScore
                    }
                  }
                  store.dispatch(setHomeScore(homeScore))
                  
                  // 문자 중계
                  for (let i=0; i < res.data.liveData.liveText.length; i++){
                    const liveText = res.data.liveData.liveText[i].text
                    function setLiveText(liveText){
                      return {
                        type : 'SET_LIVETEXT',
                        liveText
                      }
                    }
                    store.dispatch(setLiveText(liveText))
                  }
                
                  // 볼카운트
                  const ballCount = res.data.liveData.ground.ball
                  const strikeCount = res.data.liveData.ground.strike
                  const outCount = res.data.liveData.ground.out
                  
                  function setBallCount(ballCount){
                    return {
                      type : 'SET_BALL_COUNT',
                      ballCount
                    }
                  }
                  function setOutCount(outCount){
                    return {
                      type : 'SET_OUT_COUNT',
                      outCount
                    }
                  }
                  function setStrikeCount(strikeCount){
                    return {
                      type : 'SET_STRIKE_COUNT',
                      strikeCount
                    }
                  }

                  store.dispatch(setBallCount(ballCount))
                  store.dispatch(setOutCount(outCount))
                  store.dispatch(setStrikeCount(strikeCount))

                  const base1 = res.data.liveData.ground.base1
                  const base2 = res.data.liveData.ground.base2
                  const base3 = res.data.liveData.ground.base3
                  function setBase1(base1){
                  return {
                    type : 'SET_BASE1_COUNT',
                    base1
                  }
                }
                store.dispatch(setBase1(base1))
                function setBase2(base2){
                  return {
                    type : 'SET_BASE2_COUNT',
                    base2
                  }
                }
                store.dispatch(setBase2(base2))
                function setBase3(base3){
                  return {
                    type : 'SET_BASE3_COUNT',
                    base3
                  }
                }
                store.dispatch(setBase3(base3))
                })
                .catch(err => {
                  console.log(err)
                })
                break loop;
              }
            }
          }
        }
        
       }
   )
   .catch((error) => {
     console.log(error)
   })
 }


function App() {
  const gameStatus = useSelector((state) => state.gameStatus)
  getData()
  if (gameStatus === 'PLAY'){
    const reGetData = setInterval(getData, 2000)
  }

  return (
        <Routes>
          <Route path="/" element={ <Landing/> } />
          <Route path="/seat" element={ <Seat/> } />
          <Route path="/section" element={ <SectionDetail/> } />
          <Route path="/match" element={ <Match/> } />
          <Route path="/facilities" element={ <Facilities/> } />
          <Route path="/navigation" element={ <Navigation/> } />
        </Routes>
  );
}

export default App;