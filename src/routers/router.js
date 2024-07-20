const express = require("express");
const router = express.Router();
const accueilController = require(`../controllers/accueilController`);
const aProposController = require(`../controllers/aProposController`);
const contactController = require(`../controllers/contactController`);
const gestionProjetController = require(`../controllers/gestionProjetController`);
const portfolioController = require(`../controllers/portfolioController`);
const prestationsController = require(`../controllers/prestationsController`);


router.get('/', accueilController.accueilPage);
router.get('/a-propos', aProposController.aProposPage);
router.get('/contact', contactController.contactPage);
router.get('/gestion-projet', gestionProjetController.gestionProjetPage);
router.get('/portfolio', portfolioController.portfolioPage);
router.get('/prestations', prestationsController.prestationsPage);

module.exports = router;