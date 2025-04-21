import React from 'react'
import './Navbar.css'
import {Link} from 'react-router'

function Navbar() {

  const style = {
    width: "20px",
    height: "20px"
  }
  return (
    <div>
      <nav>
        <div id='logo'>
          <h1 id='logo-title'>Easay</h1>
        </div>
        <ul>
           <Link to="/Home">
            <li> <img style={style}  src="./src/assets/home-3-line.svg" alt="" /> Home</li>
           </Link><Link to="/Quotes">
            <li> <img style={style}  src="./src/assets/chat-quote-line.svg" alt="" /> Quotes</li>
           </Link><Link to="/GithubCard">
            <li> <img style={style}  src="./src/assets/info-card-line.svg" alt="" /> Github Card</li>
           </Link>
        </ul>
        <div id='menu-icon'>
          <h3>Menu</h3>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
