// app.js
const express = require('express');
const cors = require('cors');
const connection = require('./config/database');
const UserService = require('./services/userService');
const UserController = require('./controllers/userController');

class App {
    constructor() {
        this.app = express();
        this.db = connection;
        this.userService = new UserService(this.db);
        this.userController = new UserController(this.userService);
        this.PORT = process.env.PORT || 5000;

        this.setupMiddleware();
        this.setupRoutes();
        this.startServer();
    }

    setupMiddleware() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    setupRoutes() {
        this.app.post('/api/login', (req, res) => this.userController.login(req, res));
        this.app.post('/api/inscription', (req, res) => this.userController.register(req, res));
    }

    startServer() {
        this.app.listen(this.PORT, () => {
            console.log(`Server is running on port ${this.PORT}`);
        });
    }
}

// Initialize the app
new App();
