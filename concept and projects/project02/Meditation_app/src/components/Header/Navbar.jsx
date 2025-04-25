import React from 'react'
import './Navbar.css'

function Navbar() {
    const style = {
        color: "blue"
    }
  return (
    <>
    <nav>
        <div id='left-part'>
            <h2>Peace🍃<span style={style}>Soul</span></h2>
        </div>
        <div id='right-part'>
            <ul>
                <a href="explore">
                    <li>Explore</li>
                </a><a href="solutions">
                    <li>Solutions</li>
                </a><a href="about">
                    <li>About</li>
                </a><a href="blog">
                    <li>Blog</li>
                </a><a href="login">
                    <li>Log In</li>
                </a>
            </ul>
            <button id='start-btn'>Start Now</button>
        </div>
    </nav>
    </>
  )
}

export default Navbar
