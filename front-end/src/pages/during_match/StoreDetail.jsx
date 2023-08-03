import React from 'react'
import './styles/StoreDetail.css'
import ttangttang from './img/ttangttang.jpg'
import ttangttangmenu from './img/ttangttnagmenu.jpg'

export default function StoreDetail() {
  
  function toDetail() {
    console.log(1)
  }
  
  return (
    <div className='store-detail-container'>
      <button className='facilities-item' onClick={toDetail}>
        <button className='store-detail-header'>
          <div className='store-img-container'>
            <img className='store-img' src={ttangttang} alt="" />
          </div>
          <div className='store-desc'>
            <span className='store-title'>땅땅땅땅땅치킨</span>
            <span>2층에 있는 맛있는 떙떙 취퀸</span>
          </div>
          <div className='store-detail-button'>
            <button>
              도착
            </button>
          </div>
        </button>
        <div className='store-detail-body'>
          <img className="store-menu-img" src={ttangttangmenu} alt="" />
        </div>
      </button>
    </div>
  )
}