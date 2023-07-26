import React from 'react'
import PageTitle from '../components/PageTitle'
import MainMatchInfo from '../components/MainMatchInfo'
import Weather from '../components/Weather'
import SeatInfo from '../components/SeatInfo'
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
