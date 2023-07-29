import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import './styles/Landing.css'

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

const Time = {
  formattedDate: formattedDate,
  formattedTime: formattedTime
}

function getData(Time) {
  // const todayMatch = axios.get(`https://sports.daum.net/prx/hermes/api/game/schedule.json?leagueCode=kbo&seasonKey=2023&Date=${Time.formattedDate}`)
  //   .then((res) => {
  //     for (let i = 0; i < res.data.schedule[Time.formattedDate].length; i++) {
  //       if (res.data.schedule[Time.formattedDate][i].fieldName === '대구 삼성 라이온즈 파크') {
  //         break
  //       } else {
  //         console.log(1)
  //       }
  //     }
  //   })
  // }
  const todayMatch = axios.get('https://sports.daum.net/prx/hermes/api/game/schedule.json?leagueCode=kbo&seasonKey=2023&Date=20230727')
  .then((res) => {
    for (let i = 0; i < res.data.schedule[20230727].length; i++) {
      if (res.data.schedule[20230727][i].fieldName === '대구 삼성 라이온즈 파크') {
        console.log(res.data.schedule[20230727][i])
      }
    }
  })
}
function Landing() {
  getData()

    return (
      <div className='landing-container'>
        <h1>LANDING</h1>
      </div>
    )
}

export default Landing;
