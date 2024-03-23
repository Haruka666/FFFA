import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
      <li><Link to="../pages/Joueur">Joueur</Link></li>
        <li><Link to="../pages/Divisions">Divisions</Link></li>
        <li><Link to="../pages/Stats">Stats</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;