import React, { useState, useEffect } from 'react';
import './MenuHamburguesa.css';

const MenuHamburguesa = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    
    const handleMediaChange = (e) => {
      setIsMobile(e.matches);
      setMenuOpen(false); // Cierra el menú cuando la media query cambia
    };

    // Agrega un listener para la media query
    mediaQuery.addListener(handleMediaChange);

    // Inicialmente, verifica si la media query se cumple
    setIsMobile(mediaQuery.matches);

    return () => {
      mediaQuery.removeListener(handleMediaChange); // Limpia el listener
    };
  }, []);

  return (
    <div className={`menu-container ${isMobile ? 'visible' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>
      <nav className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuHamburguesa;
