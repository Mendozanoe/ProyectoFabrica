import React from 'react'
import { Routes, Route,Link } from 'react-router-dom';

const NavBarLink = () => {
  return (
    <nav className='nav-bar'>
    <ul className='navigator'>
      <li><Link to="/">HOME</Link></li>
      <li><Link to="/about">NOSOTROS</Link></li>
      <li><Link to="/servicios">SERVICIOS</Link></li>
    </ul>
    <ul className='contact'>
      <li><a href="https://www.instagram.com/3dmifabricadeideas/">INSTAGRAM</a></li>
      <li className='contact'><a href="/contacto">CONTACTO</a></li>
    </ul>
  </nav>
  )
}

export default NavBarLink