import React from 'react'
import './footer.css'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <div className='links'>
        <Link to='/' className='link' >About Me</Link>
        <Link to='/Gallery' className='link' >Gallery</Link>
        <Link to='/Contact' className='link' > Contact</Link>
      </div>

      <div className='copyright'>&copy; 2022 Ying Yang</div>
    </footer>
  )
}

export default Footer