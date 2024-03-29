import React, {useState} from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showDivisions, setShowDivisions] = useState(false);

  const toggleDivisions = () => {
    setShowDivisions(!showDivisions);
  };

  return (
<nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/Joueur">Joueur</Link></li>
        <li onMouseEnter={toggleDivisions} onMouseLeave={toggleDivisions}>
          <span>Divisions</span>
          {showDivisions && (
            <div className="dropdown">
              <ul>
                <li><Link to= "/Division1">Division 1</Link></li>
                <li><Link to= "/Division2">Division 2</Link></li>
                <li><Link to= "/Division3">Division 3</Link></li>
                <li><Link to= "/Division4">Division 4</Link></li>
              </ul>
            </div>
          )}
        </li>
        <li><Link to="/Stats">Stats</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;