import React from 'react'
import PageTitle from '../templates/PageTitle'
import MainMatchInfo from '../templates/MainMatchInfo'
import Weather from '../templates/Weather'
import SeatInfo from '../templates/SeatInfo'
import './styles/Main.css'

export default function Main() {
  return (
    <div className='main-container'>
      <PageTitle/>
      <Weather/>
      <MainMatchInfo/>
      <SeatInfo/>
    </div>
  )
}
