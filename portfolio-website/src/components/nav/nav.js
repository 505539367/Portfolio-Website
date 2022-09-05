import { useState } from 'react'
import './nav.css'
import { BsFillPersonFill } from 'react-icons/bs'
import { BiBook } from 'react-icons/bi'
import { IoFolder } from 'react-icons/io5'
import { HiOutlineAcademicCap } from 'react-icons/hi'

function Nav () {
  const [activeNav, setActiveNav] = useState('#about')
  return (
    <nav>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')}><BsFillPersonFill /></a>
      <a href="#portfolio" className={activeNav === '#portfolio' ? 'active' : ''} onClick={() => setActiveNav('#portfolio')}><IoFolder /></a>
      <a href="#skill" className={activeNav === '#skill' ? 'active' : ''} onClick={() => setActiveNav('#skill')}><BiBook /></a>
      <a href="#education" className={activeNav === '#education' ? 'active' : ''} onClick={() => setActiveNav('#education')}><HiOutlineAcademicCap /></a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')}><BiBook /></a>
    </nav>
  )
}

export default Nav