import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import store from '../store/store';
import { useSelector } from 'react-redux'
import './styles/NavBar.css'
import logo from './img/SL_logo.svg'

export default function NavBar() {
  const [dark, setDark] = useState()
  const [hide, setHide] = useState()

  const gameStatus = useSelector((state) => state.gameStatus)



  useEffect(() => {
    if (window.location.pathname === '/' || window.location.pathname === '/section') {
      setHide(true)
    } else {
      setHide(false)
    }

    if (window.location.pathname === '/match') {
      setDark(true)
    } else {
      setDark(false)
    }
  })

  return (
    <div className={`nav-bar-container ${dark ? "dark" : ""} ${hide ? "hide" : ""} font`}>
      <div className='nav-bar-left'>
        <div className='on-air'>
          <div className={`on-air-dot ${gameStatus === "PLAY" ? "live-on" : ""}`}></div>
          <span className='on-air-text'>LIVE</span>
        </div>

        <div className='weather'>
          <h3>맑음</h3>
        </div>
      </div>
      <div className='nav-bar-logo-container'>
        {/* <img className='nav-bar-logo' src={logo} alt="" /> */}
        {/* <span className='logo-title'>
          designed by LA:ON
        </span> */}
      </div>
    </div>
  )
}
