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
  // const [currentFloor, setCurrentFloor] = useState('3F')





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

    function draw() {
      if (!pointDtoList) {
        return
      }
  
      const canvas = document.getElementById('navi-canvas')
      canvas.width = "412"
      canvas.height = "462"
      // canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
  
      
      const ctx = canvas.getContext('2d')
  
      ctx.beginPath()
      ctx.moveTo(pointDtoList[0].x, pointDtoList[0].y)
      for (let i = 0; i < pointDtoList.length; i++) {
        ctx.lineTo(pointDtoList[i].x, pointDtoList[i].y)
        if (pointDtoList[i].type === 'S') {
          setPointDtoList(pointDtoList => {
            pointDtoList = nextPointDtoList
            console.log(pointDtoList)
            return pointDtoList
          })
        }
      }
      ctx.stroke()

      // requestAnimationFrame(draw)
    }
    draw()

    axios.get('https://laon.info/api/lions/route/3-1/파파존스')
    .then((res) => {
      for (let i = 0; i < res.data.pointDtoList.length; i++) {
        if (res.data.pointDtoList[i].type === 'S') {
          setPointDtoList(pointDtoList => {
            pointDtoList = res.data.pointDtoList.slice(0, i+1)
            console.log('현재 리스트')
            console.log(pointDtoList)
            return pointDtoList
          })
          setNextPointDtoList(nextPointDtoList => {
            nextPointDtoList = res.data.pointDtoList.slice(i+1, res.data.pointDtoList.length)
            console.log('다음 리스트')
            console.log(nextPointDtoList)
            return nextPointDtoList
          })
          draw()
          break
        }
      }
    })
  }, [])

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