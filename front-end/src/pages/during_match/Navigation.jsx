import React, { useEffect, useState, useRef } from 'react'
import './styles/Navigation.css';
import navigationMap from './img/navigation.png'
// import EntireSectionMapImg from './img/sectionMap.png';
import map2F from './img/sectionMap_2F.png';
import map3F from './img/sectionMap_3F.png';
import map5F from './img/sectionMap_5F.png';

export default function Navigation() {
  const naviCanvasRef = useRef(null);
  const [floor, setFloor] = useState(map3F)
  const [currentFloor, setCurrentFloor] = useState('3F')

  // const naviGoal = data.facilityName;
  const naviGoal = '파파존스피자(Food Street)';
  const pointDtoList = {
    0: {pointId: 314, pointName: '3-1', type: 'G', x: 20, y: 150},
    1: {pointId: 313, pointName: '3-2', type: 'G', x: 20, y: 200},
    2: {pointId: 312, pointName: '3-3', type: 'G', x: 20, y: 250},
    3: {pointId: 311, pointName: '3-4', type: 'G', x: 20, y: 300},
    4: {pointId: 309, pointName: '3-5', type: 'G', x: 50, y: 330},
    5: {pointId: 308, pointName: '3-6', type: 'G', x: 80, y: 360},
    6: {pointId: 307, pointName: '3-7', type: 'G', x: 110, y: 390},
    7: {pointId: 306, pointName: '3-8', type: 'G', x: 140, y: 400},
    8: {pointId: 305, pointName: '3-9', type: 'G', x: 200, y: 400},
    9: {pointId: 304, pointName: '3-10 기둥 근처 계단', type: 'S', x: 200, y: 420},
    10: {pointId: 227, pointName: 'Food Street 내부 계단', type: 'S', x: 5, y: 160},
    11: {pointId: 225, pointName: '2층 게이트3', type: 'G', x: 20, y: 200},
    12: {pointId: 224, pointName: '2층 게이트2', type: 'G', x: 20, y: 260}
  }

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

  // const vertices = [
  //   {x: 20, y: 150},
  //   {x: 20, y: 260},
  //   {x: 140, y: 360},
  //   {x: 210, y: 360}
  //   ];

  // function selectStore(e) {
  //   setDestination(e.target.id)
  //   axios.get(`https://laon.info/api/lions/route/${currentPosition ? currentPosition : "3-1"}/${e.target.id}`)
  //   .then((res) => {
  //     // AR 변수 지정해주는 함수
  //     setNaviGoal(naviGoal => {
  //       naviGoal = res.data.facilityName
  //       return naviGoal
  //     })

  //     // 길찾기 좌표 지정해주는 함수
  //   })
    
  // }

  function goAR() {
    window.location.href = `/ar/${naviGoal}.html`
  }

  useEffect(() => {
    const naviCanvas = naviCanvasRef.current;
    naviCanvas.width = 412;
    naviCanvas.height = 461;
    const ctx = naviCanvas.getContext("2d")

    function calcWaypoints(vertices){
      var waypoints=[];
      console.log(Object.keys(vertices).length)
      for(var i=1;i<Object.keys(vertices).length;i++){
          // if (vertices[i]["type"] === "S"){
          //   setFloorImg(sectionMapImg3F);
          // }

          var pt0=vertices[i-1];
          var pt1=vertices[i];
          var dx=pt1['x']-pt0['x'];
          var dy=pt1['y']-pt0['y'];
          for(var j=0;j<100;j++){
              var x=pt0.x+dx*j/100;
              var y=pt0.y+dy*j/100;
              waypoints.push({x:x,y:y});
          }
      }
      return(waypoints);
    }

    var points=calcWaypoints(pointDtoList);

    var t=1;

    animate();

    function animate(){
        if(t<points.length-1){ requestAnimationFrame(animate); }
        ctx.beginPath();
        ctx.moveTo(points[t-1].x,points[t-1].y);
        ctx.lineTo(points[t].x,points[t].y);
        ctx.lineWidth = '10';
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#074CA1';
        ctx.stroke();
        t++;
    }

  },[])

  return (
    <div className='navigation-container font'>
      <div className='floor-select-button'>
        <button onClick={selectFloor}>2F</button>
        <button onClick={selectFloor}>3F</button>
        <button onClick={selectFloor}>5F</button>
      </div>

      <div className='navigation-body'>
        <div className='navigation-route'>
          <img className='navigation-map-img' src={navigationMap} alt=''/>
          <canvas className='navigation-canvas' ref={naviCanvasRef}></canvas>
        </div>

        <button className='to-ar-button' onClick={goAR}>AR</button>
      </div>
    </div>
  )
}