import React,{useState} from 'react';
import Navbar from '../component/Navbar';
import Accueil from '../component/Accueil';
import '../styles/Stats.css'

function Stats() {

  const [stats, setStats] = useState({
    team: '',
    yards: 0,
    touchdowns: 0,
    interceptions: 0,
    placage:0,
    sack:0,
    catch:0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStats(prevStats => ({
      ...prevStats,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Stats envoyées :', stats);
    setStats({
      team: '',
      yards: 0,
      touchdowns: 0,
      interceptions: 0,
      placage:0,
      sack:0,
      catch:0,
    });
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
            name="team"
            value={stats.team}
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
            name="Sack"
            value={stats.sack}
            onChange={handleChange}
          />
        </label>
        <label>
          Catch :
          <input
            type="number"
            name="Catch"
            value={stats.catch}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Soumettre</button>
      </form>
    </div>

    
  );
}

export default Stats;