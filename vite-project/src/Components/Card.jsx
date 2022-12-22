import React from 'react';
import katie from '../assets/katie-zaferes.png'
import star from '../assets/star.png'

export default function Card() {
  return (
    <div className="cards--container">
      <div className="card1">
        <img src={katie} alt="katie-zaferes" />
        <h5>SOLD OUT</h5>
        <div className='ratings'>
          <img src={star} alt="star" />
          <span>5.0</span>
          <span className='gray'>(6) • </span>
          <span className='gray'>USA</span>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p><span className='bold'>From $136</span> / person</p>
      </div>
    </div>
  )
}