import React from 'react'
import './about.css'
import AboutSocials from './aboutSocials'
import { FaAward } from 'react-icons/fa'
import { IoSchool } from 'react-icons/io5'
import { FaLanguage } from 'react-icons/fa'

function About () {

  return (
    <section id='about'>
      <h2>ABOUT ME</h2>
      <div className='container about_container'>
        <div className="about_me">
          <div className="about_me-photo">
            <img src="assets/photo-large.jpg" alt="me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <IoSchool className='about_icon' />
              <h5>Education</h5>
              <small>The city College of New York </small>
            </article>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>2+ Years Coding </small>
            </article>
            <article className='about_card'>
              <FaLanguage className='about_icon' />
              <h5>Spoken Languages</h5>
              <small>English, Mandarin(Native)</small>
            </article>
          </div>

          <p>
            Computer Science undergraduate student with two years of experience in software development.
            Have the ability to lead the team. Good problem solver, and able to perform challenging tasks.
            Currently looking for an internship in the field of software development.
          </p>
          <AboutSocials />
          <div />
        </div>

      </div>
    </section>


  )

}

export default About

