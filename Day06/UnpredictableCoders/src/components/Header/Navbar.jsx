import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
        <h2>Unpredictable</h2>
        <ul>
            <Link to="Home"><li>Home</li></Link>
            <Link to="About"><li>About</li></Link>
            <Link to="Contact"><li>Contact</li></Link>
        </ul>
        <div>img</div>
        </nav>
    </div>
  )
}

export default Navbar
