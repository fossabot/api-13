/*
 * File: status.ts
 * Project: gruselhaus-api
 * File Created: Saturday, 6th July 2019 2:57:34 pm
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Tuesday, 20th August 2019 9:15:50 pm
 * Modified By: Julia Konstanz <julia@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
 */

import "../../env";

import * as express from "express";
const router = express.Router();

import * as isReachable from "is-reachable";
import { verifyUser } from "../Lib/verify";

import { resultRouter } from "./result/result";
router.use("/result", resultRouter);

interface PostRequestParams extends express.Request {
  params: {
    key: string;
    host: string;
  };
}

/**
 * @api {get} /status/:key/:host Request Website reachability
 * @apiGroup Status
 *
 * @apiParam {String} key Gruselhaus API Key.
 * @apiParam {String} host The host to check for.
 */

export const statusRouter = router.get("/:key/:host", async (req: PostRequestParams, res: express.Response) => {
  const api_key = req.params.key;
  const host = req.params.host;
  if (!(await verifyUser(api_key))) {
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
    if (!host) {
      res.status(404).json({
        status: 404,
        error: [
          {
            code: 404,
            source: {
              pointer: req.headers.host + "/" + req.url
            },
            title: "Host not found",
            detail: "Did you used the correct URL?"
          }
        ]
      });
    } else {
      if (await isReachable(host)) {
        res.status(200).json({
          status: 200,
          message: "The Host is up!"
        });
      } else {
        res.status(503).json({
          status: 503,
          message: "The Host is down!"
        });
      }
    }
  }
});
