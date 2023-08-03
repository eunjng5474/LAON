import { useEffect, useRef } from 'react';
import './LiveField.css'
import { useSelector } from 'react-redux';

export default function LiveField() {
  const imageCanvasRef = useRef(null);
  const baseCanvasRef = useRef(null);
  const playerCanvasRef = useRef(null);
  
  let nowBase1 = null;
  let nowBase2 = null;
  let nowBase3 = null;

  const newHomeNowBase1 = useSelector((state) => state.newHomeNowBase1);
  const newHomeNowBase2 = useSelector((state) => state.newHomeNowBase2);
  const newHomeNowBase3 = useSelector((state) => state.newHomeNowBase3);

  const newAwayNowBase1 = useSelector((state) => state.newAwayNowBase1);
  const newAwayNowBase2 = useSelector((state) => state.newAwayNowBase2);
  const newAwayNowBase3 = useSelector((state) => state.newAwayNowBase3);

  const inning = useSelector((state) => state.inning)

  if (inning[0] === "B"){
    nowBase1 = newHomeNowBase1;
    nowBase2 = newHomeNowBase2;
    nowBase3 = newHomeNowBase3;
  } else if (inning[0] === "T"){
    nowBase1 = newAwayNowBase1;
    nowBase2 = newAwayNowBase2;
    nowBase3 = newAwayNowBase3;
  } else {
    nowBase1 = null
    nowBase2 = null
    nowBase3 = null
  }

  const nowBase = [nowBase1, nowBase2, nowBase3];  

  useEffect(() => {
    
    function drawField() {
      if (!imageCanvasRef) return;
      const imageCanvas = imageCanvasRef.current;
      const baseCanvas = baseCanvasRef.current;
      const playerCanvas = playerCanvasRef.current;

      imageCanvas.width = 360;
      imageCanvas.height = 350;

      baseCanvas.width = 360;
      baseCanvas.height = 360;
      
      playerCanvas.width = 360;
      playerCanvas.height = 360;

      const ctx = imageCanvas.getContext("2d");
      const image = new Image();
      image.src = 'liveField.png';

      image.onload = function() {
        ctx.drawImage(image, 0, 0, 360, 350);
        for(let i=0; i<3; i++) {
          const baseCtx = baseCanvas.getContext("2d");
          const playerCtx = playerCanvas.getContext("2d");
          baseCtx.globalAlpha = 0.7;  // 투명도
          
          baseCtx.beginPath();
          playerCtx.beginPath();
          let x = 225 - (i * 61);
          let y = 226 - (i%2 * 60)
          baseCtx.arc(x, y, 17, 0, Math.PI * 2);
          baseCtx.fillStyle = 'white';
          
          if(nowBase[i]) {
            baseCtx.fillStyle = 'blue';
            playerCtx.font = 24 + 'px ' + 'Arial';
            playerCtx.fillStyle = 'white';
            playerCtx.fillText(nowBase[i], x-7, y+8);
          }
          baseCtx.fill();
          baseCtx.closePath();
          playerCtx.closePath();
        }
      }
    }

    drawField();
  }, []);

  return (
    <div className='match-field'>
      <canvas className='live-field-canvas' ref={imageCanvasRef}></canvas>
      <canvas className='live-field-canvas' ref={baseCanvasRef}></canvas>
      <canvas className='live-field-canvas' ref={playerCanvasRef}></canvas>
    </div>
  )
}