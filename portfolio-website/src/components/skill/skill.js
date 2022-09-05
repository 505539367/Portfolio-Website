import React from 'react'
import './skill.css'
import { FaHandPointRight } from 'react-icons/fa'

const programming = ["Java", "Python", "HTML5", "CSS", "JavaScript", "C++"]
const technology = ["React.js", "Node.js", "MongoDB", "Django", "Android Studio", "MYSQL"]
function Skill () {
  return (
    <section id='skill'>
      <h2>SKILL</h2>

      <div className='container skill_container'>

        <div className='skill_programming'>
          <h3> Programming </h3>
          <div className='skill_content'>
            {programming.map(item => {
              return (
                <article key={item} className='skill_details'>
                  <FaHandPointRight className='skill_details-icon' />
                  <h4>{item}</h4>
                </article>
              )
            })}
          </div>
        </div>

        <div className='skill-technology'>
          <h3> Technology </h3>
          <div className='skill_content'>
            {technology.map(item => {
              return (
                <article key={item} className='skill_details'>
                  <FaHandPointRight className='skill_details-icon' />
                  <h4>{item}</h4>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill