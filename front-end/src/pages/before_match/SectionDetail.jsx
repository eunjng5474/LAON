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
  const seatName = state.selectSeat;
  const sectionName = state.sectionSelect;
  const [panoramaSrc, setPanoramaSrc] = useState()
  const navigate = useNavigate();

  let seatUrl = "https://laon.info/images/view/";
  const seatsSeat2 = seatName.substr(1);
  const seatsSeatList = seatsSeat2.split('_');
  console.log("list",seatsSeatList)
  if (seatsSeatList.length == 2) {
    seatUrl += seatsSeatList[0] +"/"+ seatsSeatList[1] + ".jpg";
  } else if (seatsSeatList.length == 3) {
    seatUrl += seatsSeatList[0] + "-" +seatsSeatList[1] + "/" + seatsSeatList[2] + ".jpg";
  }
  // console.log(seatUrl);


  function toSeat() {
    navigate('/seat');
  }

  function getCoordinate(event) {
    const x = event.pageX;
    const y = event.pageY;
  }

  function selectSeat(event){
    console.log(event.target.title)
    // const seatTitle = event.target.title
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
          <img src={seatUrl}></img>
        </div>
          </div>

        <div className='map-controller'>
          <img  src={`https://laon.info/images/sectionSelect/${sectionName}.png`} useMap={`#${sectionName}`}/>

          <map name="INFIELD3">
            <area target="" onClick={selectSeat} alt="3_12_1" title="3_12_1" coords="179,17,180,59,218,60" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_11_1" title="3_11_1" coords="183,109,221,109,221,65,183,66" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_10_2" title="3_10_2" coords="181,160,221,160,221,114,181,115" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_9_3" title="3_9_3" coords="179,211,220,211,220,166,180,166" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_8_3" title="3_8_3" coords="180,260,221,260,220,216,181,216" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_10_1" title="3_10_1" coords="229,160,258,160,258,116,230,117" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_9_2" title="3_9_2" coords="231,209,286,209,286,166,230,166" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_8_2" title="3_8_2" coords="229,259,286,259,285,218,231,218" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_9_1" title="3_9_1" coords="294,210,352,211,349,192,327,191,296,168" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_8_1" title="3_8_1" coords="294,259,351,263,350,216,294,216" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_12_2" title="3_12_2" coords="171,62,160,61,160,16,171,17" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_11_2" title="3_11_2" coords="171,66,163,66,163,109,171,109" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_10_3" title="3_10_3" coords="173,115,159,115,159,154,171,156,173,137" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_9_4" title="3_9_4" coords="175,166,163,164,164,208,174,209" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_8_4" title="3_8_4" coords="173,216,161,216,162,259,173,260" shape="poly"/>
          </map>

          <map name="image-map">
            <area target="" onClick={selectSeat} alt="3_7_1" title="3_7_1" coords="274,10,273,46,229,44,230,10" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_7_2" title="3_7_2" coords="223,10,223,45,178,45,178,10" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_7_3" title="3_7_3" coords="171,11,169,45,139,45,139,10" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_7_4" title="3_7_4" coords="133,10,133,42,126,43,125,11" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_6_1" title="3_6_1" coords="273,50,273,61,232,83,229,51" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_6_2" title="3_6_2" coords="221,85,223,50,178,50,177,104" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_6_3" title="3_6_3" coords="169,107,168,51,138,50,138,122" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_6_4" title="3_6_4" coords="134,120,134,51,125,51,126,123" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_5_1" title="3_5_1" coords="243,96,272,66,232,85" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_5_2" title="3_5_2" coords="209,136,236,105,222,91,179,110" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_5_3" title="3_5_3" coords="180,164,202,140,168,113,137,127" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_5_4" title="3_5_4" coords="173,174,178,167,133,127,125,129" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_4_1" title="3_4_1" coords="269,121,299,88,276,67,246,98" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_4_2" title="3_4_2" coords="235,160,263,128,240,107,212,138" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_4_3" title="3_4_3" coords="203,195,232,164,205,144,177,174" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_3_1" title="3_3_1" coords="296,143,324,112,301,92,273,124" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_3_2" title="3_3_2" coords="264,184,291,153,267,131,239,163" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_3_3" title="3_3_3" coords="227,221,256,189,233,168,202,199" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_2_1" title="3_2_1" coords="324,169,352,139,327,117,299,147" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_2_2" title="3_2_2" coords="291,208,318,177,294,153,266,186" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_2_3" title="3_2_3" coords="264,237,285,213,259,192,237,216" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_2_4" title="3_2_4" coords="255,248,260,242,233,219,230,226" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_1_1" title="3_1_1" coords="339,185,369,155,355,141,327,173" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_1_2" title="3_1_2" coords="307,223,334,191,321,179,293,210" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_1_3" title="3_1_3" coords="280,249,299,227,287,216,265,239" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_1_4" title="3_1_4" coords="272,260,277,254,262,244,257,249" shape="poly"/>
          </map>

          <map name="ZBRO3">
            <area target="" onClick={selectSeat} alt="3_4_1" title="3_4_1" coords="287,38,273,27,247,55,260,68" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_4_2" title="3_4_2" coords="254,74,241,61,214,92,228,105" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_4_3" title="3_4_3" coords="222,111,209,99,182,127,196,139" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_3_1" title="3_3_1" coords="313,64,289,43,262,73,285,95" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_3_2" title="3_3_2" coords="281,100,258,79,232,107,254,129" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_3_3" title="3_3_3" coords="249,135,225,113,206,136,229,156" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_3_4" title="3_3_4" coords="227,160,203,139,199,147,220,164" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_2_1" title="3_2_1" coords="337,84,315,65,289,95,310,117" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_2_2" title="3_2_2" coords="305,123,285,101,257,132,279,150" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_2_3" title="3_2_3" coords="274,158,252,139,233,158,256,178" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_2_4" title="3_2_4" coords="252,182,230,163,224,169,244,187" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_1_1" title="3_1_1" coords="358,105,342,89,316,120,340,142" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_1_2" title="3_1_2" coords="337,150,310,125,284,156,321,188" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3_1_3" title="3_1_3" coords="319,198,277,159,253,189,303,234" shape="poly"/>
          </map>

          <map name="OUTFIELD1">
            <area target="" onClick={selectSeat} alt="TL_9_1" title="TL_9_1" coords="239,33,240,13,216,13,216,30" shape="poly"/>
            <area target="" onClick={selectSeat} alt="LF_10_1" title="LF_10_1" coords="240,83,239,54,218,52,218,83" shape="poly"/>
            <area target="" onClick={selectSeat} alt="LF_9_1" title="LF_9_1" coords="216,85,215,54,194,52,178,65,208,94" shape="poly"/>
            <area target="" onClick={selectSeat} alt="LF_8_1" title="LF_8_1" coords="204,96,176,71,162,84,190,109" shape="poly"/>
            <area target="" onClick={selectSeat} alt="LF_7_1" title="LF_7_1" coords="186,113,159,86,146,99,173,126" shape="poly"/>
            <area target="" onClick={selectSeat} alt="LF_6_1" title="LF_6_1" coords="170,129,143,102,130,117,155,143" shape="poly"/>
            <area target="" onClick={selectSeat} alt="LF_5_1" title="LF_5_1" coords="154,146,128,119,114,134,140,159" shape="poly"/>
            <area target="" onClick={selectSeat} alt="LF_4_1" title="LF_4_1" coords="138,163,109,137,97,150,126,176" shape="poly"/>
            <area target="" onClick={selectSeat} alt="LF_3_1" title="LF_3_1" coords="120,179,95,154,82,165,106,191" shape="poly"/>
            <area target="" onClick={selectSeat} alt="LF_2_1" title="LF_2_1" coords="104,194,80,169,64,182,93,207" shape="poly"/>
            <area target="" onClick={selectSeat} alt="LF_1_1" title="LF_1_1" coords="88,210,61,186,48,198,74,225" shape="poly"/>
            <area target="" onClick={selectSeat} alt="ML_10_1" title="ML_10_1" coords="240,105,240,94,219,92,219,103" shape="poly"/>
            <area target="" onClick={selectSeat} alt="ML_8_1" title="ML_8_1" coords="216,106,213,94,194,113,201,119" shape="poly"/>
            <area target="" onClick={selectSeat} alt="ML_7_1" title="ML_7_1" coords="198,124,191,118,178,132,183,137" shape="poly"/>
            <area target="" onClick={selectSeat} alt="ML_6_1" title="ML_6_1" coords="183,141,175,135,164,147,171,155" shape="poly"/>
            <area target="" onClick={selectSeat} alt="ML_5_1" title="ML_5_1" coords="164,158,157,151,144,163,154,172" shape="poly"/>
            <area target="" onClick={selectSeat} alt="ML_4_1" title="ML_4_1" coords="151,174,142,168,130,182,137,188" shape="poly"/>
            <area target="" onClick={selectSeat} alt="ML_3_1" title="ML_3_1" coords="133,191,126,184,111,199,119,204" shape="poly"/>
            <area target="" onClick={selectSeat} alt="ML_2_1" title="ML_2_1" coords="117,207,109,202,96,215,104,221" shape="poly"/>
            <area target="" onClick={selectSeat} alt="ML_1_1" title="ML_1_1" coords="100,224,94,216,81,229,88,239" shape="poly"/>
            <area target="" onClick={selectSeat} alt="TL_0_1" title="TL_0_1" coords="60,218,37,198,24,212,44,232" shape="poly"/>
            <area target="" onClick={selectSeat} alt="TL_0_2" title="TL_0_2" coords="84,244,61,224,50,236,71,255" shape="poly"/>
          </map>

          <map name="DDANG">
            <area target="" onClick={selectSeat} alt="ROOFTOP_2_3" title="ROOFTOP_2_3" coords="207,125,255,75,212,33,162,82" shape="poly"/>
            <area target="" onClick={selectSeat} alt="ROOFTOP_2_2" title="ROOFTOP_2_2" coords="193,137,149,93,101,139,144,184" shape="poly"/>
            <area target="" onClick={selectSeat} alt="ROOFTOP_2_1" title="ROOFTOP_2_1" coords="128,199,86,155,36,202,81,245" shape="poly"/>
          </map>

          <map name="SKY1">
            <area target="" onClick={selectSeat} alt="SKY1_4_1" title="SKY1_4_1" coords="9,19,9,49,49,47,51,19" shape="poly"/>
            <area target="" onClick={selectSeat} alt="SKY1_4_3" title="SKY1_4_3" coords="8,80,49,80,51,53,9,53" shape="poly"/>
            <area target="" onClick={selectSeat} alt="SKY1_4_3" title="SKY1_4_3" coords="9,111,52,111,50,86,9,86" shape="poly"/>
            <area target="" onClick={selectSeat} alt="SKY1_4_4" title="SKY1_4_4" coords="9,145,51,145,51,120,8,119" shape="poly"/>
            <area target="" onClick={selectSeat} alt="SKY1_4_5" title="SKY1_4_5" coords="10,178,49,178,49,151,9,151" shape="poly"/>
            <area target="" onClick={selectSeat} alt="SKY1_4_6" title="SKY1_4_6" coords="9,213,52,214,51,186,9,185" shape="poly"/>
            <area target="" onClick={selectSeat} alt="SKY1_4_7" title="SKY1_4_7" coords="9,263,51,243,51,223,11,222" shape="poly"/>
            <area target="" onClick={selectSeat} alt="U_31_1" title="U_31_1" coords="56,47,65,47,68,19,56,18" shape="poly"/>
            <area target="" onClick={selectSeat} alt="U_30_1" title="U_30_1" coords="57,82,65,81,65,54,56,54" shape="poly"/>
            <area target="" onClick={selectSeat} alt="U_29_1" title="U_29_1" coords="55,111,65,111,66,87,57,86" shape="poly"/>
            <area target="" onClick={selectSeat} alt="U_28_1" title="U_28_1" coords="56,147,67,147,65,120,56,120" shape="poly"/>
            <area target="" onClick={selectSeat} alt="U_27_1" title="U_27_1" coords="56,178,66,178,66,154,57,152" shape="poly"/>
            <area target="" onClick={selectSeat} alt="U_26_1" title="U_26_1" coords="56,213,65,213,65,186,56,186" shape="poly"/>
            <area target="" onClick={selectSeat} alt="U_25_1" title="U_25_1" coords="56,240,66,237,65,222,57,222" shape="poly"/>
          </map>

          <map name="SKY2">
            <area target="" onClick={selectSeat} alt="SKY2_1" title="SKY2_1" coords="8,43,37,68,68,36,54,20" shape="poly"/>
            <area target="" onClick={selectSeat} alt="SKY2_2" title="SKY2_2" coords="40,70,59,90,91,58,70,39" shape="poly"/>
            <area target="" onClick={selectSeat} alt="SKY2_3" title="SKY2_3" coords="61,92,78,109,111,76,93,58" shape="poly"/>
            <area target="" onClick={selectSeat} alt="SKY2_4" title="SKY2_4" coords="83,113,101,129,133,98,113,80" shape="poly"/>
            <area target="" onClick={selectSeat} alt="SKY2_5" title="SKY2_5" coords="103,132,123,148,155,118,134,99" shape="poly"/>
            <area target="" onClick={selectSeat} alt="SKY3_1" title="SKY3_1" coords="126,152,144,171,176,138,157,121" shape="poly"/>
            <area target="" onClick={selectSeat} alt="SKY3_2" title="SKY3_2" coords="147,174,165,191,196,158,177,142" shape="poly"/>
            <area target="" onClick={selectSeat} alt="SKY3_3" title="SKY3_3" coords="169,193,188,211,217,179,200,161" shape="poly"/>
            <area target="" onClick={selectSeat} alt="SKY3_4" title="SKY3_4" coords="190,212,210,232,240,200,221,181" shape="poly"/>
            <area target="" onClick={selectSeat} alt="SKY3_5" title="SKY3_5" coords="209,234,239,258,257,217,241,201" shape="poly"/>
            <area target="" onClick={selectSeat} alt="U_24_1" title="U_24_1" coords="58,18,72,34,78,26,68,16" shape="poly"/>
            <area target="" onClick={selectSeat} alt="U_23_1" title="U_23_1" coords="75,35,92,51,99,47,80,29" shape="poly"/>
            <area target="" onClick={selectSeat} alt="U_22_1" title="U_22_1" coords="94,54,113,73,119,66,102,49" shape="poly"/>
            <area target="" onClick={selectSeat} alt="U_21_1" title="U_21_1" coords="115,75,134,96,142,88,123,71" shape="poly"/>
            <area target="" onClick={selectSeat} alt="U_20_1" title="U_20_1" coords="137,97,155,115,163,110,145,92" shape="poly"/>
            <area target="" onClick={selectSeat} alt="U_19_1" title="U_19_1" coords="160,119,178,137,184,130,166,113" shape="poly"/>
            <area target="" onClick={selectSeat} alt="U_18_1" title="U_18_1" coords="181,139,199,156,206,147,188,133" shape="poly"/>
            <area target="" onClick={selectSeat} alt="U_17_1" title="U_17_1" coords="202,158,220,177,227,170,208,153" shape="poly"/>
            <area target="" onClick={selectSeat} alt="U_16_1" title="U_16_1" coords="222,179,241,196,248,190,230,173" shape="poly"/>
            <area target="" onClick={selectSeat} alt="U_15_1" title="U_15_1" coords="246,198,260,211,262,204,251,192" shape="poly"/>
          </map>

          <map name="EXCITING3">
            <area target="" onClick={selectSeat} alt="3E_3_1" title="3E_3_1" coords="412,85,498,87,413,8" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3E_2_1" title="3E_2_1" coords="416,145,499,145,501,97,412,93" shape="poly"/>
            <area target="" onClick={selectSeat} alt="3E_1_1" title="3E_1_1" coords="413,152,499,153,504,251,410,176" shape="poly"/>
          </map>
        </div>
      </div>
  )
}

