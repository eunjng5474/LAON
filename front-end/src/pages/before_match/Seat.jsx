import React from 'react'
import './styles/Seat.css'
import parkimg from './img/LP.png'
import ToLive from '../../components/ToLive'

export default function Seat() {
  return (
    <div className='seat-container'>


      <div className='seat-header'>
        <h1>좌석 정보 안내</h1>
        <ToLive/>
      </div>


      <div className='seat-body'>
        <div className='seat-home-away'>
          <div className='seat-home-logo'>
            <h1>HOME</h1>
            <h1>SL</h1>
          </div>
          <div className='seat-away-logo'>
            <h1>AWAY</h1>
            <h1>LT</h1>
          </div>
        </div>
        <img className='seat-img' src={parkimg} alt='안나와요 왜죠'/>
      </div>


      <div className='seat-footer'>
        <hr />
        <div className='seat-search-bar'>
          <h1>SEAT SEARCH BAR</h1>
        </div>
      </div>


    </div>
  )
}
