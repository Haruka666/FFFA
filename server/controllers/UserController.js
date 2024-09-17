class UserController {
    constructor(userService, db) {
        this.userService = userService;
        this.db = db;
    }

    async login(req, res) {
        const { username, password } = req.body;
        try {
            const results = await this.db.query('SELECT * FROM utilisateur WHERE email_club = ?', [username]);
            if (results.length > 0) {
                const isPasswordMatched = await this.userService.comparePassword(password, results[0].motDePasse);
                if (isPasswordMatched) {
                    res.json({ success: true, message: 'Login successful' });
                } else {
                    res.json({ success: false, message: 'Login failed' });
                }
            } else {
                res.status(401).json({ success: false, message: 'Identifiants invalides' });
            }
        } catch (err) {
            res.status(500).json({ success: false, message: 'Erreur lors de l\'exécution de la requête' });
        }
    }

    async register(req, res) {
        const { NomDuClub, email, password } = req.body;
        try {
            const userCheckResults = await this.db.query('SELECT * FROM utilisateur WHERE email_club = ?', [email]);
            if (userCheckResults.length > 0) {
                return res.status(400).json({ error: 'Email déjà existant' });
            }
            const hashedPassword = await this.userService.hashPassword(password);
            const results = await this.db.query(
                'INSERT INTO utilisateur (club, email_club, motdepasse) VALUES (?, ?, ?)',
                [NomDuClub, email, hashedPassword]
            );
            res.status(201).json({ message: 'Inscription réussie', status: 'OK', userId: results.insertId });
        } catch (err) {
            res.status(500).json({ error: 'Erreur lors de l\'insertion de l\'utilisateur' });
        }
    }
}

module.exports = UserController;