const express = require("express");
const router = express.Router();
const accueilController = require(`${__dirname}/../controllers/accueilController`);

router.get('/', accueilController.accueilPage);

module.exports = router;