import React, { useEffect, useState, useRef } from 'react'
import './styles/Navigation.css';
import navigationMap from './img/navigation.png'
// import EntireSectionMapImg from './img/sectionMap.png';
import map2F from './img/coordinate_2F.png';
import map3F from './img/coordinate_3F.png';
import map5F from './img/coordinate_5F.png';
import axios from 'axios'

export default function Navigation() {
  const naviCanvasRef = useRef(null);
  const [floor, setFloor] = useState(map3F)
  const [pointDtoList, setPointDtoList] = useState()
  const [nextPointDtoList, setNextPointDtoList] = useState()

  const [showNextPoints, setshowNextPoints] = useState(false)
  // const [currentFloor, setCurrentFloor] = useState('3F')

  let i = 1;
  
  function startDraw(list) {
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

    console.log(waypoints)

    // ctx.beginPath()
    // ctx.moveTo(waypoints[0].x, waypoints[0].y)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    function draw() {
      if (t < waypoints.length-1) {
        requestAnimationFrame(draw);
      }
      else if (t === waypoints.length - 1) {
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




  // const naviGoal = data.facilityName;
  const naviGoal = '파파존스피자(Food Street)';


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

    axios.get('https://laon.info/api/lions/route/3-1/파파존스')
    .then((res) => {
      for (let i = 0; i < res.data.pointDtoList.length; i++) {
        if (res.data.pointDtoList[i].type === 'S') {
          setPointDtoList(pointDtoList => {
            pointDtoList = res.data.pointDtoList.slice(0, i+1)
            // console.log('현재 리스트')
            // console.log(pointDtoList)
            // startDraw(pointDtoList)
            return pointDtoList
          })
          setNextPointDtoList(nextPointDtoList => {
            nextPointDtoList = res.data.pointDtoList.slice(i+1, res.data.pointDtoList.length)
            // console.log('다음 리스트')
            // console.log(nextPointDtoList)
            // startDraw(nextPointDtoList)
            return nextPointDtoList
          })
          // setshowNextPoints(true)
          break
        }
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
        setFloor(map2F)
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
      </div>
    </div>
  )
}