import React, { useState } from "react";
import Accueil from "../component/Accueil";
import Navbar from "../component/Navbar";
import '../styles/Inscription.css';

function Inscription() {
  const [formData, setFormData] = useState({
    NomDuClub: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/inscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Inscription réussie');
      } else {
        console.error('Erreur lors de l\'inscription');
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
    }
  };

  return (
    <div>
      <Accueil />
      <Navbar />
      <div className="signup-form">
        <h2>Inscription</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="NomDuClub" placeholder="Nom du Club" value={formData.NomDuClub} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input type="password" name="password" placeholder="Mot de passe" value={formData.password} onChange={handleChange} />
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </div>
  );
}

export default Inscription;