import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ToLive from '../../components/ToLive';
import tmpBlock from './img/section_detail/317.png'
import './styles/Section.css';

export default function Section() {
  const { state } = useLocation();
  // const seat = seatName;
  const seatName = state;

  return (
    <div className='section-container'>
      <div className='section-header'>
        <h1>{seatName}</h1>
        <ToLive/>
      </div>
      
      <div className='section-body'>
        <img className='section-block-img' src={tmpBlock}/>
      </div>

      <div className='section-footer'>
        <div className='go-to-reservation'>
          <Link to="https://m.ticketlink.co.kr/sports/137/57">예매 링크로 이동</Link>
        </div>
      </div>


    </div>
  )
}
