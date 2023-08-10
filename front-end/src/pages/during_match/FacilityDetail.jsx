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

  function goAR() {
    window.location.href = `/ar/${location.state.naviGoal}.html`
  }

  function goBack() {
    navigate('/facilities')
  }

  function menuRenderer(menuArray) {
    const result = []
    if (menuArray) {
      for (let i=0; i < menuArray.length; i++) {
        result.push(
          <div className='menu-item'>
            <span className='menu-item-name'>{menuArray[i].itemName}</span>
            <span className='menu-item-price'>{menuArray[i].price}원</span>
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
    <div className='facility-detail-container font'>
      <div className='facility-detail-header'>
        <button className='go-back-button' onClick={goBack}>뒤로가기</button>
        <img className='facility-detail-img' src={location.state.facilityImg} alt="" />
        <div className='facility-detail-title'>
          <h3>{location.state.naviGoal}</h3>
        </div>
      </div>

      <div className='facility-detail-body'>
        <div className='facility-detail-menu'>
          <div className='menu-container'>
            <span className='menu-category'>세트메뉴</span>
            <hr />
            {menuRenderer(setItem)}
          </div>
          <div className='menu-container'>
            <span className='menu-category'>단품</span>
            <hr />
            {menuRenderer(singleItem)}
          </div>
          <div className='menu-container'>
            <span className='menu-category'>사이드</span>
            <hr />
            {menuRenderer(sideItem)}
          </div>
          <div className='menu-container'>
            <span className='menu-category'>음료</span>
            <hr />
            {menuRenderer(beverage)}
          </div>
        </div>
        <div className='facility-detail-navi-button'>
          <button>길찾기</button>
          <button onClick={goAR}>ROADVIEW</button>
        </div>
      </div>
    </div>
  )
}
