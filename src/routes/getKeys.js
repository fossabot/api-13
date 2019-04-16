/**
 * @name getKeys.js
 * @author Nico Finkernagel
 */

const express = require('express');
const router = express.Router();
const db = require('../utils/database');
const {verifyKey} = require("../utils/verify");
const service = process.env.SERVICE;

router.get("/:key", async (req, res) => {
  const api_key = req.params.key;
  if ((await verifyKey(service, api_key))) {
    const ref = db.ref('/');
    ref.on("value", (snapshot) => {
      const resp = snapshot.val();
      res.status(200).json(resp);
    })
  } else {
    res.status(401).json({
      status: 401,
      error: [{
        code: 401,
        source: {
          pointer: req.headers.host + "/" + req.url
        },
        title: "Authentication failed",
        detail: "Did you used your API Key?"
      }]
    });
  }
});

module.exports = router;
