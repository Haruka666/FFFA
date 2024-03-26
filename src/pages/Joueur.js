import React from 'react';
import Navbar from '../component/Navbar';
import Accueil from '../component/Accueil';
import Logo_FFFA from '../images/Logo_FFFA.png';

function Joueur() {
  return (
    <div>
      <Accueil />
      <Navbar></Navbar>
      <div> Page Joueur</div>
    </div>
  );
}

export default Joueur;