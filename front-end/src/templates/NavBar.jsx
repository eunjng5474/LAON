import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import store from '../store/store';
import './styles/NavBar.css'
import logo from './img/SL_logo.svg'

export default function NavBar() {
  const navigate = useNavigate();
  const [dark, setDark] = useState()
  const [hide, setHide] = useState()
  const [naviSelected, setNaviSelected] = useState()
  const [seatSelected, setSeatSelected] = useState()
  const [matchSelected, setMatchSelected] = useState()

  function setCurrentPage(currentPage) {
    return {
      type: 'SET_CURRENT_PAGE',
      currentPage
    }
  }

  useEffect(() => {
    console.log(window.location.pathname)
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

    if (window.location.pathname === '/facilities') {
      setNaviSelected(true)
      setSeatSelected(false)
      setMatchSelected(false)
    } else if (window.location.pathname === '/seat') {
      setNaviSelected(false)
      setSeatSelected(true)
      setMatchSelected(false)
    } else if (window.location.pathname === '/match') {
      setNaviSelected(false)
      setSeatSelected(false)
      setMatchSelected(true)
    }
  })

  return (
    <div className={`nav-bar-container ${dark ? "dark" : ""} ${hide ? "hide" : ""} font`}>
      <img className='nav-bar-logo' src={logo} alt="" />
      <span className='logo-title'>designed by LA:ON</span>
    </div>
  )
}
