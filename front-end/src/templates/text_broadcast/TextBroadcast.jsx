import { useEffect, useRef, useState } from 'react';
import './TextBroadcast.css'

export default function TextBroadcast() {
  const textBroadCanvasRef = useRef(null);

  const nowTextBroadcast = "피렐라 : 좌중간 2루타";

  useEffect(() => {
    const textBroadCanvas = textBroadCanvasRef.current;
    textBroadCanvas.width = window.innerWidth;
    textBroadCanvas.height = window.innerHeight * 0.08;

    function drawBroad() {
      const ctx = textBroadCanvasRef.current.getContext('2d');
      ctx.beginPath();      
      ctx.font = 20 + 'px ' + 'Arial';
      ctx.fillStyle = 'yellow';
      ctx.fillText('<  ' + nowTextBroadcast, 20, 40);
      ctx.closePath();
    }

    drawBroad()

    // const canvas = document.getElementById("canvas");
    // canvas.style.border = 
  }, []);

  return (
    <div className='text-broadcast-container'>
      <canvas id='textBroadCanvas' ref={textBroadCanvasRef}></canvas>
    </div>
  )
}