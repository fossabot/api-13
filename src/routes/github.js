/**
 * @name github.js
 * @author Nico Finkernagel
 */

const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("https://github.com/GruselhausOrganization/api");
});


const octo = require('../config/octo');
router.get("/lastCommit/:username/:repo/:branch", async (req, res) => {
  const username = req.params.username;
  const repo = req.params.repo;
  const branch = req.params.branch;
  const uri = `/repos/${username}/${repo}/commits/${branch}`
  const latest_commit = await octo.request(`GET ${uri}`);
  res.status(200).json(latest_commit.data);
});

module.exports = router;