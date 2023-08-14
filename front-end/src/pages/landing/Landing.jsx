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
        <h1 className='landing-title'>당신의 직관을 <br /> 언제나 즐겁게</h1>
        <img src={stadium} alt="" />
      </div>
    )
}

export default Landing;