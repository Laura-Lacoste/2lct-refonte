const express = require("express");
const router = express.Router();
const portfolioController = require(`${__dirname}/../controllers/portfolioController`);

router.get('/portfolio', portfolioController.portfolioPage);

module.exports = router;