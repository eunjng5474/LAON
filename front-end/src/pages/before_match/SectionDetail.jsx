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
  const seatName = state;
  const [panoramaSrc, setPanoramaSrc] = useState()
  const navigate = useNavigate();


  const seatsSeat = useSelector((state) => state.seatsSeat)
  // const seatSelect = useSelector((state) => state.seatSelect)

  console.log(seatsSeat)
  let seatUrl = "laon.info/images/view/";
  const seatsSeat2 = seatsSeat.substr(1);
  const seatsSeatList = seatsSeat2.split('_');
  console.log(seatsSeatList)
  if (seatsSeatList.length == 2) {
    seatUrl += seatsSeatList[0] +"/"+ seatsSeatList[1];
  } else if (seatsSeatList.length == 3) {
    seatUrl += seatsSeatList[0] + "-" +seatsSeat[1] + "/" + seatsSeatList[2];
  }

  // const seatImg = eval(seatSelect)

  function toSeat() {
    navigate('/seat');
    // console.log(selectSeat);
  }

  function getCoordinate(event) {
    // const child = event.target.children[0]
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
          <img  src='https://laon.info/images/sectionSelect/SKY1.png' useMap="#image-map"/>

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
