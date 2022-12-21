import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";

function Contact() {
  return (
    <div className='contact'>
        <h3 className='contact-me'><b>CONTACT INFORMATION <MdInfo /></b></h3> 
        <h5 className='tel'><FaPhoneAlt /> +254 700 150 645 </h5>
        <h5 className='email'><FaEnvelope /> melynatieno@gmail.com </h5>
      <h5 className='location'><HiLocationMarker />Nairobi, Kenya</h5>
        <FaGithub />
      <FaLinkedin />

    </div>
  )
}

export default Contact