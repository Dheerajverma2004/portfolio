import React from 'react'
import './Hero.css'
import profile_img from '../../src/assets/profile_img.png'

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt='profile image'/>     
        <h1><span className='name'>I'm Dheeraj Verma</span>, fullStack Developer based in India.</h1>
        <p>I am a monocronic type of person , with good technical and communication skills I can easily interact with people around me.</p>
    </div>
    
  )
}

export default Hero
