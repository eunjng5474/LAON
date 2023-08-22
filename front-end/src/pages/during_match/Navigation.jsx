import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './styles/Navigation.css';
import pointMap from './img/point.png'
import map2F from './img/map2F.png'
import map3F from './img/map3F.png'
import map5F from './img/map5F.png'
import Wrapper from '../../components/AnimateWrapper';

import bubble from './img/bubble.png'
import {BiArrowBack} from 'react-icons/bi'

import axios from 'axios';

export default function Navigation() {

  const location = useLocation();
  const departure = location.state.departure
  const destination = location.state.destination
  const currentPosition = location.state.currentPosition
  let currentFloor = location.state.currentFloor

  const naviCanvasRef = useRef(null);

  const [floor, setFloor] = useState(map3F)
  const [pointDtoList, setPointDtoList] = useState()
  const [nextPointDtoList, setNextPointDtoList] = useState()
  const [showNextPoints, setshowNextPoints] = useState(false)
  const [noRoute, setNoRoute] = useState(false)
  const [destFloor, setDestFloor] = useState('');
  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);

  const [trigger, setTrigger] = useState(false);

  const [dest, setDest] = useState(null);

  // const style = { left: "100px", color="#FFDF43", size="80"}

  let k = 1;
  const [start, setStart] = useState(true);
  const [end, setEnd] = useState(false);
  // let flag = true;
  
  const imgElem = new Image();
  imgElem.src = bubble;

  const naviGoal = destination;

  function getCoordinate(e) {
    console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
    const x = e.nativeEvent.offsetX
    const y = e.nativeEvent.offsetY
  }

  function goAR() {
    axios.get(`https://laon.info/api/lions/route/${currentPosition ? currentPosition : "U-21"}/${destination}`)
    .then((res) => {
      const naviGoal = res.data.facilityName
      window.location.href = `/ar/${naviGoal}.html`
    })
  }

  function goBack() {
    window.history.back()
  }

  useEffect(() => {
    axios.get(`https://laon.info/api/lions/route/${departure}/${destination}`)
    .then((res) => {
      console.log(res.data)
      
      if(res.data.pointDtoList.length <= 1){
        setNoRoute(true);
        const canvas = document.getElementById('navi-canvas')
        canvas.width = "412"
        canvas.height = "480"
        const ctx = canvas.getContext('2d')
        return
      }

      const idx = res.data.pointDtoList.length - 1
      setDestFloor(parseInt(res.data.pointDtoList[idx].pointId/100))

      if(currentFloor === '2F'){
        setFloor(map2F)
      } else if (currentFloor === '3F'){
        setFloor(map3F)
      } else if (currentFloor === '5F'){
        setFloor(map5F)
      }

      setDest(dest => {
        dest = res.data.facilityName;
        return dest
      })

      for (let i = 0; i < res.data.pointDtoList.length; i++) {
        if (res.data.pointDtoList[i].type === 'S') {

          setPointDtoList(pointDtoList => {
            pointDtoList = res.data.pointDtoList.slice(0, i + 1)
            return pointDtoList
          })
          break

        } else {

          setPointDtoList(pointDtoList => {
            pointDtoList = res.data.pointDtoList
            return pointDtoList
          })

        }
      }

      for (let j = res.data.pointDtoList.length - 1; j >= 0; j--) {
        if (res.data.pointDtoList[j].type === 'S') {

          setNextPointDtoList(nextPointDtoList => {
            nextPointDtoList = res.data.pointDtoList.slice(j, res.data.pointDtoList.length)
            return nextPointDtoList
          })
          break
        }
      }
    })
  }, [])

  useEffect(() => {

    if (pointDtoList) {

      function draw() {
        let wayPoints = [];
        let t = 1;

        function animate() {
          // console.log(1)

          console.log(wayPoints)
          
          if (t < wayPoints.length - 1) {
            requestAnimationFrame(animate);
          }

          if (!nextPointDtoList) {

            if (wayPoints.length > 10) {

              imgElem.addEventListener("load", (e) => {
                if(departure.includes("Food")){

                  ctx.drawImage(imgElem, wayPoints[0].x - 35, wayPoints[0].y - 60, 100, 60)

                } else {

                  ctx.drawImage(imgElem, wayPoints[0].x - 35, wayPoints[0].y - 60, 70, 60)

                }

                ctx.font="18px bold"
                ctx.fillStyle="black"
                ctx.textAlign = "center"
                ctx.fillText(departure, wayPoints[0].x, wayPoints[0].y-30)

              })
            }

            if (t === wayPoints.length - 1) {

                if (dest.includes("Food")) {

                  ctx.drawImage(imgElem, wayPoints[wayPoints.length-1].x - 50, wayPoints[wayPoints.length-1].y - 60, 100, 60)

                } else {

                  ctx.drawImage(imgElem, wayPoints[wayPoints.length-1].x - 35, wayPoints[wayPoints.length-1].y - 60, 70, 60)

                }

                ctx.font="18px bold"
                ctx.fillStyle="black"
                ctx.textAlign = "center"
                ctx.fillText(dest.split('(')[1].slice(0, -1), wayPoints[wayPoints.length-1].x, wayPoints[wayPoints.length-1].y-30)

            }
          }
          
          //// 시작점 마커 그리기
          if (!trigger && wayPoints.length > 10) {
            imgElem.addEventListener("load", (e) => {
              if(departure.includes("Food")){
                ctx.drawImage(imgElem, wayPoints[0].x - 35, wayPoints[0].y - 60, 100, 60)
              } else {
                ctx.drawImage(imgElem, wayPoints[0].x - 35, wayPoints[0].y - 60, 70, 60)
              }
              ctx.font="18px bold"
              ctx.fillStyle="black"
              ctx.textAlign = "center"
              ctx.fillText(departure, wayPoints[0].x, wayPoints[0].y-30)
            })
          }

          //루트 그리기
          ctx.beginPath()  
          ctx.moveTo(wayPoints[t-1].x, wayPoints[t-1].y)
          ctx.lineTo(wayPoints[t].x, wayPoints[t].y)

          //// 도착점 마커 그리기
          if (t === wayPoints.length - 1) {

            if (!trigger) {
              setTimeout(() => {
                setTrigger(true)
              }, 500)

            } else {

              if (dest.includes("Food")) {
                ctx.drawImage(imgElem, wayPoints[wayPoints.length-1].x - 50, wayPoints[wayPoints.length-1].y - 60, 100, 60)
              } else {
                ctx.drawImage(imgElem, wayPoints[wayPoints.length-1].x - 35, wayPoints[wayPoints.length-1].y - 60, 70, 60)
              }

              ctx.font="18px bold"
              ctx.fillStyle="black"
              ctx.textAlign = "center"
              ctx.fillText(dest.split('(')[1].slice(0, -1), wayPoints[wayPoints.length-1].x, wayPoints[wayPoints.length-1].y-30)
            }
              
            let radians = Math.atan((wayPoints[t].y - wayPoints[t-1].y)/(wayPoints[t].x - wayPoints[t-1].x))

            ctx.translate(wayPoints[t].x, wayPoints[t].y)
            ctx.rotate(radians + ((wayPoints[t].x >= wayPoints[t-1].x)?90:-90)*Math.PI/180)

            console.log(wayPoints[t].x, wayPoints[t].y)
            
            ctx.moveTo(0, 0)
            ctx.lineTo(-10, 10);
            ctx.moveTo(0, 0)
            ctx.lineTo(10, 10);
          }
    
          ctx.lineWidth = '10';
          ctx.lineCap = 'round';
          ctx.strokeStyle = '#FFDF43';
          ctx.stroke()
          
          t++;
        }

        const canvas = document.getElementById('navi-canvas')
        canvas.width = "412"
        canvas.height = "480"
        const ctx = canvas.getContext('2d')

        for (k; k < pointDtoList.length; k++) {
          let pt0 = pointDtoList[k - 1];
          let pt1 = pointDtoList[k];
          let dx = pt1.x - pt0.x;
          let dy = pt1.y - pt0.y;
    
          if (dx === 0 && dy === 0) {
            continue;
          }
    
          // 10 숫자 늘리면 속도 느려짐
          for (let j = 0; j < 10; j++) {
            let x = pt0.x + dx * j / 10;
            let y = pt0.y + dy * j / 10;
            wayPoints.push({x: x, y: y});
          }
        }

        console.log('way: ', wayPoints)

        if (wayPoints.length > 1) {
          animate()
          return
        } else {
          setNoRoute(true)
          return
        }

      }

      draw()

    }

  }, [pointDtoList])

  useEffect(() => {
    if (trigger) {

      if(destFloor === 2){
        setFloor(map2F)
      } else if (destFloor === 3){
        setFloor(map3F)
      } else if (destFloor === 5){
        setFloor(map5F)
      }

      setPointDtoList(pointDtoList => {
        pointDtoList = nextPointDtoList
        return pointDtoList
      })
    }
  }, [trigger])


  return (
    <Wrapper>
      <div className='navigation-container font'>
        {/* <HiChatBubbleBottomCenter.Provider value={{color: "#FFDF43", size: "70", className: "bubble", style: {left: '100px'}}}> */}
          {/* <div> */}
            {/* <HiChatBubbleBottomCenter color="#FFDF43" size="70" className="bubble" style={{left: '100px'}}/> */}
          {/* </div> */}
        {/* </HiChatBubbleBottomCenter.Provider> */}
        <div className='navigation-header font'>
          <div className='go-back-container'>
            <BiArrowBack size={36} onClick={goBack}/>
          </div>
          {noRoute ? <h2 className='navigation-text'>출발지와 목적지가 인접해 있습니다</h2> : 
            <div className='navigation-destination'>
              <h2 className='navigation-text'>{destination.split('(')[0]} ({destFloor}층)</h2>
            </div>
          }
        </div>

        <div className='navigation-body'>
          <div className='navigation-route'>
          <img className='navigation-map-img' src={floor} alt=''/>
          <canvas id='navi-canvas' className='navigation-canvas' ref={naviCanvasRef} onClick={getCoordinate}></canvas>
          </div>

          { currentFloor !== destFloor + 'F' ?
          <div className='navigation-button'>
            <button className='to-ar-button' onClick={goAR}>AR로 보기</button>
          </div>
          :
          <div className='navigation-button'>
            <button className='to-ar-button' onClick={goAR}>AR로 보기</button>
          </div>
        }
          </div>
      </div>
    </Wrapper>
  )
}