import React, { useState } from 'react'
import Store from './StoreDetail'
import ToLive from '../../components/ToLive'
import Modal from '../../components/Modal'
import facilityMapImg from './img/LP.png'
import './styles/Facilities.css'
import { Link } from 'react-router-dom';

export default function Facilities() {
  const [onModal, setOnModal] = useState(false);
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  
  const onChangeDeparture = (e) => {
    setDeparture(e.target.value);
  }
  const onChangeDestination = (e) => {
    setDestination(e.target.value);
  }

  return (
    <div className='facilities-container'>

      <div className='facilities-header'>
        <Link to="/seat">
          <span className='not-current-tab'>좌석 안내</span>
        </Link>
        <span className='current-tab'>시설 안내</span>
        <Link to="/match">
          <span className='not-current-tab'>스코어 보드</span>
        </Link>
      </div>
      
      <div className='facilities-body'>
        <img className='facilities-img' src={facilityMapImg} alt=''/>
        
        <div className='facilities-select'>
          <div className='facilities-search-bar'>
            <div className='facilities-category'>
              <input onChange={onChangeDeparture} value={departure} placeholder='출발지'/>
            </div>
            <div className='facilities-category'>
              <input onChange={onChangeDestination} placeholder='목적지'/>          
            </div>
          </div>

          <div className='facilities-item-container'>
            {/* 나중에 for 문으로 컴포넌트 돌리기 */}
            <Store/>
            <Store/>
            <Store/>
            <Store/>
          </div>
        </div>
      </div>
    </div>
  )
}