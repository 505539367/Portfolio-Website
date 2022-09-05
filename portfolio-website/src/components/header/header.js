import './header.css'
import { Link } from "react-router-dom"

function Header (props) {
  const { current } = props

  return (

    <header>
      <div className='name'>Ying Yang</div>
      <div className='links'>
        <Link to='/Portfolio-Website/' className={current === 'AboutMe' ? 'link-active' : 'link'} >About Me</Link>
        <Link to='/Portfolio-Website/Gallery' className={current === 'Gallery' ? 'link-active' : 'link'} >Gallery</Link>
        <Link to='/Portfolio-Website/Contact' className={current === 'ContactMe' ? 'link-active' : 'link'}  > Contact</Link>
      </div>

    </header >
  )
}

export default Header