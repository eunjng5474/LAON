import React from 'react'
import './styles/Landing.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Wrapper from '../../components/AnimateWrapper'



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
          <div className='landing-header'>
            <h1 className='landing-title'>
              <span className='test_obj'>당신의</span>
              <br />
              <span className='test_obj'>직관을</span>
              <br />
              <span className='test_obj'>즐겁게</span> 
            </h1>
            <span className='landing-logo test_obj'>LA:ON</span>
          </div>
          <div className='landing-body'>
            <button className='landing-button' onClick={enterLAON}>
              <h1>라이온즈 파크 입장하기</h1>
            </button>
          </div>
        </div>
      </Wrapper>
    )
}

export default Landing;