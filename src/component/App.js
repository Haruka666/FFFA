import React from 'react';
import '../styles/App.css';
import Accueil from './Accueil';
import Navbar from './Navbar';
import Body from './Body';
import Stats from '../pages/Stats';
import Joueur from '../pages/Joueur';
import Divisions from '../pages/Divisions';

function App() {
  return (
    <div>
      <Accueil />
      <Navbar />
      <Body /> 
    </div>
    
  );
}

export default App;
