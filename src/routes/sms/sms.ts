/*
 * File: sms.ts
 * Project: gruselhaus-api
 * File Created: Monday, 5th August 2019 8:33:13 pm
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Monday, 5th August 2019 8:33:37 pm
 * Modified By: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
 */

import * as request from "request-promise";
import * as bodyParser from "body-parser";

import { verifyKey } from "../Lib/verify";
import "../../env";

import * as express from "express";
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const { errorHandler } = require("./errorHandler");
router.use(errorHandler);

router.post("/", async (req, res) => {
  const _phone = req.body.phone;
  const _message = req.body.message;

  if (!(await verifyKey(req.body.key))) {
    res.status(401).send("Forbidden: Invalid API Key!");
  } else {
    if (!_phone || !_message) {
      res.status(400).send("Bad Request: Missing parameter");
      return;
    }
    try {
      const resp = await request.post("https://textbelt.com/text", {
        form: {
          phone: _phone,
          message: _message,
          key: process.env.TEXTBELT_KEY
        }
      });
      res.status(200).send(resp);
      return;
    } catch (err) {
      res.status(err.responseCode).send(err.response);
      return;
    }
  }
});

router.get("/", (_, res) => {
  res.json({
    message: "Use post to send a sms.",
    "example payload": {
      key: "Gruselhaus API Key",
      phone: "YOUR PHONE NUMBER",
      message: "MESSAGE CONTENT"
    }
  });
});

export const smsRouter = router;
