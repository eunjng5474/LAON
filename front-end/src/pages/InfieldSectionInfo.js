import React from 'react'
import './styles/InfieldSectionInfo.css'
import PageTitle from '../components/PageTitle'
import SearchSeat from '../components/SearchSeat'

export default function InfieldSectionInfo() {
  return (
    <div className='infield-info-container'>
      <PageTitle/>
      <div className='infield-image'>
        <h1>INFIELD IMAGE</h1>
      </div>
      <h1>swipe to right</h1>
      <SearchSeat/>
    </div>
  )
}
