import React from 'react'
import './styles/SectionDetail.css'
import PageTitle from '../components/PageTitle'
import SectionInfo from '../components/SectionInfo'

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
