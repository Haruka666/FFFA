const express = require('express');
const cors = require('cors');
const connection = require('./config/database');
const bcrypt = require('bcrypt');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route pour récupérer des données de la base de données
app.get('/api/hello', (req, res) => {
  const query = req.query.query || ''; // Utiliser le paramètre de requête, si disponible
  const sql = `SELECT * FROM player WHERE Id_Player = ${query}`; // Remplacez 'mytable' et 'name' par vos propres valeurs
  connection.query(sql, [`%${query}%`], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Error executing query' });
      return;
    }
    res.json({ message: `Hello from the server! You searched for: ${query}`, results });
  });
});

// Route pour ajouter un match
app.post('/api/matches', (req, res) => {
  console.log('on y est');
  const { equipe1, equipe2, score1, score2, jour } = req.body;
  const sql = `INSERT INTO matchfa (equipe1, equipe2, score1, score2, jour) VALUES (?, ?, ?, ?, ?)`;
  connection.query(sql, [equipe1, equipe2, score1, score2, jour], (err, results) => {
    if (err) {
      console.error('Error inserting match:', err);
      res.status(500).json({ error: 'Error inserting match' });
      return;
    }
    res.status(201).json({ message: 'Match added successfully', matchId: results.insertId });
  });
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM utilisateur WHERE email_club = ?'; // Assurez-vous de stocker les mots de passe de manière sécurisée (hachage)
  connection.query(sql, [username], async (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ success: false, message: 'Error executing query' });
      return;
    }
    if (results.length > 0) {
      const isPasswordMatched = await bcrypt.compare(password, results[0].motDePasse);
      if (isPasswordMatched) {
        res.json({ success: true, message: 'Login successful' });
      } else {
        res.json({ success: true, message: 'Login failed' });
      }
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  });
});

//parti inscription

app.post('/api/inscription', async (req, res) => {
  console.log('je suis bien la');
  const { NomDuClub, email, password } = req.body;

//Vérification si l'utilisateur existe déjà 

const userCheckSql = 'SELECT * FROM utilisateur WHERE email_club = ?';
  connection.query(userCheckSql, [email], async (err, results) => {
    if (err) {
      console.error('Error checking user:', err);
      return res.status(500).json({ error: 'Error checking user' });
    }
    if (results.length > 0) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    console.log("ici");
    const hashedPassword = await bcrypt.hash(password, 10);


    // Insertion de l'utilisateur dans la base de données
    const sql = 'INSERT INTO utilisateur (club, email_club, motdepasse) VALUES (?, ?, ?)';
    connection.query(sql, [NomDuClub, email, hashedPassword], (err, results) => {
      console.log("et la");
      console.log(results);
      if (err) {
        console.error('Error inserting user:', err);
        return res.status(500).json({ error: 'Error inserting user' });
      }
      res.status(201).json({ message: 'Inscription réussie', status : 'OK', userId: results.insertId });
    });
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
