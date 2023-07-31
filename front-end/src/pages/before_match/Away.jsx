import React from 'react'
import ToLive from '../../components/ToLive'
import park_away from './img/LP_away.png'
import './styles/Away.css'

export default function Away() {
  return (
    <div className='away-container'>

      
      <div className='away-header'>
        <h1>AWAY</h1>
        <ToLive/>
      </div>


      <div className='away-body'>
        <img className='park-away-img' src={park_away}/>
      </div>


      <div className='away-footer'>
        <hr />
        <div className='seat-search-bar'>
          <h1>SEAT SEARCH BAR</h1>
        </div>
      </div>


    </div>
  )
}
