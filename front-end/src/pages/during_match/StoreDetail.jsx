import React, { useState, useEffect } from 'react'
import './styles/StoreDetail.css'
import store from '../../store/store'

export default function StoreDetail({key, facilityName, floor}) {

  function selectDestination(e) {
    const destination = 'LF-1'
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
      <div className='facilities-item'>
        <div className='store-desc'>
          <p className='store-title'>
            {facilityName}
          </p>
          <p className='store-floor'>
            {floor}F
          </p>
        </div>
        <div className='store-detail-body'>
        </div>
      </div>
    </div>
  )
}