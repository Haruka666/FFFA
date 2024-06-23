const express = require('express');
const cors = require('cors');
const connection = require('./config/database');
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

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
