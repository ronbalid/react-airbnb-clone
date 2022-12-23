import React from 'react';
import katie from '../assets/katie-zaferes.png'
import star from '../assets/star.png'

export default function Card(props) {
  return (
    <div className="cards--container">
      <div className="card1">
        <img src={props.img} alt="katie-zaferes" />
        <h5>SOLD OUT</h5>
        <div className='ratings'>
          <img src={star} alt="star" />
          <span>{props.rating}</span>
          <span className='gray'>({props.reviewCount}) • </span>
          <span className='gray'>{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p><span className='bold'>From ${props.price}</span> / person</p>
      </div>
    </div>
  )
}