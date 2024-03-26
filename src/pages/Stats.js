import React from 'react';
import Navbar from '../component/Navbar';
import Accueil from '../component/Accueil';
import Logo_FFFA from '../images/Logo_FFFA.png';

function Stats() {
  return (
    <div>
      <Accueil />
      <Navbar></Navbar>
      <div> Page Stats</div>
    </div>
  );
}

export default Stats;