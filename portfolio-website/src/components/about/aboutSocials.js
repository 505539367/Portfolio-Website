import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const AboutSocials = () => {
  return (
    <div className='about_socials'>
      <div className='about_socials-line' >
        <a href="https://linkedin.com/in/ying-yang-55b3a8218" ><BsLinkedin /></a>
        <a href="https://github.com/505539367?tab=repositories" ><FaGithub /></a>
      </div >
    </div>
  )
}

export default AboutSocials