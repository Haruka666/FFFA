import React from 'react';
import '../styles/App.css';
import Logo_FFFA from '../images/Logo_FFFA.png';
import Accueil from './Accueil';
import Navbar from './Navbar';
import Body from './Body';

function App() {
  return (
    <div>
      <Accueil>
        <img src ={Logo_FFFA} alt= 'logo_fffa_2013' className='fffa-logo'/>
        <h1 className='fffa-title'> Générateur De Stats</h1>
        <h2 className='fffa-login'>Connexion</h2>
      </Accueil>
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
