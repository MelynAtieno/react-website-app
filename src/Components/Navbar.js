import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='Navbar'>
        <nav>
       
        <Link to="/home">HOME</Link>
        <Link to="/about">ABOUT ME</Link>
        <Link to="/resume">RESUME</Link>
        <Link to="/projects">PROJECTS</Link>

        <Link to="/contact">CONTACT</Link>
       
       </nav>
    </div>
  )
}

export default Navbar