import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import store from '../store/store';
import axios from 'axios'
import { useSelector } from 'react-redux'
import './styles/NavBar.css'
import logo from './img/SL_logo.svg'

export default function NavBar() {
  const navigate = useNavigate();
  const [dark, setDark] = useState()
  const [hide, setHide] = useState()

  const gameStatus = useSelector((state) => state.gameStatus)
  const gameDate = useSelector((state) => state.gameDate)

  function setCurrentPage(currentPage) {
    return {
      type: 'SET_CURRENT_PAGE',
      currentPage
    }
  }

  function navigatePage(e) {
    if (e.target.alt === '좌석') {
      navigate('/seat')
      const currentPage = '좌석'
      store.dispatch(setCurrentPage(currentPage))
    }
    else if (e.target.alt === '내비') {
      navigate('/facilities')
      const currentPage = '내비'
      store.dispatch(setCurrentPage(currentPage))
    } 
    else if (e.target.alt === '경기') {
      navigate('/match')
      const currentPage = '경기'
      store.dispatch(setCurrentPage(currentPage))
    }
  }

  useEffect(() => {
    if (window.location.pathname === '/' || window.location.pathname === '/section') {
      setHide(hide => {
        hide = true
        return hide
      })
    } else {
      setHide(hide => {
        hide = false
        return hide
      })
    }

    if (window.location.pathname === '/match') {
      setDark(true)
    } else {
      setDark(false)
    }

  }, [window.location.pathname])

  return (
    <div className={`nav-bar-container ${dark ? "dark" : ""} ${hide ? "hide" : ""} font`}>
      <div className='on-air'>
        <div className={`on-air-dot ${gameStatus === "PLAY" ? "live-on" : ""}`}></div>
        <span className={`on-air-text`}>LIVE</span>
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
