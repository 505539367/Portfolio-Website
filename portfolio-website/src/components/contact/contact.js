import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiWechat2Line } from 'react-icons/ri'
import { AiOutlinePhone } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'


function Contact () {

  return (
    <section id='contact'>
      <h1> Contact Me</h1>
      <div className='contact_resume'>
        <a href="./assets/Resume.pdf" className='btn'>Resume</a>
      </div>


      <div className='container contact_container'>
        <form action="">
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name='message' rows='7' placeholder='Message' required />
          <button type='submit' className='btn'>Send Message</button>
        </form>

        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact-icon' />
            <h4>Email</h4>
            <h5>ying.yang4221@gmail.com</h5>
            <a href="mailto:ying.yang4221@gmail.com">send a message</a>
          </article>
          <article className='contact_option'>
            <AiOutlinePhone className='contact-icon' />
            <h4>Phone</h4>
            <h5>(646)-520-6159</h5>
          </article>
          <article className='contact_option'>
            <RiWechat2Line className='contact-icon' />
            <h4>WeChat</h4>
            <h5>id:y505539367</h5>
          </article>
        </div>

      </div>

      <div className='contract_socials' >
        <a href="https://linkedin.com/in/ying-yang-55b3a8218" className='LinkedIn'><BsLinkedin /></a>
        <a href="https://github.com/505539367?tab=repositories" className='Github'><FaGithub /></a>
      </div >
    </section>

  )

}

export default Contact

