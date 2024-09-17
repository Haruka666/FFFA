// /controllers/StatsController.js
class StatsController {
    constructor(db) {
        this.db = db;
    }

    async addStats(req, res) {
        const { player, yards, touchdowns, interceptions, placage, sack, reception } = req.body;
        const [prenom, nom] = player.split(' ');

        try {
            const playerResults = await this.db.query(
                'SELECT * FROM player WHERE nom = ? AND prenom = ?',
                [nom, prenom]
            );
            let playerId;
            if (playerResults.length > 0) {
                playerId = playerResults[0].Id_Player;
            } else {
                const insertPlayerResults = await this.db.query(
                    'INSERT INTO player (nom, prenom, IdEquipe) VALUES (?, ?, 1)',
                    [nom, prenom]
                );
                playerId = insertPlayerResults.insertId;
            }

            await this.db.query(
                `INSERT INTO statistique (yardNb, touchdownNb, interceptionNb, placageNb, sackNb, catchNb, Id_Utilisateur, Id_Player, Id_FootGame) 
                 VALUES (?, ?, ?, ?, ?, ?, 1, ?, 1)`,
                [yards, touchdowns, interceptions, placage, sack, reception, playerId]
            );
            res.status(201).json({ message: 'Statistiques ajoutées avec succès' });
        } catch (err) {
            res.status(500).json({ error: 'Erreur lors de l\'insertion des statistiques' });
        }
    }
}

module.exports = StatsController;