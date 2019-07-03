/*
 * File: redirect.ts
 * Project: gruselhaus-api
 * File Created: Tuesday, 7th May 2019 11:49:47 pm
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Saturday, 29th June 2019 11:59:36 am
 * Modified By: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
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
