import React from 'react'
import "../Styles/Contact.css"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import { HiLocationMarker } from "react-icons/hi";

function Contact() {
  return (
    <div className='contact'>
      <h2 className='contact-me'><b>CONTACT ME:</b></h2>
      
      <a href="mailto:melynatieno@gmail.com" className='email'><h5><FaEnvelope /> melynatieno@gmail.com </h5></a>
      <h5 className='location'><HiLocationMarker />Nairobi, Kenya</h5>
      <div className='socials'>
      <a href='https://github.com/MelynAtieno' target="_blank" rel='noopener noreferrer' className='github'> <FaGithub size={50} /></a>
      <a href='https://www.linkedin.com/in/melyn-atieno/'  target="_blank" rel='noopener noreferrer' className='linkedin'><FaLinkedin size={50} />  </a>
      </div>

    </div>
  )
}

export default Contact