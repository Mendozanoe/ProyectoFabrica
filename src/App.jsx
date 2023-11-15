import './App.css'
import Navbar from './inicio/Navbar'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom" // Usa "Routes" en lugar de "Route"
import Service from './body/Service'
import { FormContact } from './form/FormContact'
import Home from './body/Home'
import About from "./body/About"
import Footer from './footer/Footer'

function App() {
  return (
    <BrowserRouter>
   <Navbar/>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/servicios" element={<Service />} />
      <Route path="/contacto" element={<FormContact />} />
    </Routes>
      <About/>
      <Service/>
  
    <Footer/>
    </BrowserRouter>
  )
}

export default App
