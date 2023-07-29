import { useEffect, useRef, useState } from 'react';
import './StrikeZone.css';

function StrikeZone() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  
  const [ctx, setCtx] = useState();

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function drawBall() {
      const context = canvas.getContext("2d");
      context.beginPath();
      context.arc(100, 100, 100, 0, Math.PI);
      context.fillStyle = 'green';
      context.fill();
      context.closePath();
    }

    drawBall()

    setCtx(contextRef.current)
  }, []);

  console.log("ctx :", ctx);

  return (
    <div className='strike-zone-container'>
      <h1>STRIKEZONE</h1>
      <canvas ref={canvasRef}>

      </canvas>
    </div>
  )
}

export default StrikeZone;