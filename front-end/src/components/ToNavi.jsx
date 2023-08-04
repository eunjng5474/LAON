import React from 'react'
import './styles/ToNavi.css'
import { useNavigate } from 'react-router-dom'


export default function ToNavi() {

  const navigate = useNavigate();

  function toNavi() {
    navigate('/navigation')
  }

  return (
    <div className='to-navi-container' onClick={toNavi}>
      <button className='to-navi-button'>
        <h3>NAVI</h3>
      </button>
    </div>
  )
}
