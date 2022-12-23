import React from 'react';
import katie from '../assets/katie-zaferes.png'
import star from '../assets/star.png'

export default function Card(props) {
  console.log(props)
  let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

  return (
    // <div className="cards--container">
      <div className="card1">
        <img src={props.coverImg} alt="cover-image" />
        {badgeText != null && <h5 className="card--badge">{badgeText}</h5>}
        <div className='ratings'>
          <img src={star} alt="star" />
          <span>{props.stats.rating}</span>
          <span className='gray'>({props.stats.reviewCount}) • </span>
          <span className='gray'>{props.location}</span>
        </div>
        <p>{props.title}</p>
        <p><span className='bold'>From ${props.price}</span> / person</p>
      </div>
    // </div>
  )
}