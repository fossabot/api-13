/* Copyright (C) Nico Finkernagel - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Nico Finkernagel <nico@gruselhaus.com>, May 2019
 */

/* eslint-disable max-len */
/* eslint-disable require-unicode-regexp */

import * as express from "express";
const router = express.Router();

export const redirectRouter = router.get("/", (req, res) => {
  const url = req.query.url;
  if (url) {
    if (
      !new RegExp(/https:\/\/.+/).test(url) &&
      !new RegExp(/http:\/\/.+/).test(url)
    ) {
      res
        .status(404)
        .send(
          "Url does not match the pattern. \n" +
            "Please use `https://` | `http://` also"
        );
    } else {
      res.redirect(url);
    }
  } else {
    res.status(404).send("No url provided!");
  }
});
