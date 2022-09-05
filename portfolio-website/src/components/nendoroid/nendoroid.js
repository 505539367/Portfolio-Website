import { useState } from 'react'
import { nendoroidImg } from "./nendoroidImg"
import './nendoroid.css'
import { BsChevronLeft } from 'react-icons/bs'
import { BsChevronRight } from 'react-icons/bs'

const imgLen = nendoroidImg.length

function Nendoroid () {
  const [current, setCurrent] = useState(0)



  return (
    <section id="nendoroid">
      <h1>Nendoroid</h1>
      <h3>My hobbies : Playing video games, making Nendoroids and traveling</h3>
      <div className='container nendoroid_container'>
        <BsChevronLeft className="nendoroid_btn" onClick={() => setCurrent((current - 1 + imgLen) % imgLen)} />

        <div className='nendoroid_item'>
          <div className='nendoroid_item-name'>
            {nendoroidImg[current].name}
          </div>
          <div className='nendoroid_image_container'>
            {nendoroidImg[current].img.map((image, index) => {
              return (
                <div key={index} className={"image g-" + index}>
                  <img src={image} alt="" />
                </div>
              )
            })}
          </div>
        </div>
        <BsChevronRight className="nendoroid_btn" onClick={() => setCurrent((current + 1) % imgLen)} />
      </div>
      <h4>These are the nendoroids I made in past few years</h4>




    </section>



  )

}

export default Nendoroid


