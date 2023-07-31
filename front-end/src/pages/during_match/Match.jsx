import { useEffect, useRef, useState } from 'react';
import './Match.css'
import LiveScore from '../../templates/live_score/LiveScore';
import BallCount from '../../templates/ball_count/BallCount';
import TextBroadcast from '../../templates/text_broadcast/TextBroadcast';
import LiveField from '../../templates/live_field/LiveField';

// json파일에 period: "B08/T12"인데 B가 말, T가 초, 숫자가 이닝 같음(추후 확인 필요)
export default function Match() {

  return (
    <div className='match-container'>
      <div className='match-headline'>
        <h1>실시간 경기</h1>
        <div className='match-to-seat'>SEAT</div>
      </div>
      <LiveScore/>
      <BallCount/>
      <TextBroadcast/>
      <LiveField/>
    </div>
  )
}
