import React from 'react'
import './styles/Landing.css'

const currentDate = new Date();
function getDate() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const formattedDate = `${year}${String(month).padStart(2, "0")}${String(day).padStart(2, "0")}`;

  return formattedDate
}
function getTime() {
  let hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedTime = `${formattedHours}${formattedMinutes}`;

  return formattedTime
}

export default function Landing() {
  const nowDate = getDate()
  const nowTime = getTime()

  return (
    <div className='landing-container'>
      <h1>LANDING</h1>
    </div>
  )
}