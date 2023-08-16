import React from 'react'
import './styles/Landing.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import landing_bg from './img/365437020_611304924491528_5123034982969262014_n.gif'



function Landing() {

  const navigate = useNavigate();

  function setCurrentPage(currentPage) {
    return {
      type: 'SET_CURRENT_PAGE',
      currentPage
    }
  }

  const gameStatus = useSelector((state) => state.gameStatus)

  if (gameStatus === 'PLAY') {
    setTimeout(() => {
      navigate('/match')
    }, 3000)
  } else {
    setTimeout(() => {
      navigate('/seat')
    }, 3000)
  }
  
    return (
      <div className='landing-container font'>
        <h1 className='landing-title'>라:온</h1>
        <img className='laon-bg' src={landing_bg} alt="" />
      </div>
    )
}

export default Landing;