class MatchController {
    constructor(db) {
        this.db = db;
    }

    async addMatch(req, res) {
        const { equipe1, equipe2, score1, score2, jour } = req.body;
        try {
            const results = await this.db.query('INSERT INTO matchfa (equipe1, equipe2, score1, score2, jour) VALUES (?, ?, ?, ?, ?)', [equipe1, equipe2, score1, score2, jour]);
            res.status(201).json({ message: 'Match added successfully', matchId: results.insertId });
        } catch (err) {
            res.status(500).json({ error: 'Error inserting match' });
        }
    }
}