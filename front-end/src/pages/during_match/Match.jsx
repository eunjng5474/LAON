import { useEffect, useRef, useState } from 'react';
import axios from 'axios'
import './Match.css'
import LiveScore from '../../templates/live_score/LiveScore';

// json파일에 period: "B08/T12"인데 B가 말, T가 초, 숫자가 이닝 같음(추후 확인 필요)
export default function Match() {
  // const nowAwayScore = awayScore.run;
  // const nowHomeScore = homeScore.run;
  // const nowInning = period;
  const testInning = "T09";

    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    
    const [ctx, setCtx] = useState();
  
    useEffect(() => {
      
      function drawField() {
        if (!canvasRef) return;
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight * 0.5;
  
        const ctx = canvasRef.current.getContext("2d");
        const image = new Image();
        image.src = 'liveField.png'
  
        image.onload = function(){
          ctx.drawImage(image, 0, 0);
        }
      }

      // const canvas = canvasRef.current;
      // canvas.width = window.innerWidth;
      // canvas.height = window.innerHeight * 0.5;
      
      drawField()
      setCtx(contextRef.current)
    }, []);

  return (
    <div className='match-container'>
      <div className='match-headline'>
        <h1>실시간 경기</h1>
        <div className='match-to-seat'></div>
      </div>
      <div className='match-live-score'>
        <LiveScore/>
      </div>
      <div className='match-ballcount'>
      </div>
      <div className='match-text'>

      </div>
      <div className='match-field'>
        <canvas ref={canvasRef}>
        </canvas>
      </div>
    </div>
  )
}
