import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import EntireSectionMapImg from './img/sectionMap.png';
import map2F from './img/sectionMap_2F.png';
import map3F from './img/sectionMap_3F.png';
import map5F from './img/sectionMap_5F.png';
import KELLY from './img/food/kelly.png'
import JJAKTAE from './img/food/jjack.PNG'
import TTANG from './img/facilities/땅땅치킨로고.png'
import PAPA from './img/food/papazohns.jpg'
import HAPPY from './img/food/happycheese.png'
import JOKSU from './img/facilities/족발슈퍼.png'
import CU from './img/facilities/CU로고.png'
import BUTTER from './img/facilities/버터우드로고.png'
import ALTONG from './img/facilities/알통닭강정로고.png'
import HONG from './img/facilities/리얼키친더홍로고.png'
import MANDU from './img/facilities/한만두로고.png'
import YUBU from './img/facilities/대왕유부초밥로고.png'
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

  function selectStore(e) {
    setDestination(e.target.id)
    axios.get(`https://laon.info/api/lions/route/${currentPosition ? currentPosition : "3-1"}/${e.target.id}`)
    .then((res) => {
      console.log(res)
      // AR 변수 지정해주는 함수
      setNaviGoal(naviGoal => {
        naviGoal = res.data.facilityName
        goDetail(naviGoal, e.target.src)
        return naviGoal
      })
      // 길찾기 좌표 지정해주는 함수
    })
  }

  function goDetail (naviGoal, facilityImg) {
    axios.get('https://laon.info/api/lions/facility/all')
    .then((res) => {
      console.log(naviGoal)
      const facilityId = res.data.facilityList.find(e => e.facilityName === naviGoal).facilityId

      navigate('/facilities/detail/', {
        state: {
          facilityId,
          naviGoal,
          facilityImg
        }
      })
    })
  } 

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getPosition)
  },[])

  return (
    <div className='facilities-container font'>
      <div className='facilities-header'>

        <div className='floor-select-button'>
          <h2>현재 위치 : {currentPosition}</h2>
        </div>

        <div className='facilities-search-bar'>

          {/* <div className='facilities-category'>
            <input id="departure" onChange={onChangeDeparture} value={currentPosition ? '현위치 : ' + currentPosition +'구역 ' + currentFloor  : '위치 조회중...'} placeholder='출발지'/>
          </div>

          <div className='facilities-category'>
            <input onClick={focusBody} id="destination" onChange={onChangeDestination} value={destination} placeholder='목적지'/>          
          </div> */}

        </div>

        <div className='category-select font'>
          <button onClick={categorySelect} className={`${category === "식음매장" ? "category-show-button" : ""} font`}>식음매장</button>
          <button onClick={categorySelect} className={`${category === "편의시설" ? "category-show-button" : ""} font`}>편의시설</button>
        </div>
      </div>

      <div className='facilities-body'>

        <div className={`store-list ${category === "편의시설" ? "facility-hide" : ""}`}>
            <div 
              className='facilities-store' 
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <span className='facility-store-title'>KELLY</span>
              </div>
              <div className='store-item-body'>
                <img className='store-img' id="KELLY" src={KELLY} alt="" />
              </div>
            </div>
            <div 
              className='facilities-store'
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <span className='facility-store-title'>짝태시대</span>
              </div>
              <div className='store-item-body'>
              <img className='store-img' id="짝태시대" src={JJAKTAE} alt="" />
              </div>
              </div>
            
            <div 
              className='facilities-store'
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <span className='facility-store-title'>리얼키친홍</span>
              </div>
              <div className='store-item-body'>
              <img className='store-img' id="리얼키친홍" src={HONG} alt="" />
              </div>
            </div>
            <div 
              className='facilities-store'
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <span className='facility-store-title'>파파존스피자</span>
              </div>
              <div className='store-item-body'>
              <img className='store-img' id="파파존스피자" src={PAPA} alt="" />
            </div>
            </div>
            <div 
              className='facilities-store'
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <span className='facility-store-title'>CU</span>
              </div>
              <div className='store-item-body'>
              <img className='store-img' id="CU" src={CU} alt="" />
            </div>
            </div>
            <div 
              className='facilities-store'
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <span className='facility-store-title'>해피치즈스마일</span>
              </div>
              <div className='store-item-body'>
              <img className='store-img' id="해피치즈스마일" src={HAPPY} alt="" />
            </div>
            </div>
            <div 
              className='facilities-store'
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <span className='facility-store-title'>땅땅치킨</span>
              </div>
              <div className='store-item-body'>
              <img className='store-img' id="땅땅치킨" src={TTANG} alt="" />
            </div>
            </div>
            <div 
              className='facilities-store'
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <span className='facility-store-title'>대왕유부초밥</span>
              </div>
              <div className='store-item-body'>
              <img className='store-img' id="대왕유부초밥" src={YUBU} alt="" />
              </div>
            </div>
            <div 
              className='facilities-store'
              id="전설꼬치"
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <span className='facility-store-title'>전설꼬치</span>
              </div>
              전설꼬치
            </div>
            <div 
              className='facilities-store'
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <span className='facility-store-title'>버터우드</span>
              </div>
              <div className='store-item-body'>
              <img className='store-img' id="버터우드" src={BUTTER} alt="" />
            </div>
            </div>
            <div 
              className='facilities-store'
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <span className='facility-store-title'>알통떡강정</span>
              </div>
              <div className='store-item-body'>
              <img className='store-img' id="알통닭강정" src={ALTONG} alt="" />
              </div>
            </div>
            <div 
              className='facilities-store'
              id="리얼피그"
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <span className='facility-store-title'>리얼피그</span>
              </div>
              리얼피그
            </div>
            <div 
              className='facilities-store'
              id="5직떡볶이"
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <span className='facility-store-title'>5직떡볶이</span>
              </div>
              5직떡볶이
            </div>
            <div 
              className='facilities-store'
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <span className='facility-store-title'>족발슈퍼</span>
              </div>
              <div className='store-item-body'>
              <img className='store-img' id="족발슈퍼" src={JOKSU} alt="" />
              </div>
            </div>
            <div 
              className='facilities-store'
              onClick={selectStore}
            >
              <div className='store-item-header'>
                <span className='facility-store-title'>한만두</span>
              </div>
              <div className='store-item-body'>
              <img className='store-img' id="한만두" src={MANDU} alt="" />
              </div>
            </div>
        </div>
        </div>

        <div className={`facility-list ${category === "식음매장" ? "facility-hide" : ""}`}>
          <div 
            className='facilities-store'
            id="여자화장실"
            onClick={selectStore}
          >
            여자화장실
          </div>
          <div 
            className='facilities-store'
            id="남자화장실"
            onClick={selectStore}
          >
            남자화장실
          </div>
          <div 
            className='facilities-store'
            id="여자 장애인 화장실"
            onClick={selectStore}
          >
            여자 장애인 화장실
          </div>
          <div 
            className='facilities-store'
            id="남자 장애인 화장실"
            onClick={selectStore}
          >
            남자 장애인 화장실
          </div>
          <div 
            className='facilities-store'
            id="블루샷"
            onClick={selectStore}
          >
            블루샷
          </div>
          <div 
            className='facilities-store'
            id="수유실"
            onClick={selectStore}
          >
            수유실
          </div>
          <div 
            className='facilities-store'
            id="흡연실"
            onClick={selectStore}
          >
            흡연실
          </div>
          <div 
            className='facilities-store'
            id="쓰레기통"
            onClick={selectStore}
          >
            쓰레기통
          </div>
        </div>
          
      
    </div>
  )
}