import React, { useState } from "react";
import Accueil from "../component/Accueil";
import Navbar from "../component/Navbar";
import { useNavigate } from 'react-router-dom';
import '../styles/Inscription.css';
import { inscription } from '../services/api';

function Inscription() {
  const [formData, setFormData] = useState({
    NomDuClub: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      console.log(formData);
      const response = await inscription(formData);
      console.log(response);
      if (response.status === 'OK') {
        console.log('Inscription réussie');
        navigate('/Connexion');
      } else {
        setError('Erreur lors de l\'inscription');
      }
  };

  return (
    <div>
      <Accueil />
      <Navbar />
      <div className="signup-form">
        <h2>Inscription</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="NomDuClub" placeholder="Nom du Club" value={formData.NomDuClub} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Mot de passe" value={formData.password} onChange={handleChange} required />
          <button type="submit">S'inscrire</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default Inscription;