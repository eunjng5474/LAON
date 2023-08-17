import React from 'react'
import './styles/FacilityDetail.css'
import arrow from '../before_match/img/arrow.png'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import kelly_img from './img/food/kelly.png'
import JJACK_img from './img/food/짝태시대.PNG'
import TTANG_img from './img/food/ddang.png'
import PAPA_img from './img/food/papazohns.jpg'
import HAPPY_img from './img/food/happycheese.png'
import JOKSU_img from './img/food/족발슈퍼.png'
import CU_img from './img/food/cu.png'
import BUTTER_img from './img/food/wood.PNG'
import ALTON_img from './img/food/떡강정.jpg'
import HONG_img from './img/food/키친더홍임시.png'
import MANDU_img from './img/food/hanmando.jpg'
import YUBU_img from './img/food/doje.jpg'
import KKOCHI_img from './img/food/kkochi.jpg'
import REALPIG_img from './img/food/realPig.jpg'
import OJIK_img from './img/food/5직떡볶이.jpg'

import { BiArrowBack } from 'react-icons/bi'

import axios from 'axios'

export default function FacilityDetail() {
  const navigate = useNavigate()
  const location = useLocation()
  const [facility, setFacility] = useState()
  const [setItem, setSetItem] = useState()
  const [singleItem, setSingleItem] = useState()
  const [sideItem, setSideItem] = useState()
  const [beverage, setBeverage] = useState()

  const departure = location.state.departure;
  const destination = location.state.naviGoal;
  const currentFloor = location.state.currentFloor
  const storeName = location.state.destination

  // detail 정보
  let mainImg = null
  let tag1 = null
  let tag2 = null
  let tag3 = null
  let tag4 = null

  // 가게들 다른 층에도 있는 경우 있어서 태그4 수정해야 하지 않을까?!
  if(storeName === 'KELLY'){
    mainImg = kelly_img
    tag1 = "#맥주"
    tag2 = "#KELLY"
    tag3 = "#생맥주"
    tag4 = "#3F"
  } else if(storeName === '짝태시대'){
    mainImg = JJACK_img
    tag1 = "#건어물"
    tag2 = "#먹태"
    tag3 = "#짝태시대"
    tag4 = "#3F"
  } else if(storeName === '땅땅치킨'){
    mainImg = TTANG_img
    tag1 = "#치킨"
    tag2 = "#순살"
    tag3 = "#땅땅치킨"
    tag4 = "#3F"
  } else if(storeName === '리얼키친홍'){
    mainImg = HONG_img
    tag1 = "#석쇠불고기우동세트"
    tag2 = "#대프리카 덮밥"
    tag3 = "#3F"
    tag4 = "#2F"
  } else if(storeName === '파파존스피자'){
    mainImg = PAPA_img
    tag1 = "#피자"
    tag2 = "#페퍼로니"
    tag3 = "#라이온즈유일피자"
    tag4 = "#2F"
  } else if(storeName === 'CU'){
    mainImg = CU_img
    tag1 = "#편의점"
    tag2 = "#얼음물"
    tag3 = "#음료수"
    tag4 = "#3F"
  } else if(storeName === '해피치즈스마일'){
    mainImg = HAPPY_img
    tag1 = "#분식"
    tag2 = "#소프트콘"
    tag3 = "#떡볶이"
    tag4 = "#3F"
  } else if(storeName === '대왕유부초밥'){
    mainImg = YUBU_img
    tag1 = "#유부초밥"
    tag2 = "#어묵"
    tag3 = "#방망이슬러쉬"
    tag4 = "#3F"
  } else if(storeName === '전설꼬치'){
    mainImg = KKOCHI_img
    tag1 = "#꼬치"
    tag2 = "#야끼도리"
    tag3 = "#가라아게"
    tag4 = "#3F"
  } else if(storeName === '알통닭강정'){
    mainImg = ALTON_img
    tag1 = "#닭강정"
    tag2 = "#치킨"
    tag3 = "#떡강정"
    tag4 = "#3F"
  } else if(storeName === '5직떡볶이'){
    mainImg = OJIK_img
    tag1 = "#분식"
    tag2 = "#5직5재일세트"
    tag3 = "#떡볶이"
    tag4 = "#3F"
  } else if(storeName === '족발슈퍼'){
    mainImg = JOKSU_img
    tag1 = "#족발"
    tag2 = "#석쇠불고기냉면세트"
    tag3 = "#소떡소떢"
    tag4 = "#3F"
  } else if(storeName === '한만두'){
    mainImg = MANDU_img
    tag1 = "#한만두"
    tag2 = "#왕만두"
    tag3 = "#갈비만두"
    tag4 = "#3F"
  } else if(storeName === '버터우드'){
    mainImg = BUTTER_img
    tag1 = "#커피"
    tag2 = "#베이커리"
    tag3 = "#야구공쿠키"
    tag4 = "#3F"
  } else if(storeName === '리얼피그'){
    mainImg = REALPIG_img
    tag1 = "#돼지후라이드"
    tag2 = "#방망이슬러쉬"
    tag3 = "#어묵"
    tag4 = "#3F"
  }
  

  function goAR() {
    window.location.href = `/ar/${location.state.naviGoal}.html`
  }

  function goBack() {
    window.history.back()
  }

  function goNavi() {
    navigate('/navigation', { state: {departure, destination, currentFloor}})
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
        <BiArrowBack className='detail-go-back-button' size={36} onClick={goBack}/>
          <div className='facility-detail-coverimg'>
            <img className='facility-detail-img' src={mainImg} alt="" />
          </div>
      </div>

        <div className='facility-detail-store-title'>
          <span className='detail-store-title'>{storeName}</span>
          <div className='store-itme-tag' id="KELLY" >
            <span className='store-tag' id="KELLY" >{tag1}</span>
            <span className='store-tag' id="KELLY" >{tag2}</span>
            <span className='store-tag' id="KELLY" >{tag3}</span>
            <span className='store-tag' id="KELLY" >{tag4}</span>
          </div>
        </div>

        <div className='facility-detail-body'>
        </div>

        <div className='facility-detail-menu'>

          {setItem && <div className='menu-container'>
            <span className='menu-category'>세트메뉴</span>
            <hr />
            {menuRenderer(setItem)}
          </div>}

          {singleItem && <div className='menu-container'>
            <span className='menu-category'>단품</span>
            <hr />
            {menuRenderer(singleItem)}
          </div>}

          {sideItem && <div className='menu-container'>
            <span className='menu-category'>사이드</span>
            <hr />
            {menuRenderer(sideItem)}
          </div>}

          {beverage && <div className='menu-container'>
            <span className='menu-category'>음료</span>
            <hr />
            {menuRenderer(beverage)}
            
          </div>}

        </div>
        
        <div className='facility-detail-navi-button'>
          <button className='facility-navi-button' onClick={goNavi}>길찾기</button>
          <button className='facility-navi-button' onClick={goAR}>ROADVIEW</button>
        </div>
        
      </div>
  )
}
