import React from 'react'
import './portfolio.css'
import { project } from './project'



function Portfolio () {
  return (
    <section id='portfolio'>
      <h2>PORTFOLIO</h2>

      <div className='container portfolio_container'>
        {project.map(item => {
          return (
            <article key={item.id} className={item.id}>
              <div className="portfolio_project-image">
                <img src={item.img} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
              <small>{item.date}</small><br />
              <div className='portfolio_project-link'>
                <a href={item.githubLink} className='btn'>Github</a>
                {item.demoLink !== "" && <a href={item.demoLink} className="btn btn-primary">Demo</a>}
              </div>
            </article>
          )
        })}

      </div>
    </section>
  )
}

export default Portfolio