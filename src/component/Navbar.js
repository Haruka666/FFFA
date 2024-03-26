import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/Joueur">Joueur</Link></li>
        <li><Link to="/Divisions">Divisions</Link></li>
        <li><Link to="/Stats">Stats</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;