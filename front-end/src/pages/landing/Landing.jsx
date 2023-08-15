import React from 'react'
import './styles/Landing.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import stadium from './img/stadium.PNG'



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
        <h1>랜딩 페이지 입니다.</h1>
      </div>
    )
}

export default Landing;