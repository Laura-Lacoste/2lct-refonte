const express = require("express");
const router = express.Router();
const aProposController = require(`${__dirname}/../controllers/aProposController`);

router.get('/a-propos', aProposController.aProposPage);

module.exports = router;