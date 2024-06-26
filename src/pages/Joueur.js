import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Accueil from '../component/Accueil';
import '../styles/Joueur.css';
import User_Logo from '../images/User_Logo.png';
import { fetchHelloMessage } from '../services/api';

function Joueur() {
  const [message, setMessage] = useState('');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // Fonction pour récupérer le message depuis l'API
  const getMessage = async () => {
    const data = await fetchHelloMessage(query);
    if (data && data.message) {
      setMessage(data.message);
    }
    if (data && data.results) {
      setResults(data.results);
    }
  };

  // Gestion de la modification de l'input
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <Accueil />
      <p></p>
      <div className='Search-Joueur'>
        <img src={User_Logo} alt='Logo_User' className='User-Logo' />
        <input 
          type="text" 
          placeholder="Cherche ton joueur..." 
          className="Search-Bar" 
          value={query} 
          onChange={handleInputChange} 
        />
        <button type="submit" className="Search-Button" onClick={getMessage}>Search</button>
        <h1>{message}</h1>
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result.Id_Player}</li> // Remplacez "name" par la colonne appropriée de votre table
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Joueur;
