const express = require("express");
const router = express.Router();
const contactController = require(`${__dirname}/../controllers/contactController`);

router.get('/contact', contactController.contactPage);

module.exports = router;