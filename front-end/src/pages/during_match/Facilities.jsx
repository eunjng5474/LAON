import React, { useEffect, useState, useRef } from 'react'
import StoreDetail from './StoreDetail'
import NavBar from '../../templates/NavBar'
import EntireSectionMapImg from './img/sectionMap.png';
import sectionMapImg2F from './img/sectionMap_2F.png';
import sectionMapImg3F from './img/sectionMap_3F.png';
import sectionMapImg5F from './img/sectionMap_5F.png';
import { Link } from 'react-router-dom';
import store from '../../store/store'
import { useGeolocated } from "react-geolocated";
import './styles/Facilities.css';


export default function Facilities() {
  const naviCanvasRef = useRef(null);

  const [onModal, setOnModal] = useState(false);
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [currentPosition, setCurrentPosition] = useState('');
  const [floorImg, setFloorImg] = useState('');

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

  
  
  useEffect(() => {
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

    // const floor = 1;
    // if (floor === 2){
    //   setFloorImg(sectionMapImg2F);
    // } else if (floor === 3) {
    //   setFloorImg(sectionMapImg3F);
    // } else if (floor === 5) {
    //   setFloorImg(sectionMapImg5F);
    // } else {
    //   setFloorImg(EntireSectionMapImg);
    // }

  },[])

  return (
    <div className='facilities-container font'>

      <div className='facilities-header'>

      </div>
      
      <div className='facilities-body'>
        <img className='facilities-img' src={sectionMapImg3F} alt=''/>
        <canvas className='points-canvas' ref={naviCanvasRef}></canvas>
        
        <div className='facilities-select'>
          <div className='facilities-search-bar'>
            <div className='facilities-category'>
              <input id="departure" onChange={onChangeDeparture} value={'현위치 : '+ currentPosition+'구역'} placeholder='출발지'/>
            </div>
            <div className='facilities-category'>
              <input id="destination" onChange={onChangeDestination} value={destination} placeholder='목적지'/>          
            </div>
          </div>

          <div className='facilities-item-container'>
            {/* 나중에 for 문으로 컴포넌트 돌리기 */}
            <StoreDetail handleState={handleState}/>
            <StoreDetail handleState={handleState}/>
            <StoreDetail handleState={handleState}/>
            <StoreDetail handleState={handleState}/>
          </div>
        </div>
      </div>
    </div>
  )
}