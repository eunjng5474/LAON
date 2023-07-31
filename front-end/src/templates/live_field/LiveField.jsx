import { useEffect, useRef, useState } from 'react';

export default function LiveField() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  // prop할 때 1-3루 모두 null or string으로 넘겨주거나
  // prop에 base3있을 때만 바꿔주거나?
  // 출루 선수 정보도 숫자면 json에서 이름 찾아야 함
  
  // // 리스트로 받으면 편할 듯
  // const nowBase1 = null;
  // const nowBase2 = null;
  // // const nowBase3 = "51463";
  // const nowBase3 = "피렐라";
  const nowBase = [null, null, "피렐라"];  

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
        for(let i=0; i<3; i++) {
          const baseCtx = canvasRef.current.getContext("2d");
          
          baseCtx.beginPath();
          let x = 240 - (i * 95);
          let y = 200 - (i%2 * 65)
          baseCtx.rect(x, y, 70, 40);
          baseCtx.fillStyle = 'white';
          
          if(nowBase[i]) {
            baseCtx.fillStyle = 'blue';
          }
          baseCtx.fill();
          baseCtx.closePath();
        }
        
        for(let j=0; j<3; j++) {
          const playerCtx = canvasRef.current.getContext("2d");
          playerCtx.beginPath();
          let x = 240 - (j * 95);
          let y = 200 - (j%2 * 65)
          if(nowBase[j]) {
            playerCtx.font = 20 + 'px ' + 'Arial';
            playerCtx.fillStyle = 'white';
            playerCtx.fillText(nowBase[j], x+5, y+25);
            // 선수 글자 수에 따라 위치 바꿔야 함 -> 색 바꾸면서 생각해보기
          }
          playerCtx.closePath();
        }
      }
    }

    drawField();
  }, []);

  return (
    <div className='match-field'>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}