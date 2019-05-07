/**
 * @name status.js
 * @author Nico Finkernagel
 */
import "../env";

import * as express from "express";
const router = express.Router();

import * as isReachable from "is-reachable";
import { verifyKey } from "./Lib/verify";
const service = process.env.SERVICE;

export = router.get("/:key/:host", async (req, res) => {
  const api_key = req.params.key;
  const host = req.params.host;
  if (!(await verifyKey(service, api_key))) {
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
