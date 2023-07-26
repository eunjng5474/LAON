import React from 'react'
import './styles/LiveScore.css'
import PageTitle from '../components/PageTitle'
import LiveBoard from '../components/LiveBoard'
import OnBaseInfo from '../components/OnBaseInfo'

export default function LiveScore() {
  return (
    <div className='live-score-container'>
      <PageTitle/>
      <LiveBoard/>
      <OnBaseInfo/>
    </div>
  )
}
