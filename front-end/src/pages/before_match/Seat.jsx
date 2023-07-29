import React from 'react'
import './styles/Seat.css'
import parkimg from './img/LP.png'

export default function Seat() {
  return (
    <div className='seat-container'>
      <div className='seat-header'>
        <h1>좌석 정보 안내</h1>
        <div className='to-live-container'>
          <button className='to-live-button'>
            <h3>TO LIVE</h3>
          </button>
        </div>
      </div>
      <div className='seat-img-container'>
        <div className='seat-home-away'>
          <h1>HOME</h1>
          <h1>AWAY</h1>
        </div>
        <img className='seat-img' src={parkimg} alt='안나와요 왜죠'/>
      </div>
      <div className='seat-footer'>
        <div className='seat-scroll-bar'>
          <h1>SEAT SCROLL</h1>
        </div>
        <div className='seat-search-bar'>
          <h1>SEAT SEARCH BAR</h1>
        </div>
      </div>
    </div>
  )
}
