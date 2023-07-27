import React from 'react'
import './styles/OutfieldSectionInfo.css'
import PageTitle from '../templates/PageTitle'
import SearchSeat from '../templates/SearchSeat'

export default function OutfieldSectionInfo() {
  return (
    <div className='outfield-info-container'>
      <PageTitle/>
      <div className='outfield-image'>
        <h1>OUTFIELD IMAGE</h1>
      </div>
      <h1>swipe to left</h1>
      <SearchSeat/>
    </div>
  )
}
