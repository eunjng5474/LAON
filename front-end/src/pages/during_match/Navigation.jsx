import React, { useEffect, useRef, useState } from "react";
import EntireSectionMapImg from './img/sectionMap.png';
import sectionMapImg2F from './img/sectionMap_2F.png';
import sectionMapImg3F from './img/sectionMap_3F.png';
import sectionMapImg5F from './img/sectionMap_5F.png';
import mapImg from './img/mapImg.png'
import ToSeat from "../../components/ToSeat";
import './styles/Navigation.css'

export default function Navigation() {
  const naviCanvasRef = useRef(null);
  const [floorImg, setFloorImg] = useState('');


  const vertices = [
    // {x: 20, y: 100},
    // {x: 20, y: 220},
    // {x: 120, y: 310},
    // {x: 210, y: 310}
    {
      "pointId": 505,
      "pointName": "5층 13번게이트",
      "type": "G",
      "x": 20,
      "y": 100
      },
    {
      "pointId": 504,
      "pointName": "5층 13번게이트",
      "type": "G",
      "x": 20,
      "y": 220
      },
    {
      "pointId": 504,
      "pointName": "5층 13번게이트",
      "type": "S",
      "x": 120,
      "y": 310
      },
    ];

    useEffect(() => {

      setFloorImg(EntireSectionMapImg);

      // if (floor === 2){
      //   setFloorImg(sectionMapImg2F);
      // } else if (floor === 3) {
      //   setFloorImg(sectionMapImg3F);
      // } else if (floor === 5) {
      //   setFloorImg(sectionMapImg5F);
      // } else {
      //   setFloorImg(EntireSectionMapImg);
      // }


    const naviCanvas = naviCanvasRef.current;
    naviCanvas.width = 328;
    naviCanvas.height = 400;
    const ctx = naviCanvas.getContext("2d")

    function calcWaypoints(vertices){
      var waypoints=[];
      for(var i=1;i<vertices.length;i++){
          if (vertices[i]["type"] === "S"){
            setFloorImg(sectionMapImg3F);
          }

          var pt0=vertices[i-1];
          var pt1=vertices[i];
          var dx=pt1["x"]-pt0["x"];
          var dy=pt1["y"]-pt0["y"];
          for(var j=0;j<100;j++){
              var x=pt0.x+dx*j/100;
              var y=pt0.y+dy*j/100;
              waypoints.push({x:x,y:y});
          }
      }
      return(waypoints);
    }

    var points=calcWaypoints(vertices);

    var t=1;

    animate();


    function animate(){
        if(t<points.length-1){ requestAnimationFrame(animate); }
        ctx.beginPath();
        ctx.moveTo(points[t-1].x,points[t-1].y);
        ctx.lineTo(points[t].x,points[t].y);
        ctx.lineWidth = '12';
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'blue';
        ctx.stroke();
        t++;
    }
  })


  return (
    <div className="navigation-container font">
      <div className="navigation-header">
        <h1>NAVIGATION</h1>
        <ToSeat/>
      </div>
      <div className="navigation-body">
        <img className="points-img" src={floorImg}/>
        <canvas ref={naviCanvasRef}></canvas>
      </div>
    </div>
  )
}