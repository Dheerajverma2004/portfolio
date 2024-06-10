import React from 'react'
import Navbar from '../src/Components/Navbar/Navbar.jsx'
import Hero from '../src/Hero/Hero.jsx'
import About from './About/About.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
    </div>
  )
}

export default App
