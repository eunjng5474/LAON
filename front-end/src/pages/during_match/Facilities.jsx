import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import EntireSectionMapImg from './img/sectionMap.png';
import map2F from './img/sectionMap_2F.png';
import map3F from './img/sectionMap_3F.png';
import map5F from './img/sectionMap_5F.png';
import KELLY from './img/facilities/켈리로고.png'
import KEELY_img from './img/food/kelly.png'
import JJAKTAE from './img/facilities/짝태시대 로고.png'
import JJAKTAE_img from './img/food/짝태시대.PNG'
import TTANG from './img/facilities/땅땅치킨로고.png'
import TTANG_img from './img/food/ddang.png'
import PAPA from './img/facilities/파파존스피자로고.png'
import PAPA_img from './img/food/papazohns.jpg'
import HAPPY from './img/facilities/해피치즈스마일로고.png'
import HAPPY_img from './img/food/happycheese.png'
import JOKSU from './img/facilities/족발슈퍼.png'
import JOKSU_img from './img/food/족발슈퍼.png'
import CU from './img/facilities/CU로고.png'
import CU_img from './img/food/cu.png'
import BUTTER from './img/facilities/버터우드로고.png'
import BUTTER_img from './img/food/wood.PNG'
import ALTONG from './img/facilities/알통닭강정로고.png'
import ALTON_img from './img/food/떡강정.jpg'
import HONG from './img/facilities/리얼키친더홍로고.png'
import HONG_img from './img/food/키친더홍임시.png'
import MANDU from './img/facilities/한만두로고.png'
import MANDU_img from './img/food/hanmando.jpg'
import YUBU from './img/facilities/대왕유부초밥로고.png'
import YUBU_img from './img/food/doje.jpg'
import KKOCHI from './img/facilities/전설꼬치로고.png'
import KKOCHI_img from './img/food/kkochi.jpg'
import REALPIG from './img/facilities/리얼피그로고.png'
import REALPIG_img from './img/food/realPig.jpg'
import OJIK from './img/facilities/ojik로고.png'
import OJIK_img from './img/food/5직떡볶이.jpg'

//////
import female_logo from './img/facility/female-sign.png'
import male_logo from './img/facility/male-sign.png'
import disabled_female from './img/facility/disabled-female.png'
import disabled_male from './img/facility/disabled-male.png'
import camera from './img/facility/camera.png'
import baby from './img/facility/baby-bottle.png'
import smoking from './img/facility/smoking.png'
import trash from './img/facility/trash-can.png'

import axios from 'axios';
import './styles/Facilities.css';


