import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './styles/Navigation.css';
import navigationMap from './img/navigation.png';
// import EntireSectionMapImg from './img/sectionMap.png';
import map2F from './img/coordinate_2F.png';
import map3F from './img/coordinate_3F.png';
import map5F from './img/coordinate_5F.png';
import axios from 'axios';

export default function Navigation() {

  const location = useLocation();
  const departure = location.state.departure
  const destination = location.state.destination
  let currentFloor = location.state.currentFloor

  const naviCanvasRef = useRef(null);
  const [floor, setFloor] = useState(navigationMap)
  const [pointDtoList, setPointDtoList] = useState()
  const [nextPointDtoList, setNextPointDtoList] = useState()

  const [showNextPoints, setshowNextPoints] = useState(false)
  const [noRoute, setNoRoute] = useState(false)

  let i = 1;
  
  function startDraw(list) {
    // let currentFloor = list[0].pointId[0]
    // console.log(currentFloor)
    // setFloor(`map${currentFloor}F`)
    let waypoints = [];

    if (!pointDtoList) {
      return
    }
    const canvas = document.getElementById('navi-canvas')
    canvas.width = "412"
    canvas.height = "462"
    const ctx = canvas.getContext('2d')

    // let i=1;
    for(i; i < list.length; i++){
    // for(let i=1; i<pointDtoList.length; i++){
      let pt0 = list[i-1];
      let pt1 = list[i];
      let dx = pt1.x - pt0.x;
      let dy = pt1.y - pt0.y;

      // 10 숫자 늘리면 속도 느려짐
      for(let j=0; j<10; j++){
        let x=pt0.x+dx*j/10;
        let y=pt0.y+dy*j/10;
        waypoints.push({x:x, y:y});
      }
    }
    
    let t=1;
    draw();

    // ctx.beginPath()
    // ctx.moveTo(waypoints[0].x, waypoints[0].y)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    function draw() {
      if (t < waypoints.length-1) {
        requestAnimationFrame(draw);
      }
      else if (t === waypoints.length - 1 && nextPointDtoList) {
        setshowNextPoints(true)
      }
      ctx.beginPath()
      ctx.moveTo(waypoints[t-1].x, waypoints[t-1].y)
        ctx.lineTo(waypoints[t].x, waypoints[t].y)
        ctx.lineWidth = '10';
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#074CA1';
        ctx.stroke()
        t++;

        // 이러면 속도는 느려지는데 끊겨서 그려지는 듯한 느낌
        // if( i < pointDtoList.length){
        //     setTimeout(() => {
        //       requestAnimationFrame(draw)
        //     }, 50)
        //   }
        // }
    }

    // draw()
    // if(i === pointDtoList.length){
    //   setshowNextPoints(true)
    // }
  }




  const naviGoal = destination;
  // const naviGoal = '파파존스피자(Food Street)';


  // function getCoordinate(e) {
  //   console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
  //   const x = e.nativeEvent.offsetX
  //   const y = e.nativeEvent.offsetY
  // }

  function goAR() {
    window.location.href = `/ar/${naviGoal}.html`
  }

  // const [floorIdx, setFloorIdx] = useState(0);
  // 함수에 인자로 넘겨주는 식으로 하기

  useEffect(() => {
    console.log(currentFloor)
    if(currentFloor === '2F'){
      setFloor(map2F)
    } else if (currentFloor === '3F'){
      setFloor(map3F)
    } else if (currentFloor === '5F'){
      setFloor(map5F)
    }

    axios.get(`https://laon.info/api/lions/route/${departure}/${destination}`)
    .then((res) => {
      console.log(res)
      if(res.data.pointDtoList.length !== 1) {
        let flag = true
        for (let i = 0; i < res.data.pointDtoList.length; i++) {
          if (res.data.pointDtoList[i].type === 'S') {
            flag = false
            setPointDtoList(pointDtoList => {
              pointDtoList = res.data.pointDtoList.slice(0, i+1)
              console.log('현재 리스트')
              console.log(pointDtoList)
              // startDraw(pointDtoList)
              return pointDtoList
            })
            setNextPointDtoList(nextPointDtoList => {
              nextPointDtoList = res.data.pointDtoList.slice(i+1, res.data.pointDtoList.length)
              console.log('다음 리스트')
              console.log(nextPointDtoList)
              // startDraw(nextPointDtoList)
              return nextPointDtoList
            })
            // setshowNextPoints(true)
            break
          }
          if (flag && i === res.data.pointDtoList.length - 1) {
            setPointDtoList(pointDtoList => {
              pointDtoList = res.data.pointDtoList
              // console.log('현재 리스트')
              // console.log(pointDtoList)
              // startDraw(pointDtoList)
              return pointDtoList
            })
          }
        }
      }
      else {
        setNoRoute(true)
      }
    })

  }, [])

  useEffect(() => {

    startDraw(pointDtoList)
    // setshowNextPoints(true)
  }, [pointDtoList])

  useEffect(() => {
    if(showNextPoints){
      setTimeout(() => {
        currentFloor = parseInt(nextPointDtoList[0].pointId/100)
        if(currentFloor === 2){
          setFloor(map2F)
        } else if (currentFloor === 3){
          setFloor(map3F)
        } else if (currentFloor === 5){
          setFloor(map5F)
        }
        setPointDtoList(nextPointDtoList)
        startDraw(nextPointDtoList)
      }, 500)
    }
  }, [nextPointDtoList, showNextPoints])


  return (
    <div className='navigation-container font'>

      <div className='navigation-body'>
        <div className='navigation-route'>
          <img className='navigation-map-img' src={floor} alt=''/>
          <canvas id='navi-canvas' className='navigation-canvas' ref={naviCanvasRef}></canvas>
        </div>

        <button className='to-ar-button' onClick={goAR}>AR</button>
        <div className='navigation-text font'>
          {noRoute ? <h3>출발지와 목적지가 인접해 있습니다</h3> : 
            <div>
              <h3>출발지: {departure}</h3>
              <h3>목적지: {destination}</h3>
            </div>
          }
        </div>
      </div>
    </div>
  )
}