const express = require("express");
const router = express.Router();
const gestionProjetController = require(`${__dirname}/../controllers/gestionProjetController`);

router.get('/gestion-projet', gestionProjetController.gestionProjetPage);

module.exports = router;