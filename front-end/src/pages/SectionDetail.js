import React from 'react'
import './styles/SectionDetail.css'
import PageTitle from '../templates/PageTitle'
import SectionInfo from '../templates/SectionInfo'

export default function SectionDetail() {
  return (
    <div className='section-detail-container'>
      <PageTitle/>
      <SectionInfo/>
      <div className='section-detail-image'>
        <h1>SECTION IMAGE</h1>
      </div>
    </div>
  )
}
