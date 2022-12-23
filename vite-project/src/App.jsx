import React from 'react'
import NavBar from './Components/NavBar.jsx'
import Hero from './Components/Hero.jsx'
import Card from './Components/Card.jsx'
import '../src/Styles/styles.css'

export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Card 
        img="../src/assets/katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </>
  )
}