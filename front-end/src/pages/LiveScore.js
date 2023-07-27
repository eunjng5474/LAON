import React from 'react'
import './styles/LiveScore.css'
import PageTitle from '../templates/PageTitle'
import LiveBoard from '../templates/LiveBoard'
import OnBaseInfo from '../templates/OnBaseInfo'

export default function LiveScore() {
  return (
    <div className='live-score-container'>
      <PageTitle/>
      <LiveBoard/>
      <OnBaseInfo/>
    </div>
  )
}
