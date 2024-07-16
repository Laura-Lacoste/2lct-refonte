const express = require("express");
const router = express.Router();
const prestationsController = require(`${__dirname}/../controllers/prestationsController`);

router.get('/prestations', prestationsController.prestationsPage);

module.exports = router;