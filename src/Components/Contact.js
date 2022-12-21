import React from 'react'
import "../Styles/Contact.css"
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";

function Contact() {
  return (
    <div className='contact'>
      <h3 className='contact-me'><b>CONTACT INFORMATION <MdInfo /></b></h3>
      <h5 className='tel'><FaPhoneAlt /> +254 700 150 645 </h5>
      <a href="mailto:melynatieno@gmail.com" className='email'><h5><FaEnvelope /> melynatieno@gmail.com </h5></a>
      <h5 className='location'><HiLocationMarker />Nairobi, Kenya</h5>
      <div className='socials'>
      <a href='https://github.com/MelynAtieno'> <FaGithub /></a>
      <a href='https://www.linkedin.com/in/melyn-atieno/'><FaLinkedin />  </a>
      </div>

    </div>
  )
}

export default Contact