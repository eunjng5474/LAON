import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router'
import img_3_4_1 from './img/3_4_1.jpeg'
import arrow from './img/arrow.png'
import SeatMap from "../../components/SeatMap";

import './styles/SectionDetail.css';

export default function SectionDetail() {

  const { state } = useLocation();
  const seatName = state;
  const [panoramaSrc, setPanoramaSrc] = useState()
  const navigate = useNavigate();

  function toSeat() {
    navigate('/seat');
    // console.log(selectSeat);
  }

  return (
    <div className='section-detail-container'>
      <div className='section-detail-header' onClick={toSeat}>
        <img className='go-back-arrow' src={arrow} alt="" />
      </div>

      <div>

        <div className='section-detail-img'>
          <img src={img_3_4_1}></img>
        </div>
        <SeatMap/>

      </div>
      {/* <div className='section-footer'>
      <div className='go-to-reservation'>
          <Link to="https://m.ticketlink.co.kr/sports/137/57">예매 링크로 이동</Link>
        </div>
      </div> */}
    </div>
  )
}
