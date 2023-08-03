import React from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
import './styles/Landing.css'
import store from '../../store/store'
import { Link, useNavigate } from 'react-router-dom'

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const formattedHours = String(hours).padStart(2, "0");
const formattedMinutes = String(minutes).padStart(2, "0");
const formattedDate = `${year}${String(month).padStart(2, "0")}${String(day).padStart(2, "0")}`;
const formattedTime = `${formattedHours}${formattedMinutes}`;

function getData() {

 axios.get(`https://sports.daum.net/prx/hermes/api/game/schedule.json?leagueCode=kbo&seasonKey=2023&Date=${formattedDate}`)
  .then((res) => {
    for (let i = 0; i < res.data.schedule[formattedDate].length; i++) {
      if (res.data.schedule[formattedDate][i].fieldName === '포항야구장') {
        const gameId = res.data.schedule[formattedDate][i].gameId
        function setMatch(gameId){
          return {
            type : 'SET_MATCH',
            gameId
          }
        }
        store.dispatch(setMatch(gameId))

        // 상대팀 awayTeamName
        const awayTeamName = res.data.schedule[formattedDate][i].awayTeamName
        function setAwayTeamName(awayTeamName){
          return {
            type : 'SET_AWAY_TEAM_NAME',
            awayTeamName
          }
        }
        store.dispatch(setAwayTeamName(awayTeamName))

        // awayTeam Logo
        const awayTeamLogo = res.data.schedule[formattedDate][i].awayTeamImageUrl
        function setAwayTeamLogo(awayTeamLogo){
          return {
            type : 'SET_AWAY_TEAM_LOGO',
            awayTeamLogo
          }
        }
        store.dispatch(setAwayTeamLogo(awayTeamLogo))
        
        // homeTeam Logo
        const homeTeamLogo = res.data.schedule[formattedDate][i].homeTeamImageUrl
        function setHomeTeamLogo(homeTeamLogo){
          return {
            type : 'SET_HOME_TEAM_LOGO',
            homeTeamLogo
          }
        }
        store.dispatch(setHomeTeamLogo(homeTeamLogo))

        axios.get(`https://sports.daum.net/prx/hermes/api/game/get.json?gameId=${gameId}&detail=liveData`)
        .then((res) => {
          // console.log(res.data)
          // 게임 상태
          const gameStatus = res.data.gameStatus
          function setStatus(gameStatus){
            return {
              type : 'SET_STATUS',
              gameStatus
            }
          }
          store.dispatch(setStatus(gameStatus))

          ///// Match
          // 이닝
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

          // 출루정보
          
          const base1 = res.data.liveData.ground.base1
          const base2 = res.data.liveData.ground.base2
          const base3 = res.data.liveData.ground.base3

          if (inning[0] === "B"){
            const homePerson = res.data.homePerson
            for (let i=0; i < res.data.homePerson.length; i++){
              const homeBattingOrder = homePerson[i].battingOrder
              if (base1 === homePerson[i].cpPersonId){
                const homeNowBase1 = homeBattingOrder
                function setHomeBase1(homeNowBase1){
                  return {
                    type : "SET_HOME_BASE1",
                    homeNowBase1
                  }
                }
                store.dispatch(setHomeBase1(homeNowBase1))
              }
              else if (base2 === homePerson[i].cpPersonId){
                const homeNowBase2 = homeBattingOrder
                function setHomeBase2(homeNowBase2){
                  return {
                    type : "SET_HOME_BASE2",
                    homeNowBase2
                  }
                }
                store.dispatch(setHomeBase2(homeNowBase2))
              }
              else if (base3 === homePerson[i].cpPersonId){
                const homeNowBase3 = homeBattingOrder
                function setHomeBase3(homeNowBase3){
                  return {
                    type : "SET_HOME_BASE2",
                    homeNowBase3
                  }
                }
                store.dispatch(setHomeBase3(homeNowBase3))
              }
            }
          } else if (inning[0] === "T"){
            const awayPerson = res.data.awayPerson
            for (let i=0; i < res.data.awayPerson.length; i++){
              const awayBattingOrder = awayPerson[i].battingOrder
              if (base1 === awayPerson[i].cpPersonId){
                const awayNowBase1 = awayBattingOrder
                function setAwayBase1(awayNowBase1){
                  return {
                    type : "SET_AWAY_BASE1",
                    awayNowBase1
                  }
                }
                store.dispatch(setAwayBase1(awayNowBase1))
              }
              ////
              else if (base2 === awayPerson[i].cpPersonId){
                const awayNowBase2 = awayBattingOrder
                function setAwayBase2(awayNowBase2){
                  return {
                    type : "SET_AWAY_BASE1",
                    awayNowBase2
                  }
                }
                store.dispatch(setAwayBase2(awayNowBase2))
              }
              else if (base3 === awayPerson[i].cpPersonId){
                const awayNowBase3 = awayPerson
                function setAwayBase3(awayNowBase3){
                  return {
                    type : "SET_AWAY_BASE1",
                    awayNowBase3
                  }
                }
                store.dispatch(setAwayBase3(awayNowBase3))
              }
            }
          }
        })
      .catch((error) => {
        // console.log("경기시작전")
      })
      }
    }
  })
  .catch((error) => {
    console.log(error)
  })
}

function Landing() {
  const awayTeamName = useSelector((state) => state.awayTeamName)
  const awayTeamLogo = useSelector((state) => state.awayTeamLogo)
  const gameStatus = useSelector((state) => state.gameStatus)
  
  getData()

  const navigate = useNavigate();
  // if (gameStatus === 'PLAY') {
  //   setTimeout(() => {
  //     navigate('/match')
  //   }, 3000)
  // } else {
  //   setTimeout(() => {
  //     navigate('/seat')
  //   }, 3000)
  // }

  if (gameStatus === 'PLAY'){
    const reGetData = setInterval(getData, 2000)
  } 


    return (
      <div className='landing-container'>
      </div>
    )
}

export default Landing;
