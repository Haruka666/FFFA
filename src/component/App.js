import React from 'react';
import '../styles/App.css';
import Accueil from './Accueil';
import Navbar from './Navbar';
import Body from './Body';

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
