/**
 * @name github.js
 * @author Nico Finkernagel
 */

const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("https://github.com/GruselhausOrganization/api");
});

module.exports = router;