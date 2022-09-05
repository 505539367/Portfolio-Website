import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutMe from './pages/AboutMe'
import ContactMe from './pages/ContactMe'
import Gallery from './pages/Gallery'

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/Portfolio-Website/' element={<AboutMe />} />
          <Route exact path='/Portfolio-Website/Gallery' element={<Gallery />} />
          <Route path='/Portfolio-Website/Contact' element={<ContactMe />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
