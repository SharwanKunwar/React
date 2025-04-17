import React from 'react'
import './Navbar.css'
import {Link} from 'react-router'

function Navbar() {
  return (
    <>
    <nav>
        <div id='logoAndOpt'>
            <div>logo</div>
        <ul>
            <Link to="/Platform"><li>Platform</li></Link>
            <Link to="/Resource"><li>Resource</li></Link>
            <Link to="/Customer"><li>Customer</li></Link>
            <Link to="/Pricing"><li>Pricing</li></Link>
        </ul>
        </div>
        <div id='icons'>
            <button id='signin'>sign in</button>
            <button id='startForFree'>Start for free</button>
        </div>
    </nav>
    </>
  )
}

export default Navbar
