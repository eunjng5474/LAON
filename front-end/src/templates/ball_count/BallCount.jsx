import { useEffect, useRef, useState } from 'react';

export default function BallCount() {
  const ballCountCanvasRef = useRef(null);
  const textCanvasRef = useRef(null);
  const strikeZoneCanvasRef = useRef(null);
  // const contextRef = useRef(null);

  const nowBallCount = 2;
  const nowStrikeCount = 1;
  const nowOutCount = 2;
  
  // const [ctx, setCtx] = useState();

  useEffect(() => {
    const textCanvas = textCanvasRef.current;
    textCanvas.width = window.innerWidth * 0.11;
    textCanvas.height = window.innerHeight * 0.25;

    const bcntCanvas = ballCountCanvasRef.current;
    bcntCanvas.width = window.innerWidth * 0.39;
    bcntCanvas.height = window.innerHeight * 0.25;

    const stzoneCanvas = strikeZoneCanvasRef.current;
    stzoneCanvas.width = window.innerWidth*0.45;
    stzoneCanvas.height = window.innerHeight * 0.25;



    function drawText() {
      const textCtx = textCanvasRef.current.getContext("2d");
      textCtx.beginPath();
      textCtx.font = 40 + 'px ' + 'Arial';
      textCtx.fillStyle = 'white';
      textCtx.fillText('B', 5, 50);
      textCtx.fillText('S', 5, 115);
      textCtx.fillText('O', 5, 180);
      // 수직 왜 안 맞는 것 같지,, 확인하기

      textCtx.closePath();
    }

    function drawBallCount() {
      for(let i=0; i<3; i++) {
        const ctx = ballCountCanvasRef.current.getContext("2d");
        ctx.beginPath();
        let x = 20 + (i * 50);
        ctx.arc(x, 35, 20, 0, Math.PI * 2);
        if(i<nowBallCount){
          ctx.fillStyle = 'green';
        } else {
          ctx.fillStyle = 'gray';
        }
        ctx.fill();
        ctx.closePath();
      }
    }

    function drawStrikeCount() {
      for(let i=0; i<2; i++) {
        const ctx = ballCountCanvasRef.current.getContext("2d");
        ctx.beginPath();
        let x = 20 + (i * 50);
        ctx.arc(x, 100, 20, 0, Math.PI * 2);
        if(i<nowStrikeCount){
          ctx.fillStyle = 'yellow';
        } else {
          ctx.fillStyle = 'gray';
        }
        ctx.fill();
        ctx.closePath();
      }
    }

    function drawOutCount() {
      for(let i=0; i<2; i++) {
        const ctx = ballCountCanvasRef.current.getContext("2d");
        ctx.beginPath();
        let x = 20 + (i * 50);
        ctx.arc(x, 165, 20, 0, Math.PI * 2);
        if(i<nowOutCount){
          ctx.fillStyle = 'red';
        } else {
          ctx.fillStyle = 'gray';
        }
        ctx.fill();
        ctx.closePath();
      }
    }
    
    drawText()
    drawBallCount()
    drawStrikeCount()
    drawOutCount()

    // setCtx(contextRef.current)
  }, []);


  return (
    <div className='ball-count-container'>
      <canvas id='textCanvas' ref={textCanvasRef}></canvas>
      <canvas id='bcntCanvas' ref={ballCountCanvasRef}></canvas>
      <canvas id='stzoneCanvas' ref={strikeZoneCanvasRef}></canvas>
    </div>
  )
}