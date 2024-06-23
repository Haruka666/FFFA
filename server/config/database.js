const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // Remplacez par votre utilisateur MySQL
  database: 'fffa' // Remplacez par votre nom de base de données
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

module.exports = connection;