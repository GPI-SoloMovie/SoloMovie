import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">SOLOMOVIE</div>
      <ul className="navbar-links">
        <li>Inicio</li>
        <li>Cines</li>
        <li>Streaming</li>
        <li className="votar-link">Votación Grupal</li>
      </ul>
    </nav>
  );
};

export default Navbar;