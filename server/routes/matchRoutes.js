const express = require('express');
const router = express.Router();

module.exports = (matchController) => {
    router.post('/', (req, res) => matchController.addMatch(req, res));
    return router;
};