export default function Facilities() {
  const naviCanvasRef = useRef(null);
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [naviGoal, setNaviGoal] = useState('')
  const [currentPosition, setCurrentPosition] = useState('');
  const [floor, setFloor] = useState(map3F)
  const [category, setCategory] = useState('식음매장')
  const [focusedBody, setFocusedBody] = useState(false)
  const [currentFloor, setCurrentFloor] = useState('3F')
  const navigate = useNavigate()

  function selectFloor(e) {
    console.log(e)
    if (e.target.innerText === '2F') {
      setFloor(map2F)
      setCurrentFloor('2F')
    }
    else if (e.target.innerText === '3F') {
      setFloor(map3F)
      setCurrentFloor('3F')
    }
    else if (e.target.innerText === '5F') {
      setFloor(map5F)
      setCurrentFloor('5F')
    }
  }

  const onChangeDeparture = (e) => {
    setDeparture(e.target.value);
  }

  const onChangeDestination = (e) => {
    setDestination(e.target.value);
  }

  const getPosition = (position) => {
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    const alt = position.coords.altitude
    setPosition(lat, lng)
    return alt
  }

  const setPosition = (lat, lng) => {
    if (currentFloor === '2F') {
      if (35.84157845414607 <= lat && lat <= 35.84183530928126 && 128.6806084931448 <= lng && lng <= 128.68125028657408   ) {
        setCurrentPosition('Food Street')
        // document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
      }
    } else if (currentFloor === '3F') {
      if (35.84157845414607 <= lat && lat <= 35.84183530928126 && 128.6806084931448 <= lng && lng <= 128.68125028657408   ) {
        setCurrentPosition('3-9')
        // document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
      } else if(35.841433997522735 <= lat && lat <= 35.84157845414607 && 128.6804671036832 <= lng && lng <= 128.6811114803539 ) {
        setCurrentPosition('3-7')
        // document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
      } else if(35.841257004439704 <= lat && lat <= 35.84141262165993 && 128.6803969657282 <= lng && lng <= 128.68086784271355 ) {
        setCurrentPosition('3-5')
        // document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
      } else if(35.84100052759342 <= lat && lat <= 35.841257004439704 && 128.68037218713292 <= lng && lng <= 128.68083103853695  ) {
        setCurrentPosition('3-2')
        // document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
      } else if(35.8407297168639 <= lat && lat <= 35.84100052759342 && 128.6802447345874 <= lng && lng <= 128.6809808490198) {
        setCurrentPosition('T3-2')
        // document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
      } else if(35.84040237812547 <= lat && lat <= 35.8407297168639 && 128.6802931653395 <= lng && lng <= 128.68102321286383) {
        setCurrentPosition('TC-2')
        // document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
      } else if(35.840148084408014 <= lat && lat <= 35.84060048530589 && 128.6804344405443 <= lng && lng <= 128.68094754235815) {
        setCurrentPosition('T1-2')
        // document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
      } else if(35.840056734027634 <= lat && lat <= 35.840148084408014 && 128.68094754235815 <= lng && lng <= 128.68164989674025) {
        setCurrentPosition('1-3')
        // document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
      } else if(35.84009687202578 <= lat && lat <= 35.84065138467286 && 128.68164989674025 <= lng && lng <= 128.68232307201419) {
        setCurrentPosition('1-8')
        // document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
      } else if(35.84088727860394 <= lat && lat <= 35.84065138467286 && 128.682132476393 <= lng && lng <= 128.68267484669371) {
        setCurrentPosition('RF-3')
        // document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
      } else if(35.84065138467286 <= lat && lat <= 35.841235745073256 && 128.68225004602883 <= lng && lng <= 128.68272064701438) {
        setCurrentPosition('RF-7')
        // document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
      } else if(35.841235745073256 <= lat && lat <= 35.8417188936227 && 128.68209186069376 <= lng && lng <= 128.68272064701438) {
        setCurrentPosition('RF-10')
        // document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
      } else if(35.841408326501735 <= lat && lat <= 35.84177084845157 && 128.6818359228813  <= lng && lng <= 128.68209186069376) {
        setCurrentPosition('LF-7')
        // document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
      } else if(35.84145482233314 <= lat && lat <= 35.84186203939144 && 128.68125028657408  <= lng && lng <= 128.6818359228813) {
        setCurrentPosition('LF-3')
        // document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
      } else {
        setCurrentPosition('3-1')
        // document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
      }
    } else if (currentFloor === '5F') {
      if (35.84157845414607 <= lat && lat <= 35.84183530928126 && 128.6806084931448 <= lng && lng <= 128.68125028657408   ) {
        setCurrentPosition('15Gate')
        // document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
      } else if(35.841433997522735 <= lat && lat <= 35.84157845414607 && 128.6804671036832 <= lng && lng <= 128.6811114803539 ) {
        setCurrentPosition('14Gate')
        // document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
      } else if(35.841257004439704 <= lat && lat <= 35.84141262165993 && 128.6803969657282 <= lng && lng <= 128.68086784271355 ) {
        setCurrentPosition('12Gate')
        // document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
      } else if(35.84100052759342 <= lat && lat <= 35.841257004439704 && 128.68037218713292 <= lng && lng <= 128.68083103853695  ) {
        setCurrentPosition('11Gate')
        // document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
      } else if(35.8407297168639 <= lat && lat <= 35.84100052759342 && 128.6802447345874 <= lng && lng <= 128.6809808490198) {
        setCurrentPosition('09Gate')
        // document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
      } else if(35.84040237812547 <= lat && lat <= 35.8407297168639 && 128.6802931653395 <= lng && lng <= 128.68102321286383) {
        setCurrentPosition('07Gate')
        // document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
      } else if(35.840148084408014 <= lat && lat <= 35.84060048530589 && 128.6804344405443 <= lng && lng <= 128.68094754235815) {
        setCurrentPosition('04Gate')
        // document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
      } else if(35.840056734027634 <= lat && lat <= 35.840148084408014 && 128.68094754235815 <= lng && lng <= 128.68164989674025) {
        setCurrentPosition('02Gate')
        // document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
      }
    }
  }

  function categorySelect(e) {
    setCategory(e.target.innerText)
  }

  function focusBody(e) {
    if (e.target.className === 'facilities-body' ||
    e.target.className === 'points-canvas' ||
    e.target.className === 'store-img' ||
    e.target.className === 'to-ar-button') {
      setFocusedBody(true)
    } else {
      setFocusedBody(false)
    }
  }

  function selectStore (e) {
    setDestination(e.target.id)
    axios.get(`https://laon.info/api/lions/route/${currentPosition ? currentPosition : "3-1"}/${e.target.id}`)
    .then((res) => {
      // AR 변수 지정해주는 함수
      setNaviGoal(naviGoal => {
        naviGoal = res.data.facilityName
        // goDetail(naviGoal, e.target.src)
        goDetail(naviGoal)
        return naviGoal
      })
      // 길찾기 좌표 지정해주는 함수
    })
  }

  function goDetail (naviGoal, facilityImg) {
    
    axios.get('https://laon.info/api/lions/facility/all')
    .then((res) => {
      const facilityId = res.data.facilityList.find(e => e.facilityName === naviGoal).facilityId

      navigate('/facilities/detail/', {
        state: {
          facilityId,
          naviGoal,
          facilityImg,
          currentPosition
        }
      })
    })
  } 

  function goNavi() {
    navigate('/navigation')
  }

  function goAR() {
    console.log("Ar")
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getPosition)
  }, [])
  return (
    <div className='facilities-container font'>
      <div className='facilities-header'>

        <div className='floor-select-button'>
          <h2>현재 위치 : {currentPosition}</h2>
          <div>
            <button>2F</button>
            <button>3F</button>
            <button>4F</button>
          </div>
        </div>

        <div className='facilities-search-bar'>

          {/* <div className='facilities-category'>
            <input id="departure" onChange={onChangeDeparture} value={currentPosition ? '현위치 : ' + currentPosition +'구역 ' + currentFloor  : '위치 조회중...'} placeholder='출발지'/>
          </div>

          <div className='facilities-category'>
            <input onClick={focusBody} id="destination" onChange={onChangeDestination} value={destination} placeholder='목적지'/>          
          </div> */}

        </div>

        <div className='category-select'>
          <button onClick={categorySelect} className={category === "식음매장" ? "category-button-line font" : "category-button-nonline font"}>식음매장</button>
          <button onClick={categorySelect} className={category === "편의시설" ? "category-button-line font" : "category-button-nonline font"}>편의시설</button>
        </div>
      </div>

      <div className='facilities-body'>

        <div className={`store-list ${category === "편의시설" ? "facility-hide" : ""}`}>
            <div 
              className='facilities-store'
              id="KELLY" 
              onClick={selectStore}
            >
              <div className='store-item-header' id="KELLY" >
                <img className='store-img' src={KEELY_img} alt="" id="KELLY" />
                <div className='store-item-logo'>
                  <img className='store-logo-img' src={KELLY} alt="" id="KELLY" />
                </div>
              </div>
              <div className='store-item-body' id="KELLY" >
                <div className='store-title' id="KELLY" >
                <span className='facility-store-title' id="KELLY" >KELLY</span>
                </div>
                <div className='store-itme-tag' id="KELLY" >
                  <span className='store-tag' id="KELLY" >#맥주</span>
                  <span className='store-tag' id="KELLY" >#KELLY</span>
                </div>
              </div>
            </div>
            <div 
              className='facilities-store' 
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <img className='store-img' src={JJAKTAE_img} alt="" id="짝태시대"/>
                <div className='store-item-logo'>
                  <img className='store-logo-img' id="짝태시대" src={JJAKTAE} alt=""/>
                </div>
              </div>
              <div className='store-item-body'>
                <div className='store-title'>
                <span className='facility-store-title'>짝태시대</span>
                </div>
                <div className='store-itme-tag'>
                  <span className='store-tag'>#건어물</span>
                  <span className='store-tag'>#먹태</span>
                </div>
              </div>
            </div>
            <div 
              className='facilities-store' 
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <img className='store-img' src={HONG_img} alt="" />
                <div className='store-item-logo'>
                  <img className='store-logo-img' id="리얼키친홍" src={HONG} alt=""/>
                </div>
              </div>
              <div className='store-item-body'>
                <div className='store-title'>
                <span className='facility-store-title'>리얼키친홍</span>
                </div>
                <div className='store-itme-tag'>
                  <span className='store-tag'>#덮밥</span>
                  <span className='store-tag'>#우동</span>
                </div>
              </div>
            </div>
            <div 
              className='facilities-store' 
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <img className='store-img' src={PAPA_img} alt="" />
                <div className='store-item-logo'>
                  <img className='store-logo-img' id="파파존스피자" src={PAPA} alt=""/>
                </div>
              </div>
              <div className='store-item-body'>
                <div className='store-title'>
                <span className='facility-store-title'>파파존스피자</span>
                </div>
                <div className='store-itme-tag'>
                  <span className='store-tag'>#피자</span>
                  <span className='store-tag'>#페퍼로니</span>
                </div>
              </div>
            </div>
            <div 
              className='facilities-store' 
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <img className='store-img' src={CU_img} alt="" />
                <div className='store-item-logo'>
                  <img className='store-logo-img' id="CU" src={CU} alt=""/>
                </div>
              </div>
              <div className='store-item-body'>
                <div className='store-title'>
                <span className='facility-store-title'>CU</span>
                </div>
                <div className='store-itme-tag'>
                  <span className='store-tag'>#편의점</span>
                  <span className='store-tag'>#얼음물</span>
                </div>
              </div>
            </div>
            <div 
              className='facilities-store' 
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <img className='store-img' src={HAPPY_img} alt="" />
                <div className='store-item-logo'>
                  <img className='store-logo-img' id="해피치즈스마일" src={HAPPY} alt=""/>
                </div>
              </div>
              <div className='store-item-body'>
                <div className='store-title'>
                <span className='facility-store-title'>해피치즈스마일</span>
                </div>
                <div className='store-itme-tag'>
                  <span className='store-tag'>#분식</span>
                  <span className='store-tag'>#소프트콘</span>
                </div>
              </div>
            </div>
            <div 
              className='facilities-store' 
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <img className='store-img' src={TTANG_img} alt="" />
                <div className='store-item-logo'>
                  <img className='store-logo-img' id="땅땅치킨" src={TTANG} alt=""/>
                </div>
              </div>
              <div className='store-item-body'>
                <div className='store-title'>
                <span className='facility-store-title'>땅땅치킨</span>
                </div>
                <div className='store-itme-tag'>
                  <span className='store-tag'>#치킨</span>
                  <span className='store-tag'>#햄버거</span>
                </div>
              </div>
            </div>
            <div 
              className='facilities-store' 
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <img className='store-img' src={YUBU_img} alt="" />
                <div className='store-item-logo'>
                  <img className='store-logo-img' id="대왕유부초밥" src={YUBU} alt=""/>
                </div>
              </div>
              <div className='store-item-body'>
                <div className='store-title'>
                <span className='facility-store-title'>대왕유부초밥</span>
                </div>
                <div className='store-itme-tag'>
                  <span className='store-tag'>#유부초밥</span>
                  <span className='store-tag'>#어묵</span>
                </div>
              </div>
            </div>
            <div 
              className='facilities-store' 
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <img className='store-img' src={KKOCHI_img} alt="" />
                <div className='store-item-logo'>
                  <img className='store-logo-img' id="전설꼬치" src={KKOCHI} alt=""/>
                </div>
              </div>
              <div className='store-item-body'>
                <div className='store-title'>
                <span className='facility-store-title'>전설꼬치</span>
                </div>
                <div className='store-itme-tag'>
                  <span className='store-tag'>#꼬치</span>
                  <span className='store-tag'>#야끼도리</span>
                </div>
              </div>
            </div>
            <div 
              className='facilities-store' 
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <img className='store-img' src={BUTTER_img} alt="" />
                <div className='store-item-logo'>
                  <img className='store-logo-img' id="버터우드" src={BUTTER} alt=""/>
                </div>
              </div>
              <div className='store-item-body'>
                <div className='store-title'>
                <span className='facility-store-title'>버터우드</span>
                </div>
                <div className='store-itme-tag'>
                  <span className='store-tag'>#커피</span>
                  <span className='store-tag'>#베이커리</span>
                </div>
              </div>
            </div>
            <div 
              className='facilities-store' 
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <img className='store-img' src={ALTON_img} alt="" />
                <div className='store-item-logo'>
                  <img className='store-logo-img' id="알통닭강정" src={ALTONG} alt=""/>
                </div>
              </div>
              <div className='store-item-body'>
                <div className='store-title'>
                <span className='facility-store-title'>알통떡강정</span>
                </div>
                <div className='store-itme-tag'>
                  <span className='store-tag'>#닭강정</span>
                  <span className='store-tag'>#치킨</span>
                </div>
              </div>
            </div>
            <div 
              className='facilities-store' 
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <img className='store-img' src={REALPIG_img} alt="" />
                <div className='store-item-logo'>
                  <img className='store-logo-img' id="리얼피그" src={REALPIG} alt=""/>
                </div>
              </div>
              <div className='store-item-body'>
                <div className='store-title'>
                <span className='facility-store-title'>리얼피그</span>
                </div>
                <div className='store-itme-tag'>
                  <span className='store-tag'>#돼지</span>
                  <span className='store-tag'>#후라이드</span>
                </div>
              </div>
            </div>
            <div 
              className='facilities-store' 
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <img className='store-img' src={OJIK_img} alt="" />
                <div className='store-item-logo'>
                  <img className='store-logo-img' id="5직떡볶이" src={OJIK} alt=""/>
                </div>
              </div>
              <div className='store-item-body'>
                <div className='store-title'>
                <span className='facility-store-title'>5직떡볶이</span>
                </div>
                <div className='store-itme-tag'>
                  <span className='store-tag'>#분식</span>
                  <span className='store-tag'>#5직5재일</span>
                </div>
              </div>
            </div>
            <div 
              className='facilities-store' 
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <img className='store-img' src={JOKSU_img} alt="" />
                <div className='store-item-logo'>
                  <img className='store-logo-img' id="족발슈퍼" src={JOKSU} alt=""/>
                </div>
              </div>
              <div className='store-item-body'>
                <div className='store-title'>
                <span className='facility-store-title'>족발슈퍼</span>
                </div>
                <div className='store-itme-tag'>
                  <span className='store-tag'>#족발</span>
                  <span className='store-tag'>#냉면</span>
                </div>
              </div>
            </div>
            <div 
              className='facilities-store' 
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <img className='store-img' src={MANDU_img} alt="" />
                <div className='store-item-logo'>
                  <img className='store-logo-img' id="한만두" src={MANDU} alt=""/>
                </div>
              </div>
              <div className='store-item-body'>
                <div className='store-title'>
                <span className='facility-store-title'>한만두</span>
                </div>
                <div className='store-itme-tag'>
                  <span className='store-tag'>#한만두</span>
                  <span className='store-tag'>#왕만두</span>
                </div>
              </div>
            </div>
        </div>

        <div className={`facility-list ${category === "식음매장" ? "facility-hide" : ""}`}>
          <div 
            className='facilities-facility'
            id="여자화장실"
          >
            <div className='facility-scroll-body'>
              <div className='facility-icon-item'>
                <img className='facility-icon' src={female_logo} alt="" />
              </div>
              <div className='facility-title-item'>
                <span className='facility-title font'>여자화장실</span>
              </div>
              <div className='facility-body'>
                <button className='facility-body-button font' onClick={goNavi}>길찾기</button>
                <button className='facility-body-button font' onClick={goAR}>로드뷰</button>
              </div>
            </div>
          </div>

          <div 
            className='facilities-facility'
            id="남자화장실"
          >
            <div className='facility-scroll-body'>
              <div className='facility-icon-item'>
                <img className='facility-icon' src={male_logo} alt="" />
              </div>
              <div className='facility-title-item'>
                <span className='facility-title font'>남자화장실</span>
              </div>
              <div className='facility-body'>
                <button className='facility-body-button font'>길찾기</button>
                <button className='facility-body-button font'>로드뷰</button>
              </div>
            </div>
          </div>
          <div 
            className='facilities-facility'
            id="여자장애인화장실"
          >
            <div className='facility-scroll-body'>
              <div className='facility-icon-item'>
                <img className='facility-icon' src={disabled_female} alt="" />
              </div>
              <div className='facility-title-item'>
                <span className='facility-title font'>여자장애인화장실</span>
              </div>
              <div className='facility-body'>
                <button className='facility-body-button font'>길찾기</button>
                <button className='facility-body-button font'>로드뷰</button>
              </div>
            </div>
          </div>
          <div 
            className='facilities-facility'
            id="남자장애인화장실"
          >
            <div className='facility-scroll-body'>
              <div className='facility-icon-item'>
                <img className='facility-icon' src={disabled_male} alt="" />
              </div>
              <div className='facility-title-item'>
                <span className='facility-title font'>남자장애인화장실</span>
              </div>
              <div className='facility-body'>
                <button className='facility-body-button font'>길찾기</button>
                <button className='facility-body-button font'>로드뷰</button>
              </div>
            </div>
          </div>
          <div 
            className='facilities-facility'
            id="블루샷"
          >
            <div className='facility-scroll-body'>
              <div className='facility-icon-item'>
                <img className='facility-icon' src={camera} alt="" />
              </div>
              <div className='facility-title-item'>
                <span className='facility-title font'>블루샷</span>
              </div>
              <div className='facility-body'>
                <button className='facility-body-button font'>길찾기</button>
                <button className='facility-body-button font'>로드뷰</button>
              </div>
            </div>
          </div>
          <div 
            className='facilities-facility'
            id="수유실"
          >
            <div className='facility-scroll-body'>
            <div className='facility-icon-item'>
                <img className='facility-icon' src={baby} alt="" />
              </div>
              <div className='facility-title-item'>
                <span className='facility-title font'>수유실</span>
              </div>
              <div className='facility-body'>
                <button className='facility-body-button font'>길찾기</button>
                <button className='facility-body-button font'>로드뷰</button>
              </div>
            </div>
          </div>
          <div 
            className='facilities-facility'
            id="흡연실"
          >
            <div className='facility-scroll-body'>
            <div className='facility-icon-item'>
                <img className='facility-icon' src={smoking} alt="" />
              </div>
              <div className='facility-title-item'>
                <span className='facility-title font'>흡연실</span>
              </div>
              <div className='facility-body'>
                <button className='facility-body-button font'>길찾기</button>
                <button className='facility-body-button font'>로드뷰</button>
              </div>
            </div>
          </div>
          <div 
            className='facilities-facility'
            id="쓰레기통"
          >
            <div className='facility-scroll-body'>
            <div className='facility-icon-item'>
                <img className='facility-icon' src={trash} alt="" />
              </div>
              <div className='facility-title-item'>
                <span className='facility-title font'>쓰레기통</span>
              </div>
              <div className='facility-body'>
                <button className='facility-body-button font'>길찾기</button>
                <button className='facility-body-button font'>로드뷰</button>
              </div>
            </div>
          </div>
        </div>
          
      </div>
    </div>
  )
}
