import React from 'react'
import './styles/Landing.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import emblem from './img/emblem.svg'



function Landing() {

  const navigate = useNavigate();

  function setCurrentPage(currentPage) {
    return {
      type: 'SET_CURRENT_PAGE',
      currentPage
    }
  }

  const gameStatus = useSelector((state) => state.gameStatus)

  // if (gameStatus === 'PLAY') {
  //   setTimeout(() => {
  //     navigate('/match')
  //   }, 3000)
  // } else {
  //   setTimeout(() => {
  //     navigate('/seat')
  //   }, 3000)
  // }
  
    return (
      <div className='landing-container font'>
        <img className='landing-emblem' src={emblem} alt="" />
        <span className='landing-title'>devloped by LA:ON</span>
      </div>
    )
}

export default Landing;