import '../styles/Accueil.css'
import Logo_FFFA from '../images/Logo_FFFA.png';
import { Link } from 'react-router-dom';

function Accueil({ children }) {
	return <div className='fffa-banner'> 
	<img src ={Logo_FFFA} alt= 'logo_fffa_2013' className='fffa-logo'/>
	<h1 className='fffa-title'> Générateur De Stats</h1>
	<h2 className='fffa-login'><Link to="/Connexion">Connexion</Link></h2></div>
	
}


export default Accueil