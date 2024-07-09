import React, {useState} from 'react';
import Navbar from '../component/Navbar';
import Accueil from '../component/Accueil';
import { Link } from 'react-router-dom';
import { login } from '../services/api';
import { useNavigate } from 'react-router-dom';
import Logo_FFFA from '../images/Logo_FFFA.png';
import '../styles/Connexion.css'


function Connexion() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(username, password);
    if (result.success) {
      navigate('/Body');
    } else {
      setError(result.message);
    }
  };
  
  return (
    <div>
      <div className='fffa-banner'> 
	<img src ={Logo_FFFA} alt= 'logo_fffa_2013' className='fffa-logo'/>
	<h1 className='fffa-title'> Générateur De Stats</h1></div>
      <div className="Auth-form-container App">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
      <div className="d-grid gap-2 mt-3">
              <Link to="/inscription" className="btn btn-secondary">Inscription</Link>
            </div>
    </div>
    </div>
    
  );
}

export default Connexion;