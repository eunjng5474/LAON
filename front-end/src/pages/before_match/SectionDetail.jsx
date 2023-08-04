import React from 'react';
import { Link } from 'react-router-dom';
import panoramaImg from './img/022_1_11.jpeg'
import './styles/SectionDetail.css';

export default function SectionDetail() {

  return (
    <div className='section-detail-container'>
      <div className='section-detail-header'>
      </div>

      <div className='section-detail-body'>
        <img src={panoramaImg}></img>
      </div>

      {/* <div className='section-footer'>
      <div className='go-to-reservation'>
          <Link to="https://m.ticketlink.co.kr/sports/137/57">예매 링크로 이동</Link>
        </div>
      </div> */}
    </div>
  )
}
