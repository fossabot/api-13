/*
 * File: result.ts
 * Project: gruselhaus-api
 * File Created: Sunday, 18th August 2019 6:40:02 pm
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Sunday, 18th August 2019 6:40:04 pm
 * Modified By: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
 */

import "../../../env";

import * as express from "express";
const router = express.Router();

import * as bodyParser from "body-parser";

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

import { verifyKey } from "../../Lib/verify";

/**
 * @api {get} /status/result Process result from status monitoring
 * @apiGroup Status
 *
 * @apiParam {String} key Gruselhaus API Key.
 */

export const resultRouter = router.post("/", async (req: express.Request, res: express.Response) => {
  const api_key = req.query.key;
  if (!(await verifyKey(api_key))) {
    res.status(401).json({
      status: 401,
      error: [
        {
          code: 401,
          source: {
            pointer: req.headers.host + "/" + req.url
          },
          title: "Authentication failed",
          detail: "Did you used your API Key?"
        }
      ]
    });
  } else {
    console.log(req.body);
    res.status(200).json({
      status: 200,
      message: "Thank you for the information!"
    });
  }
});
