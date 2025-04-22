import React from 'react'
import './Navbar.css'
import {Link} from 'react-router'

function Navbar() {

  const style = {
    width: "20px",
    height: "20px"
  }
  const styleForMenu = {
    width: "30px",
    height: "30px"
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
            <li> <img style={style}  src="./src/assets/info-card-line.svg" alt="" /> GithubCard</li>
           </Link><Link to="/About">
            <li> <img style={style}  src="./src/assets/information-line.svg" alt="" /> About</li>
           </Link>
        </ul>
        <div id='menu-icon'>
          <li><img style={styleForMenu} src="./src/assets/menu-3-fill.svg" alt="menu" /></li>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
