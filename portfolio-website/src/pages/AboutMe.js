import React from 'react'
import Nav from './../components/nav/nav'
import About from './../components/about/about'
import Experience from './../components/experience/experience'
import Portfolio from './../components/portfolio/portfolio'
import Skill from './../components/skill/skill'
import Education from './../components/education/education'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import './page.css'

function AboutMe () {
  return (
    <div className='AboutMe'>
      <Header current={"AboutMe"} />
      <Nav />
      <h5>Hello I'm</h5>
      <h1>Ying Yang</h1>
      <h5 className='text-light'>Web Developer</h5>
      <About />
      <Portfolio />
      <Skill />
      <Education />
      <Experience />
      <Footer />
    </div>
  )
}

export default AboutMe