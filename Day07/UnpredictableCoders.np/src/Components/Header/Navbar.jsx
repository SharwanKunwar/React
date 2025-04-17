import "./Navbar.css"
import {Link} from 'react-router'

function Navbar() {

  return (
    <>
    <nav>
        <h2 id="title">Coders</h2>
        <ul>
            <Link to="Home">
                <li>Home</li>
            </Link><Link to="About">
                <li>About</li>
            </Link><Link to="Contact">
                <li>Contact</li>
            </Link><Link to="Blogs">
                <li>Blogs</li>
            </Link>
        </ul>
        <div id="menu"><a href="Menu"><img id="menu-icon" src="./src/assets/menu-line.svg" alt="Menu-icon"/></a></div>
    </nav>
    </>
  )
}

export default Navbar
