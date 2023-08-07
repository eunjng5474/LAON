import React, { useRef, useEffect, component } from 'react';
import './styles/SeatMap.css'
import ImageMap from 'image-map';
import mapImg from './img/sectionMap.png'

export default function SeatMap() {

  function resize_Image() {

  }

  function getCoordinate(event) {
    // const child = event.target.children[0]
    const x = event.pageX;
    const y = event.pageY;
  }

  useEffect(() => {
    ImageMap('img[useMap]')
  }, [])

  return (
    <div className='map-controller'>
      <img  src={mapImg} useMap="#image-map"/>

      <map name="image-map">
          <area onClick={getCoordinate} target="" alt="" title="" coords="63,217,63,232,84,232,70,217" shape="poly"/>
          <area onClick={getCoordinate} target="" alt="" title="" coords="137,281,137,306,165,306" shape="poly"/>
          <area onClick={getCoordinate} target="" alt="" title="" coords="137,310,166,310,166,325,137,325" shape="poly"/>
      </map>
    </div>
  )
}