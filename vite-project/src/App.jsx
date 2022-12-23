import React from 'react'
import NavBar from './Components/NavBar.jsx'
import Hero from './Components/Hero.jsx'
import Card from './Components/Card.jsx'
import cardData from '../data'
import '../src/Styles/styles.css'

export default function App() {
  const cards = cardData.map((card) => {
    return (
      <Card
        key={card.id}
        // item={item} 
        {...card} //Spread operator
      />
    )
  })

  return (
    <>
      <NavBar />
      <Hero />
      <div className="card--carousel">
        {cards}
      </div>
    </>
  )
}