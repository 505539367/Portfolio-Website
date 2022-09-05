import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Nendoroid from '../components/nendoroid/nendoroid'
import './page.css'

function Gallery () {
  return (
    <div className='Gallery'>
      <Header current={"Gallery"} />
      <Nendoroid />
      <Footer />
    </div>
  )
}

export default Gallery