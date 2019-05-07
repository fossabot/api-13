/**
 * @name index.js
 * @author Nico Finkernagel
 */

import * as express from "express";
const router = express.Router();

export = router.get("/", (req, res) => {
  res.redirect("https://github.com/GruselhausOrganization/api");
});