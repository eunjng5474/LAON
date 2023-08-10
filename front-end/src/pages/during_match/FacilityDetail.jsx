import React from 'react'
import './styles/FacilityDetail.css'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function FacilityDetail() {
  const navigate = useNavigate()
  const location = useLocation()
  const [facility, setFacility] = useState()
  const [setItem, setSetItem] = useState()
  const [singleItem, setSingleItem] = useState()
  const [sideItem, setSideItem] = useState()
  const [beverage, setBeverage] = useState()

  console.log(facility)
  console.log(setItem)
  console.log(singleItem)
  console.log(sideItem)
  console.log(beverage)
  
  function goBack() {
    navigate('/facilities')
  }

  function menuRenderer(menuArray) {
    const result = []
    if (menuArray) {
      for (let i=0; i < menuArray.length; i++) {
        result.push(
          <div>
            <span>{menuArray[i].itemName}</span>
            <span>{menuArray[i].price}</span>
          </div>
        )
      }
    }
    return result
  }

  useEffect(() => {
    const facilityId = location.state.facilityId

    axios.get(`https://laon.info/api/lions/facility/detail/${facilityId}`)
    .then((res) => {
      setFacility(facility => {
        facility = res.data
        setSetItem(setItem => {
          setItem = facility.setItemDtoList
          return setItem
        })
        setSingleItem(singleItem => {
          singleItem = facility.singleItemDtoList
          return singleItem
        })
        setSideItem(sideItem => {
          sideItem = facility.sideItemDtoList
          return sideItem
        })
        setBeverage(beverage => {
          beverage = facility.beverageItemDtoList
          return beverage
        })

        return facility
      })
    })

  }, [])

  return (
    <div className='facility-detail-container'>
      <div className='facility-detail-header'>
        <button className='go-back-button' onClick={goBack}>뒤로가기</button>
        <img className='facility-detail-img' src={location.state.facilityImg} alt="" />
        <div className='facility-detail-title'>
          <h3>{location.state.naviGoal}</h3>
        </div>
        <div>
          <button>NAVI</button>
          <button>AR</button>
        </div>
      </div>

      <div className='facility-detail-body'>
        <div className='facility-detail-menu'>
          <div className='set-menu-container'>
            <h2>세트메뉴</h2>
            {menuRenderer(setItem)}
          </div>
          <div className='single-menu-container'>
            <h2>단품</h2>
            {menuRenderer(singleItem)}
          </div>
          <div className='side-menu-container'>
            <h2>사이드</h2>
            {menuRenderer(sideItem)}
          </div>
          <div className='beverage-container'>
            <h2>음료</h2>
            {menuRenderer(beverage)}
          </div>
        </div>
        
      </div>
    </div>
  )
}
