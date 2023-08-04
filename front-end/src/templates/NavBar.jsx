import React, { useEffect, useState } from 'react'
import './styles/NavBar.css'
import store from '../store/store';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

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

  function navigatePage(e) {
    console.log(e.target.innerText)
    if (e.target.innerText === '좌석') {
      navigate('/seat')
      const currentPage = '좌석'
      store.dispatch(setCurrentPage(currentPage))
    }
    else if (e.target.innerText === '내비') {
      navigate('/facilities')
      const currentPage = '내비'
      store.dispatch(setCurrentPage(currentPage))
    } 
    else if (e.target.innerText === '경기') {
      navigate('/match')
      const currentPage = '경기'
      store.dispatch(setCurrentPage(currentPage))
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
      <span className={`${naviSelected ? "nav-bar-selected" : ""}`} onClick={navigatePage}>
        내비
      </span>
      <span className={`${seatSelected ? "nav-bar-selected" : ""}`} onClick={navigatePage}>
        좌석
      </span>
      <span className={`${matchSelected ? "nav-bar-selected" : ""}`} onClick={navigatePage}>
        경기
      </span>
    </div>
  )
}
