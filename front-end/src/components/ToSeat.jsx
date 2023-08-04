import React from 'react'
import './styles/ToSeat.css'
import { useNavigate } from 'react-router-dom'

export default function ToSeat() {
  const navigate = useNavigate();

  function toSeat() {
    navigate('/seat')
  }

  return (
    <div className='to-seat-container' onClick={toSeat}>
      <button className='to-seat-button'>
        <h3>SEAT</h3>
      </button>
    </div>
  )
}