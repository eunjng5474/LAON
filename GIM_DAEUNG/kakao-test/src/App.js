import { React, useState } from "react";
import { Map, Polygon, Roadview } from "react-kakao-maps-sdk"
import './App.css'


function App(){
  const [lat, setLat] = useState(35.194174072227185)
  const [lng, setLng] = useState(129.06148210890817)
  return (
    <div className="container">
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 35.194087985228286,
          lng: 129.06151012250862,
        }}
        style={{
          // 지도의 크기
          width: "450px",
          height: "450px",
        }}
        level={2} // 지도의 확대 레벨
      >
        <Polygon
          path={[
            { lat: 35.194656133362805, lng: 129.0616097351521  },
            { lat: 35.19472810146162, lng: 129.06162510232613 },
            { lat: 35.19471590739351, lng: 129.06167968407942 },
            { lat: 35.19461949520382, lng: 129.06165254675628 },
          ]}
          strokeWeight={3} // 선의 두께입니다
          strokeColor={"#39DE2A"} // 선의 색깔입니다
          strokeOpacity={0.8} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle={"longdash"} // 선의 스타일입니다
          fillColor={"#A2FF99"} // 채우기 색깔입니다
          fillOpacity={0.7} // 채우기 불투명도 입니다
          onClick = {() => {
              setLat(35.194680437297116)
              setLng(129.06164585359153)
            }
          }
        />
      </Map>
      <Roadview // 로드뷰를 표시할 Container
        position={{
          // 지도의 중심좌표
          lat: lat,
          lng: lng,
          radius: 50,
        }}
        style={{
          // 지도의 크기
          width: "1000px",
          height: "450px",
        }}
      />
    </div>
  );
}

export default App;