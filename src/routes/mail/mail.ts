/*
 * File: mail.ts
 * Project: gruselhaus-api
 * File Created: Tuesday, 9th July 2019 8:48:38 pm
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Tuesday, 20th August 2019 9:15:17 pm
 * Modified By: Julia Konstanz <julia@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
 */

import { verifyUser } from "../Lib/verify";
import { Mail } from "./config";
import * as bodyParser from "body-parser";
import * as express from "express";
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/**
 * @api {get} /mail Mail Instructions
 * @apiGroup Mail
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Use post to send an email.",
 *       "example payload":
 *         {
 *           "key": "Gruselhaus API Key",
 *           "from": "Email Adress the message should be send from.",
 *           "to": "Email Adress the message should be send to.",
 *           "subject": "The subject of the mail.",
 *           "message": "The body of the mail (optional: html formatted)."
 *         }
 *     }
 */

router.get("/", (_: express.Request, res: express.Response) => {
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

/**
 * @api {post} /mail/create Send an E-Mail
 * @apiGroup Mail
 *
 * @apiParam {String} key Gruselhaus API Key.
 * @apiParam {String} from Email Adress the message should be send from.
 * @apiParam {String} to Email Adress the message should be send to.
 * @apiParam {String} subject The subject of the mail.
 * @apiParam {String} message The body of the mail (optional: html formatted).
 *
 * @apiSuccessExample {text} Success-Response:
 *     HTTP/1.1 200 OK
 *
 *     Message sucessfully sent.
 */

router.post("/create", async (req: express.Request, res: express.Response) => {
  const from = req.body.from;
  const to = req.body.to;
  const subject = req.body.subject;
  const message = req.body.message;

  if (!(await verifyUser(req.body.key))) {
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

export const mailRouter = router;
