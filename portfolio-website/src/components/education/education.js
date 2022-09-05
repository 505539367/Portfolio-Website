import React from 'react'
import './education.css'

function Education () {

  return (
    <section id='education'>
      <h2>EDUCATION</h2>

      <div className='container education_container'>
        <div className='education_college-image'>
          <img src="/assets/ccny.jpg" alt="ccny" />
        </div>
        <div className='education_content'>
          <h2>The City College of New York - New York, NY</h2>
          <h3> Expected Graduation : June 2023</h3>
          <ul>
            <li>2017 - 2018 : Major in Architecture</li>
            <li>2019 - current : Major in Computer Science</li>
            <li>GPA : 3.69/4.00</li>
          </ul>
        </div>

      </div>
    </section >

  )

}

export default Education

