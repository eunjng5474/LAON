import { useEffect, useRef, useState } from 'react';
import './LiveScore.css'

export default function LiveScore() {
  const nowInning = "T09";
  const awayScore = '6';
  const homeScore = '6';

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  
  const [ctx, setCtx] = useState();

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.06;  // 임시 높이

    // 로고 위치
    function drawLogo() {
      const ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.arc(50, 25, 20, 0, Math.PI * 2);  // 좌표 수정하기
      ctx.arc(300, 25, 20, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.closePath();
    }
    
    // 현재 공격 여부 -> 코드 효율적으로 수정하기
    function drawNowAttack() { 
      const ctx1 = canvas.getContext('2d');
      ctx1.beginPath();
      ctx1.arc(100, 25, 10, 0, Math.PI * 2); 
      if(nowInning[0] === 'B'){
        ctx1.fillStyle = 'red';
      } else {
        ctx1.fillStyle = 'gray';
      }
      ctx1.fill();
      ctx1.closePath();

      const ctx2 = canvas.getContext('2d');
      ctx2.beginPath();
      ctx2.arc(250, 25, 10, 0, Math.PI * 2);
      if(nowInning[0] === 'T'){
        ctx1.fillStyle = 'red';
      } else {
        ctx1.fillStyle = 'gray';
      }
      ctx2.fill();
      ctx2.closePath();
    }

    // 현재 점수
    function drawScore() {
      // const { fontSize = 10, fontFamily = 'Arial', color = 'black', textAlign = 'left', textBaseline = 'top' } = style;

      const ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.font = 25 + 'px ' + 'Arial';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      ctx.fillStyle = 'white';
      ctx.fillText(awayScore, 130, 15);
      ctx.fillText(homeScore, 210, 15);
      ctx.stroke();    
    }

    function drawInning() {
      const ctx = canvas.getContext('2d');

      ctx.beginPath();
      ctx.roundRect(150, 15, 50, 20, 10);
      ctx.fillStyle = 'white';
      ctx.fill()
      ctx.stroke();
    }

    drawLogo()
    drawNowAttack()
    drawScore()
    drawInning()

    setCtx(contextRef.current)
  }, []);

  return (
    <div className='live-score-container'>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}