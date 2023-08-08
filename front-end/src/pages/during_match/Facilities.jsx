import React, { useEffect, useState, useRef } from 'react'
import StoreDetail from './StoreDetail'
import EntireSectionMapImg from './img/sectionMap.png';
import map2F from './img/sectionMap_2F.png';
import map3F from './img/sectionMap_3F.png';
import map5F from './img/sectionMap_5F.png';
import store from '../../store/store'
import axios from 'axios';
import { useGeolocated } from "react-geolocated";
import './styles/Facilities.css';


export default function Facilities() {
  const naviCanvasRef = useRef(null);
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [currentPosition, setCurrentPosition] = useState('');
  const [floor, setFloor] = useState(map3F)
  const [category, setCategory] = useState('식음매장')
  const [stores, setStores] = useState()
  const [facilities, setFacilities] = useState()

  const [focusedBody, setFocusedBody] = useState(false)
  // const []

  function selectFloor(e) {
    console.log(e)
    if (e.target.innerText === '2F') {
      setFloor(map2F)
    }
    else if (e.target.innerText === '3F') {
      setFloor(map3F)
    }
    else if (e.target.innerText === '5F') {
      setFloor(map5F)
    }
  }

  const vertices = [
    {x: 20, y: 150},
    {x: 20, y: 260},
    {x: 140, y: 360},
    {x: 210, y: 360}
    ];

  // const [state, setState] = useState('');
  const handleState = (data) => {
    setDestination(data);
    // setState(data);
    console.log(data);
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
    setPosition(lat, lng)
  }

  const setPosition = (lat, lng) => {
    if (35.095 <= lat && lat <= 35.1 && 128.85 <= lng && lng <= 128.9) {
      console.log(1)
      setCurrentPosition('LF-1')
      document.querySelector('#departure').value = '현위치 : ' + currentPosition + '구역'
    } else {
      console.log('일단 1-2는 아님')
    }
  }

  function selectDestination(e) {
    console.log(e)
  }

  function isFacility(data) {
    return data.type === "편의시설";
  }

  function isStore(data) {
    return data.type === "식음료"
  }

  function categorySelect(e) {
    setCategory(e.target.innerText)
    console.log(category)
  }

  useEffect(() => {
    
    axios.get('https://laon.info/api/lions/facility/all')
    .then((res) => {
      console.log(res.data)
      setFacilities(res.data.facilityList.filter(isFacility))
      setStores(res.data.facilityList.filter(isStore))
    })
    .catch((error) => {
      console.log(error)
    })

    navigator.geolocation.getCurrentPosition(getPosition)

    const naviCanvas = naviCanvasRef.current;
    naviCanvas.width = 360;
    naviCanvas.height = 400;
    const ctx = naviCanvas.getContext("2d")

    function calcWaypoints(vertices){
      var waypoints=[];
      for(var i=1;i<vertices.length;i++){
          // if (vertices[i]["type"] === "S"){
          //   setFloorImg(sectionMapImg3F);
          // }

          var pt0=vertices[i-1];
          var pt1=vertices[i];
          var dx=pt1["x"]-pt0["x"];
          var dy=pt1["y"]-pt0["y"];
          for(var j=0;j<100;j++){
              var x=pt0.x+dx*j/100;
              var y=pt0.y+dy*j/100;
              waypoints.push({x:x,y:y});
          }
      }
      return(waypoints);
    }

    var points=calcWaypoints(vertices);

    var t=1;

    animate();

    function animate(){
        if(t<points.length-1){ requestAnimationFrame(animate); }
        ctx.beginPath();
        ctx.moveTo(points[t-1].x,points[t-1].y);
        ctx.lineTo(points[t].x,points[t].y);
        ctx.lineWidth = '12';
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'blue';
        ctx.stroke();
        t++;
    }

  },[])

    function focusBody() {
      setFocusedBody(!focusedBody)
      console.log(focusedBody)
    }


  return (
    <div className='facilities-container font'>
      <div className='floor-select-button'>
        <button onClick={selectFloor}>2F</button>
        <button onClick={selectFloor}>3F</button>
        <button onClick={selectFloor}>5F</button>
      </div>
      <div className='facilities-body' onClick={focusBody}>
        <div className='facilities-navigation'>
          <img className='facilities-img' src={floor} alt=''/>  
          
          <canvas className='points-canvas' ref={naviCanvasRef}></canvas>
        </div>
        
        <div className={`facilities-select ${focusedBody ? "facilities-select-focus-body" : ""}`} onClick={focusBody}>
          <div className='facilities-search-bar'>
            <div className='facilities-category'>
              <input onClick={focusBody} id="departure" onChange={onChangeDeparture} value={'현위치 : '+ currentPosition+'구역'} placeholder='출발지'/>
            </div>
            <div className='facilities-category'>
              <input onClick={focusBody} id="destination" onChange={onChangeDestination} value={destination} placeholder='목적지'/>          
            </div>
          </div>

          <div className={`facilities-item-container ${focusedBody ? "item-container-hide" : ""}`}>
            <div className='category-select'>
              <button onClick={categorySelect} className={`${category === "식음매장" ? "category-show-button" : ""}`}>식음매장</button>
              <button onClick={categorySelect} className={`${category === "편의시설" ? "category-show-button" : ""}`}>편의시설</button>
            </div>
            <div className={`store-list ${category === "편의시설" ? "store-show" : ""}`}>

              
                <div className='facilities-store'>
                  KELLY
                </div>
                <div className='facilities-store'>
                  짝태시대
                </div>
                <div className='facilities-store'>
                  리얼키친더홍
                </div>
                <div className='facilities-store'>
                  파파존스피자
                </div>
                <div className='facilities-store'>
                  CU
                </div>
                <div className='facilities-store'>
                  해피치즈스마일
                </div>
                <div className='facilities-store'>
                  땅땅치킨
                </div>
                <div className='facilities-store'>
                  대왕유부초밥
                </div>
                <div className='facilities-store'>
                  전설꼬치
                </div>
                <div className='facilities-store'>
                  버터우드
                </div>
                <div className='facilities-store'>
                  알통닭강정
                </div>
                <div className='facilities-store'>
                  리얼피그
                </div>
                <div className='facilities-store'>
                  5직떡볶이
                </div>
                <div className='facilities-store'>
                  족발슈퍼
                </div>
                <div className='facilities-store'>
                  한만두
                </div>
                <div className='facilities-store'>
                  블루샷
                </div>
              
              {/* {stores && stores.map((data) => {
                console.log(data)
                return (
                  <StoreDetail key={data.facilityId} facilityName={data.facilityName} floor={data.floor}/>
                )
              })} */}
            </div>

            <div className={`facility-list ${category === "식음매장" ? "facility-show" : ""}`}>            

                <div className='facilities-store'>
                  여자화장실
                </div>
                <div className='facilities-store'>
                  남자화장실
                </div>
                <div className='facilities-store'>
                  쓰레기통
                </div>
                <div className='facilities-store'>
                  남자 장애인 화장실
                </div>
                <div className='facilities-store'>
                  여자 장애인 화장실
                </div>
                <div className='facilities-store'>
                  수유실
                </div>
                <div className='facilities-store'>
                  흡연실
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}