import '../styles/Accueil.css';
import Logo_FFFA from '../images/Logo_FFFA.png';
import Navbar from './Navbar';

function Accueil({ children }) {
	return (
	<div>	
	<div className='fffa-banner'>
	<img src ={Logo_FFFA} alt= 'logo_fffa_2013' className='fffa-logo'/>
	<h1 className='fffa-title'> Générateur De Stats</h1></div><Navbar /></div>
	);
}


export default Accueil;