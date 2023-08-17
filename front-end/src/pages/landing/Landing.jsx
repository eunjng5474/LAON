import React from 'react'
import './styles/Landing.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Wrapper from '../../components/AnimateWrapper'
import secondBg from './img/landing-bg-second.png'
import thirdBg from './img/landing-bg-third.png'

function Landing() {

  const navigate = useNavigate();

  function setCurrentPage(currentPage) {
    return {
      type: 'SET_CURRENT_PAGE',
      currentPage
    }
  }

  const gameStatus = useSelector((state) => state.gameStatus)

  function enterLAON() {
    if (gameStatus === 'PLAY') {
      navigate('/match')  
    } else {
      navigate('/seat')
    }
  }
  
    return (
      <Wrapper>
        <div className='landing-container font'>
          <img className='landing-second-img' src={secondBg} alt="" />
          <img className='landing-third-img' src={thirdBg} alt="" />
          <div className='landing-header'>
          </div>
          <div className='landing-body'>
            <button className='landing-button test_obj' onClick={enterLAON}>
              <h1>입장하기</h1>
            </button>
          </div>
        </div>
      </Wrapper>
    )
}

export default Landing;