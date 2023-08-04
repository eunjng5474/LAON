import React from 'react'
import './styles/ToLive.css'
import { useNavigate } from 'react-router-dom'


export default function ToLive() {

  const navigate = useNavigate();

  function toLive() {
    navigate('/match')
  }

  return (
    <div className='to-live-container' onClick={toLive}>
      <button className='to-live-button'>
        <h3>LIVE</h3>
      </button>
    </div>
  )
}
