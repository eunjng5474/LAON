import React, {useState, useEffect} from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router'
import img_3_4_1 from './img/3_4_1.jpeg'
// import img_3_4_1 from './images/3-4/1.jpg'

import arrow from './img/arrow.png'
import ImageMap from 'image-map';
import mapImg from './img/sectionMap.png'


import './styles/SectionDetail.css';
import { useSelector } from 'react-redux';


export default function SectionDetail() {
  const { state } = useLocation();
  const seatName = state.sectionSelect;
  const [panoramaSrc, setPanoramaSrc] = useState()
  const navigate = useNavigate();

  function toSeat() {
    navigate('/seat');
  }

  function getCoordinate(event) {
    const x = event.pageX;
    const y = event.pageY;
  }

  useEffect(() => {
    ImageMap('img[useMap]')
  }, [])

  return (
    <div className='section-detail-container'>
      <div className='section-detail-header' onClick={toSeat}>
        <img className='go-back-arrow' src={arrow} alt="" />
      </div>

      <div>

        <div className='section-detail-img'>
          <img src='https://laon.info/images/view/1-1/1.jpg'></img>
        </div>

        <div className='map-controller'>
          <img  src={`https://laon.info/images/sectionSelect/${seatName}.png`} useMap="#image-map"/>

          <map name="image-map">
              <area onClick={getCoordinate} target="" alt="" title="" coords="63,217,63,232,84,232,70,217" shape="poly"/>
              <area onClick={getCoordinate} target="" alt="" title="" coords="137,281,137,306,165,306" shape="poly"/>
              <area onClick={getCoordinate} target="" alt="" title="" coords="137,310,166,310,166,325,137,325" shape="poly"/>
          </map>
        </div>
      </div>
    </div>
  )
}
