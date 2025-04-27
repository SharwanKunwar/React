import React from 'react'
import './Navbar.css'
// import { a } from 'react-router'

function Navbar() {
  return (
    <div id='nav-outer'>
      <nav>
        <div id='nav-logo-part'>

            {/* // nav-left code  */}
            <a id='nav-a' href="#home-outer">
                <img id='logo-img' src="./src/assets/logos/alphabet.png" alt="" />
            </a>
                <li>ahakal</li>
        </div>

        {/* nav-middle-code */}
        <div id='nav-middle-part'>
            <ul>
                
                <a className='nav-list' href="#home-outer">
                    <li>Home</li>
                </a>
                <a className='nav-list' href="#about-outer">
                    <li>About</li>
                </a><a className='nav-list' href="contact">
                    <li>Contact</li>
                </a><a className='nav-list' href="blog">
                    <li>Blog</li>
                </a>
            </ul>
        </div>

        {/* nav-right-code */}
        <div id='nav-social-icons'>
            <a href="#"><img className='social-icon' src="./src/assets/social-icons/facebook-circle-line.png" alt="facebook" /></a>
            <a href="#"><img className='social-icon' src="./src/assets/social-icons/github-fill.png" alt="facebook" /></a>
            <a href="#"><img className='social-icon' src="./src/assets/social-icons/linkedin-box-line.png" alt="facebook" /></a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
