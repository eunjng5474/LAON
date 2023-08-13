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
  const [naviSelected, setNaviSelected] = useState()
  const [seatSelected, setSeatSelected] = useState()
  const [matchSelected, setMatchSelected] = useState()
  const gameStatus = useSelector(state => state.gameStatus)

  console.log(gameStatus)

  function setCurrentPage(currentPage) {
    return {
      type: 'SET_CURRENT_PAGE',
      currentPage
    }
  }

  function navigatePage(e) {
    if (e.target.title === '좌석') {
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

  function isLive() {
    if (gameStatus === 'PLAY') {
      return 'red'
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
    navigate('/match')
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
    <div className={`tab-bar-container ${hide ? "hide" : ""} font`}>
      <div className='tab-bar-item'>
        {/* <img className={`tab-bar-icon ${naviSelected ? "tab-bar-selected" : ""}`} onClick={navigatePage} src={gps} alt="내비" /> */}

        <MdStadium onClick={navigateNaviPage} size={50}/>
        <span className='tab-bar-span'>
          시설 안내
        </span>
      </div>
      <div className='tab-bar-item'>
        {/* <img className={`tab-bar-icon ${seatSelected ? "tab-bar-selected" : ""}`} onClick={navigatePage} src={seat} alt="좌석" /> */}
        <PiChairFill onClick={navigateSeatPage} size={50}/>
        <span className='tab-bar-span'>
          좌석 안내
        </span>
      </div>
      <div className='tab-bar-item'>
        {/* <img className={`tab-bar-icon ${matchSelected ? "tab-bar-selected" : ""}`} src={live} onClick={navigatePage} alt="경기" /> */}
        <BsBroadcast onClick={navigateMatchPage} size={50} color={`${isLive()}`}/>
        <span className='tab-bar-span'>
          경기 중계
        </span>
      </div>
    </div>
  )
}
