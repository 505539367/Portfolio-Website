import React from 'react'
import Contact from '../components/contact/contact'
import Header from '../components/header/header'
import './page.css'

function ContactMe () {
  return (
    <div className='ContactMe'>
      <Header current={"ContactMe"} />
      <Contact />

    </div>
  )
}

export default ContactMe