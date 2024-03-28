import Accueil from "../component/Accueil";
import Navbar from "../component/Navbar";
import React,{useState} from "react";
import '../styles/Inscription.css'

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
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Envoyer les données à votre backend ici
      };
    
      return (
        <div><Accueil />
        <Navbar></Navbar> <p></p>
        <div className="signup-form">
          <h2>Inscription</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="NomDuClub" placeholder="Nom du Club" value={formData.firstName} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Mot de passe" value={formData.password} onChange={handleChange} />
            <button type="submit">S'inscrire</button>
          </form>
        </div>
        </div>
      );
    }

    export default Inscription;