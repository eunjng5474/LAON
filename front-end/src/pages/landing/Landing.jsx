import React from 'react'
import './styles/Landing.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';



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
      </div>
    )
}

export default Landing;
