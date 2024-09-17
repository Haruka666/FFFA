class UserService {
    constructor(db) {
        this.db = db;
    }

    async findByEmail(email) {
        const results = await this.db.query('SELECT * FROM utilisateur WHERE email_club = ?', [email]);
        return results.length > 0 ? results[0] : null;
    }

    async createUser(NomDuClub, email, hashedPassword) {
        return await this.db.query('INSERT INTO utilisateur (club, email_club, motdepasse) VALUES (?, ?, ?)', [NomDuClub, email, hashedPassword]);
    }
}

module.exports = UserService;
