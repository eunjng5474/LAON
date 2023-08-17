import React, { useEffect, useState } from 'react'
import store from '../store/store';
import { useNavigate } from 'react-router-dom'
import gps from './icons/gps_icon.png'
import seat from './icons/stadium.png'
import live from './icons/base_ball.png'
import './styles/TabBar.css'
import { BsBroadcast } from 'react-icons/bs'
import { PiChairFill } from 'react-icons/pi'
import { MdStadium } from 'react-icons/md'
import { useSelector } from 'react-redux';


export default function TabBar() {
  const navigate = useNavigate();
  const [hide, setHide] = useState()
  const [dark, setDark] = useState()
  const [naviSelected, setNaviSelected] = useState()
  const [seatSelected, setSeatSelected] = useState()
  const [matchSelected, setMatchSelected] = useState()
  const gameStatus = useSelector(state => state.gameStatus)
  const currentPage = useSelector(state => state.currentPage)

  function setCurrentPage(currentPage) {
    return {
      type: 'SET_CURRENT_PAGE',
      currentPage
    }
  }

  function isLive() {
    if (gameStatus === 'PLAY') {
      return '#FFCF69'
    } else {
      return '#fffffff'
    }
  }

  function navigateNaviPage() {
    navigate('/facilities')
  }
  function navigateSeatPage() {
    navigate('/seat')
  }
  function navigateMatchPage() {
    navigate('/test')
  }

  useEffect(() => {
    if (window.location.pathname === '/' || window.location.pathname === '/section') {
      setHide(true)
    } else {
      setHide(false)
    }

    if (window.location.pathname === '/facilities') {
      setNaviSelected(true)
      setSeatSelected(false)
      setMatchSelected(false)
      setDark(false)
    } else if (window.location.pathname === '/seat') {
      setNaviSelected(false)
      setSeatSelected(true)
      setMatchSelected(false)
      setDark(false)
    } else if (window.location.pathname === '/match') {
      setNaviSelected(false)
      setSeatSelected(false)
      setMatchSelected(true)
      setDark(true)
    }
  })


  return (
    <div className={`tab-bar-container ${hide ? "hide" : ""} ${dark ? "dark" : ""} font`}>
      <div className='tab-bar-item'>
        {/* <img className={`tab-bar-icon ${naviSelected ? "tab-bar-selected" : ""}`} onClick={navigatePage} src={gps} alt="내비" /> */}

        <MdStadium className={`tab-bar-icon ${naviSelected ? "selected-icon" : ""}`} onClick={navigateNaviPage} size={50}/>
        <span className='tab-bar-span'>
          시설 안내
        </span>
      </div>
      <div className='tab-bar-item'>
        {/* <img className={`tab-bar-icon ${seatSelected ? "tab-bar-selected" : ""}`} onClick={navigatePage} src={seat} alt="좌석" /> */}
        <PiChairFill className={`tab-bar-icon ${seatSelected ? "selected-icon" : ""}`} onClick={navigateSeatPage} size={50}/>
        <span className='tab-bar-span'>
          좌석 안내
        </span>
      </div>
      <div className='tab-bar-item'>
        {/* <img className={`tab-bar-icon ${matchSelected ? "tab-bar-selected" : ""}`} src={live} onClick={navigatePage} alt="경기" /> */}
        <BsBroadcast className={`tab-bar-icon ${matchSelected ? "selected-icon" : ""}`} onClick={navigateMatchPage} size={50} color={`${isLive()}`}/>
        <span className='tab-bar-span'>
          경기 중계
        </span>
      </div>
    </div>
  )
}
