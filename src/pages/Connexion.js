import React from 'react';
import Navbar from '../component/Navbar';
import Accueil from '../component/Accueil';
import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Vérifier les informations d'identification ici, par exemple en utilisant une API ou en les comparant à une base de données
    // Simulons une connexion réussie ici
    if (username === 'utilisateur' && password === 'motdepasse') {
      setLoggedIn(true);
    } else {
      alert('Nom d\'utilisateur ou mot de passe incorrect');
    }
  };


function Connexion() {
  return (
    <div>
      <Accueil />
      <Navbar></Navbar>
      <div> page Connexion</div>
      <div>
      {loggedIn ? (
        <div>
          <h1>Bienvenue {username}!</h1>
          <button onClick={() => setLoggedIn(false)}>Déconnexion</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Se connecter</button>
        </form>
      )}
    </div>
    </div>
  );
}

export default Connexion;