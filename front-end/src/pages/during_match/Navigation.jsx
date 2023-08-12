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


  function draw() {
    if (!pointDtoList) {
      return
    }
    const canvas = document.getElementById('navi-canvas')
    canvas.width = "412"
    canvas.height = "462"
    // canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    const ctx = canvas.getContext('2d')


    let waypoints = [];

    console.log(pointDtoList)
    for(let i=1; i<pointDtoList.length(); i++){
      var pt0 = pointDtoList[i-1];
      var pt1 = pointDtoList[i];
      var dx=pt1['x']-pt0['x'];
      var dy=pt1['y']-pt0['y'];
      for(var j=0;j<30;j++){
          var x=pt0.x+dx*j/30;
          var y=pt0.y+dy*j/30;
          waypoints.push({x:x,y:y});
      }
      return(waypoints);
    }


  //   function animate(){
  //     if(t<points.length-1){ requestAnimationFrame(animate); }
  //     ctx.beginPath();
  //     ctx.moveTo(points[t-1].x,points[t-1].y);
  //     ctx.lineTo(points[t].x,points[t].y);
  //     ctx.lineWidth = '10';
  //     ctx.lineCap = 'round';
  //     ctx.strokeStyle = '#074CA1';
  //     ctx.stroke();
  //     t++;
  // }


    // ctx.beginPath()
    // ctx.moveTo(pointDtoList[0].x, pointDtoList[0].y)
    // for (let i = 0; i < pointDtoList.length; i++) {
    //   ctx.lineTo(pointDtoList[i].x, pointDtoList[i].y)
    //   // if (pointDtoList[i].type === 'S') {
    //   //   setPointDtoList(pointDtoList => {
    //   //     pointDtoList = nextPointDtoList
    //   //     console.log(pointDtoList)
    //   //     // setFloor(map2F)
    //   //     // draw()
    //   //     return pointDtoList
    //   //   })
    //   // }
    // }
    // ctx.stroke()

    // requestAnimationFrame(draw)
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
            console.log('현재 리스트')
            console.log(pointDtoList)
            // draw()
            return pointDtoList
          })
          setNextPointDtoList(nextPointDtoList => {
            nextPointDtoList = res.data.pointDtoList.slice(i+1, res.data.pointDtoList.length)
            console.log('다음 리스트')
            console.log(nextPointDtoList)
            // draw()
            return nextPointDtoList
          })
          // setshowNextPoints(true)
          break
        }
      }
    })

  }, [])

  useEffect(() => {
    // draw()
    
    // var points = draw(pointDtoList);
    // var t = 1;
    // animate()

  //   function animate(){

  //     const canvas = document.getElementById('navi-canvas')
  //     canvas.width = "412"
  //     canvas.height = "462"
  //     // canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
  //     const ctx = canvas.getContext('2d')

  //     if(t<points.length-1){ requestAnimationFrame(animate); }
  //     ctx.beginPath();
  //     ctx.moveTo(points[t-1].x,points[t-1].y);
  //     ctx.lineTo(points[t].x,points[t].y);
  //     ctx.lineWidth = '10';
  //     ctx.lineCap = 'round';
  //     ctx.strokeStyle = '#074CA1';
  //     ctx.stroke();
  //     t++;
  // }

    setshowNextPoints(true)


  }, [pointDtoList])

  useEffect(() => {
    if(showNextPoints){
      setTimeout(() => {
        setFloor(map2F)
        setPointDtoList(nextPointDtoList)
        // draw()
      }, 2000)
    }
  }, [nextPointDtoList])


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