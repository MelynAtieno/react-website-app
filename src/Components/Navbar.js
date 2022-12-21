import React from 'react'
import { Link } from "react-router-dom"
import "../Styles/Navbar.css"

function Navbar() {
  return (
    <div className='Navbar'>
        <nav>
       
        <Link className='nav-item' to="/home"><b>HOME</b></Link>
        <Link className='nav-item' to="/about"><b>ABOUT</b></Link>
        <Link className='nav-item' to="/resume"><b>RESUME</b></Link>
        <Link className='nav-item' to="/projects"><b>PROJECTS</b></Link>

        <Link className='nav-item' to="/contact"><b>CONTACT</b></Link>
       
       </nav>
    </div>
  )
}

export default Navbar