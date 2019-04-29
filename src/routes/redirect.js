/* eslint-disable max-len */
/* eslint-disable require-unicode-regexp */

/**
 * @name redirect.js
 * @author Nico Finkernagel
 */

const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  const url = req.query.url;
  if (url) {
    if (!new RegExp(/https:\/\/.+/).test(url) && !new RegExp(/http:\/\/.+/).test(url)) {
      res.status(404).send('Url does not match the pattern. \n' +
        'Please use `https://` | `http://` also');
    } else {
      res.redirect(url);
    }
  } else {
    res.status(404).send('No url provided!')
  }
});

module.exports = router;