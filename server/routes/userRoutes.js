const express = require('express');
const router = express.Router();

module.exports = (userController) => {
    router.post('/login', (req, res) => userController.login(req, res));
    router.post('/inscription', (req, res) => userController.register(req, res));
    return router;
};
