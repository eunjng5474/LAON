import React, {useState, useEffect} from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router'

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

  const seatsSeat = useSelector((state) => state.seatsSeat)
  // const seatSelect = useSelector((state) => state.seatSelect)

  console.log(seatsSeat)
  let seatUrl = "https://laon.info/images/view/";
  const seatsSeat2 = seatsSeat.substr(1);
  const seatsSeatList = seatsSeat2.split('_');
  console.log(seatsSeatList)
  if (seatsSeatList.length == 2) {
    seatUrl += seatsSeatList[0] +"/"+ seatsSeatList[1] + ".jpg";
  } else if (seatsSeatList.length == 3) {
    seatUrl += seatsSeatList[0] + "-" +seatsSeatList[1] + "/" + seatsSeatList[2] + ".jpg";
  }
  console.log(seatUrl);

  // const seatImg = eval(seatSelect)

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

  // console.log(setSelectSeat)

  return (
    <div className='section-detail-container'>
      <div className='section-detail-header' onClick={toSeat}>
        <img className='go-back-arrow' src={arrow} alt="" />
      </div>

      <div>

        <div className='section-detail-img'>
          <img src={seatUrl}></img>
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

