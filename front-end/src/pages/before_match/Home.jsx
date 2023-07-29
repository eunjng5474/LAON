import React from 'react'
import ToLive from '../../components/ToLive'
import park_home from './img/LP_home.png'
import './styles/Home.css'

export default function Home() {
  return (
    <div className='home-container'>

      
      <div className='home-header'>
        <h1>HOME</h1>
        <ToLive/>
      </div>


      <div className='home-body'>
        <img className='park-home-img' src={park_home}/>
      </div>


      <div className='home-footer'>
        <hr />
        <div className='seat-search-bar'>
          <h1>SEAT SEARCH BAR</h1>
        </div>
      </div>


    </div>
  )
}
