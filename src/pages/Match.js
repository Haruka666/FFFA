import React, {useState} from 'react';
import Navbar from '../component/Navbar';
import Accueil from '../component/Accueil';
import { addMatch } from '../services/api';

function Match() {

  const [equipe1, setEquipe1] = useState('');
  const [equipe2, setEquipe2] = useState('');
  const [score1, setScore1] = useState('');
  const [score2, setScore2] = useState('');
  const [jour, setJour] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const match = { equipe1, equipe2, score1: parseInt(score1), score2: parseInt(score2), jour: jour };
    console.log(match);
    const data = await addMatch(match);
    if (data && data.message) {
      setMessage(data.message);
    }
  };
  return (
    <div>
      <Accueil />
      <Navbar></Navbar>
      <div><h2>Ajout de match</h2>
      <form className= "form_match" onSubmit={handleSubmit}>
        <div>
          <label>Equipe 1:</label>
          <input type="text" value={equipe1} onChange={(e) => setEquipe1(e.target.value)} required />
        </div>
        <div>
          <label>Equipe 2:</label>
          <input type="text" value={equipe2} onChange={(e) => setEquipe2(e.target.value)} required />
        </div>
        <div>
          <label>Point Equipe 1:</label>
          <input type="number" value={score1} onChange={(e) => setScore1(e.target.value)} required />
        </div>
        <div>
          <label>Point Equipe 2:</label>
          <input type="number" value={score2} onChange={(e) => setScore2(e.target.value)} required />
        </div>
        <div>
          <label>Date Match :</label>
          <input type="date" value={jour} onChange={(e) => setJour(e.target.value)} required />
        </div>
        <button type="submit">Add Match</button>
      </form>
      {message && <p>{message}</p>}</div>
    </div>
  );
}

export default Match;