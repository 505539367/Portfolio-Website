import React from 'react'
import './experience.css'

function Experience () {

  return (
    <section id='experience'>
      <h2>Experience</h2>

      <div className='container experience_container'>
        <div className='experience_company-image'>
          <img src="assets/swc.png" alt="swc" />
        </div>
        <div className='experience_content'>
          <h2>Software Engineer Intern</h2>
          <h3>Students Who Code - New York, NY</h3>
          <h3>July 2022 - August 2022</h3>
          <ul>
            <li>Aid in the development of the Students Who Code platform that provided tutorial courses on HTML, CSS, and Javascript for students in grades 6-12</li>
            <li>Create a NodeJS API backend that uses mongoose to make calls to the MongoDB database</li>
            <li>Create a React Frontend that will make calls to the API</li>
            <li>Design the front-end using React, HTML, CSS</li>
          </ul>
        </div>
      </div>
    </section>

  )

}

export default Experience

