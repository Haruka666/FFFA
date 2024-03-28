import React, {useState} from 'react';
import Navbar from '../component/Navbar';
import Accueil from '../component/Accueil';
import { Link } from 'react-router-dom';
import '../styles/Connexion.css'


function Connexion() {
  return (
    <div>
      <Accueil />
      <Navbar></Navbar><p></p>
      <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Connexion</h3>
          <div className="form-group mt-3">
            <label>Email    </label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Club"
            />
          </div>
          <div className="form-group mt-3">
            <label>Mot de passe</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Mot de passe"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Connexion
            </button>
          </div>
          <p className="Mdp-oublie">
          <Link to="/" className="btn btn-secondary">Mot de passe oublié ?</Link>
          </p>
          <div className="d-grid gap-2 mt-3">
              <Link to="/inscription" className="btn btn-secondary">Inscription</Link>
            </div>
        </div>
      </form>
    </div>
    </div>
    
  );
}

export default Connexion;