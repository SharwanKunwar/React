import React from 'react'
import './Navbar.css'
import { Link } from 'react-router'


function Navbar() {


  return (
    <>
      <div id='nav-outer'>
      <div id='logo'>logo</div>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/About"><li>About</li></Link>
        <Link to="/Contact"><li>Contact</li></Link>
      </ul>
        <div id='img-box'>img</div>
      </div>
      </>
  )
}

export default Navbar
