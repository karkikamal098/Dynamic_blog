import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../Images/photo1.png"
import { FaBars } from "react-icons/fa"


const Header = () => {
  return (
   <nav>
    <div className="container nav_container">
      <Link to="/" className="nav_logo">
    <img src={Logo} alt="Navbar_logo" className='nav_img'></img>
      </Link>
      <ul className="nav_menu">
       <li><Link to="/posts/:category">Blogs Daju</Link></li>
       <li><Link to="/createpost">Create Post</Link></li>
       <li><Link to="/authors">Authors</Link></li>
       <li><Link to="/logout">Logout</Link></li>
      </ul>
    </div>

    <button className="nav_toggle-btn">
      <FaBars />
    </button>
   </nav>
  )
}

export default Header