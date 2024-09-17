const express = require('express');
const router = express.Router();

module.exports = (statsController) => {
    router.post('/', (req, res) => statsController.addStats(req, res));
    return router;
};
