import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import Logo_FFFA from '../images/Logo_FFFA.png';
import Accueil from './Accueil';
import Navbar from './Navbar';
import Body from './Body';
import Stats from '../pages/Stats';
import Joueur from '../pages/Joueur';
import Divisions from '../pages/Divisions';

function App() {
  return (
    <div>
      <Accueil>
        <img src ={Logo_FFFA} alt= 'logo_fffa_2013' className='fffa-logo'/>
        <h1 className='fffa-title'> Générateur De Stats</h1>
        <h2 className='fffa-login'>Connexion</h2>
      </Accueil>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Stats} />
            <Route path="../pages/Joueur" component={Joueur} />
            <Route path="../pages/Divisions" component={Divisions} />
          </Switch>
        </div>
      </Router>
        <Body />
    </div>
  );
}

export default App;
