import React, { useRef, useEffect, component } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import './styles/SeatMap.css'
import ImageMap from 'image-map';
import mapImg from './img/sectionMap.png'

export default function SeatMap() {


  function preventZoom(){
    function listener(e){
      if(e.touches.length > 1){
        e.preventDefault();
      }
    }

    document.addEventListener('touchmove', listener, {passive: false})
  }
  // preventZoom();


  function getCoordinate(event) {
    // const child = event.target.children[0]
    const x = event.pageX;
    const y = event.pageY;
    console.log(x)
    console.log(y)
    let section_name = '';
    if (195 <= x && x <= 260 && 390 <= y && y <= 530) {
      console.log(x, y);
    } else if (true) {
      console.log(2)
    } 
  }

  useEffect(() => {
    ImageMap('img[usemap]')
  }, [])

  return (
    <TransformWrapper
      initialScale={3}
      initialPositionX={-50}
      initialPositionY={-630}
    >
      <TransformComponent>
        <img  src={mapImg} usemap="#image-map"/>

        <map name="image-map">
            <area onClick={getCoordinate} target="" alt="" title="" href="" coords="63,217,63,232,84,232,70,217" shape="poly"/>
            <area onClick={getCoordinate} target="" alt="" title="" href="" coords="137,281,137,306,165,306" shape="poly"/>
            <area onClick={getCoordinate} target="" alt="" title="" href="" coords="137,310,166,310,166,325,137,325" shape="poly"/>
        </map>
      </TransformComponent>
    </TransformWrapper>
  )
}