/*
 * File: mail.ts
 * Project: gruselhaus-api
 * File Created: Wednesday, 3rd July 2019 7:00:47 pm
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Wednesday, 3rd July 2019 7:03:31 pm
 * Modified By: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
 */

import { verifyKey } from "../Lib/verify";
import { Mail } from "./config";
import * as bodyParser from "body-parser";
import * as express from "express";
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post("/", async (req, res) => {
  const from = req.body.from;
  const to = req.body.to;
  const subject = req.body.subject;
  const message = req.body.message;

  if (!(await verifyKey(req.body.key))) {
    res.status(401).send("Forbidden: Invalid API Key!");
  } else {
    if (!from || !to || !subject || !message) {
      res.status(400).send("Bad Request: Missing parameter");
      return;
    }
    try {
      const resp = await new Mail(from, to, subject, message).sendMail();
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
    message: "Use post to send an email.",
    "example payload": {
      key: "Gruselhaus API Key",
      from: "Email Adress the message should be send from.",
      to: "Email Adress the message should be send to.",
      subject: "The subject of the mail.",
      message: "The body of the mail (optional: html formatted)."
    }
  });
});

export const mailRouter = router;
