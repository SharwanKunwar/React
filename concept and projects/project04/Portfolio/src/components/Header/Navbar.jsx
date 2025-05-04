import React from 'react'
import './Navbar.css'


function Navbar() {

    

  return (
    <>
        <div id='nav-outer'>
          <nav>
          <div id='logo&text'>
                <a id='nav-logo-img'  href="#"><img id='nav-icon' src="./src/assets/icons/cv.png" alt="logo" /></a>
                <h2 id='text-logo'>Portfolio</h2>
            </div>
            <ul>
                <a href="home">
                    <li>Home</li>
                </a><a href="about">
                    <li>About</li>
                </a><a href="contact">
                    <li>Contact</li>
                </a>
            </ul>

            <div id='menu'>
                <a id='nav-logo-img'  href="#"><img id='nav-icon' src="./src/assets/icons/menu.png" alt="menu" /></a>
            <h3 id='text-logo'>menu</h3>
            </div>

          </nav>
        </div>
    </>
  )
}

export default Navbar
