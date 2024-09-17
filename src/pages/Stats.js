import React,{useState} from 'react';
import Navbar from '../component/Navbar';
import Accueil from '../component/Accueil';
import { addStat } from '../services/api';
import '../styles/Stats.css'

function Stats() {

  const [stats, setStats] = useState({
    player: '',
    yards: 0,
    touchdowns: 0,
    interceptions: 0,
    placage:0,
    sack:0,
    reception:0,
  });
  
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStats(prevStats => ({
      ...prevStats,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(stats);
    const data = await addStat(stats);
    if (data && data.message) {
      setMessage(data.message);
    }
  };
  return (
    <div>
      <Accueil />
      <div className="app-container">
      </div>
      <form className="football-stats-form" onSubmit={handleSubmit}>
        <label>
          Joueur :
          <input
            type="text"
            name="player"
            value={stats.player}
            onChange={handleChange}
          />
        </label>
        <label>
          Yards :
          <input
            type="number"
            name="yards"
            value={stats.yards}
            onChange={handleChange}
          />
        </label>
        <label>
          Touchdowns :
          <input
            type="number"
            name="touchdowns"
            value={stats.touchdowns}
            onChange={handleChange}
          />
        </label>
        <label>
          Interceptions :
          <input
            type="number"
            name="interceptions"
            value={stats.interceptions}
            onChange={handleChange}
          />
        </label>
        <label>
          Placage :
          <input
            type="number"
            name="placage"
            value={stats.placage}
            onChange={handleChange}
          />
        </label>
        <label>
          Sack :
          <input
            type="number"
            name="sack"
            value={stats.sack}
            onChange={handleChange}
          />
        </label>
        <label>
          Catch :
          <input
            type="number"
            name="reception"
            value={stats.reception}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Soumettre</button>
      </form>
    </div>

    
  );
}

export default Stats;