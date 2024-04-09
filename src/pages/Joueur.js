import React from 'react';
import Navbar from '../component/Navbar';
import Accueil from '../component/Accueil';
import '../styles/Joueur.css'
import User_Logo from '../images/User_Logo.png';


function Joueur() {
  return (
    <div>
      <Accueil />
      <Navbar></Navbar><p></p>
      <div className='Search-Joueur'>
        <img src={User_Logo} alt='Logo_User' className='User-Logo' />
        <input type="text" placeholder="Cherche ton joueur..." className="Search-Bar" />
        <button type="submit" className="Search-Button">Search</button>
      </div>
    </div>
  );
}

export default Joueur;