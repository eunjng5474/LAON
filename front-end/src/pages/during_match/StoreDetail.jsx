import React, { useState, useEffect } from 'react'
import './styles/StoreDetail.css'
import ttangttang from './img/ttangttang.jpg'
import ttangttangmenu from './img/ttangttnagmenu.jpg'
import store from '../../store/store'

export default function StoreDetail({ handleState }) {

  function selectDestination(e) {
    const destination = 'LF-1'
    handleState("땅땅")
    function setDestination() {
      return {
        type: 'SET_DESTINATION',
        destination
      }
    }
    store.dispatch(setDestination(destination))
  }

  return (
    <div className='store-detail-container font'>
      <button className='facilities-item'>
        <div className='store-desc'>
          <span className='store-title'>땅땅땅땅땅치킨</span>
        </div>
        <div className='store-detail-button'>
          <button className='set-destination-button' onClick={selectDestination}>
            도착
          </button>
        </div>
        <div className='store-detail-body'>
          <img className="store-menu-img" src={ttangttangmenu} alt="" />
        </div>
      </button>
    </div>
  )
}