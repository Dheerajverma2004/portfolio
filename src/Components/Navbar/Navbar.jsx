import React from 'react'
import './Navbar.css'
import logo from '../../../src/assets/Dheer.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo"/>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>Service</li>
            <li>Work</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      <div className='nav-connect'>Connect With Me</div>
    </div>
  )
}

export default Navbar
