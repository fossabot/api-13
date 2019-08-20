/*
 * File: sms.ts
 * Project: gruselhaus-api
 * File Created: Tuesday, 6th August 2019 8:02:58 am
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Tuesday, 20th August 2019 9:15:28 pm
 * Modified By: Julia Konstanz <julia@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
 */

import * as request from "request-promise";
import * as bodyParser from "body-parser";

import { verifyUser } from "../Lib/verify";
import "../../env";

import * as express from "express";
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/**
 * @api {get} /sms SMS Instructions
 * @apiGroup SMS
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Use post to send a sms.",
 *       "example payload":
 *         {
 *           "key": "Gruselhaus API Key",
 *           "phone": "YOUR PHONE NUMBER",
 *           "message": "MESSAGE CONTENT"
 *         }
 *     }
 */

router.get("/", (_: express.Request, res: express.Response) => {
  res.json({
    message: "Use post to send a sms.",
    "example payload": {
      key: "Gruselhaus API Key",
      phone: "YOUR PHONE NUMBER",
      message: "MESSAGE CONTENT"
    }
  });
});

/**
 * @api {post} /sms/create Send an SMS
 * @apiGroup SMS
 *
 * @apiParam {String} key Gruselhaus API Key.
 * @apiParam {String} phone Phone Number.
 * @apiParam {String} message SMS Content.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "textId": "12345678",
 *       "quotaRemaining": 0
 *     }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1
 *     {
 *       "success": false,
 *       "error": "Lorem ipsum..."
 *     }
 */

router.post("/create", async (req: express.Request, res: express.Response) => {
  const _phone = req.body.phone;
  const _message = req.body.message;

  if (!(await verifyUser(req.body.key))) {
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

/**
 * @api {get} /sms/quota Check remaining quota
 * @apiGroup SMS
 *
 * @apiParam {String} key Gruselhaus API Key.
 */

router.get("/quota", async (req: express.Request, res: express.Response) => {
  if (!(await verifyUser(req.body.key))) {
    res.status(401).send("Forbidden: Invalid API Key!");
  } else {
    try {
      const resp = await request.get(`https://textbelt.com/quota/${process.env.TEXTBELT_KEY}`);
      res.send(resp);
      return;
    } catch (err) {
      res.status(err.responseCode).send(err.response);
      return;
    }
  }
});

/**
 * @api {get} /sms/status/:textId Look up text delivery status
 * @apiGroup SMS
 *
 * @apiParam {String} key Gruselhaus API Key.
 * @apiParam {Number} textId Unique text Id.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": "DELIVERED"
 *     }
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": "FAILED"
 *     }
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": "UNKNOWN"
 *     }
 */

interface PostRequestParams extends express.Request {
  params: {
    textId: string;
  };
}

router.get("/status/:textId", async (req: PostRequestParams, res: express.Response) => {
  if (!(await verifyUser(req.body.key))) {
    res.status(401).send("Forbidden: Invalid API Key!");
  } else {
    try {
      const resp = await request.get(`https://textbelt.com/status/${req.params.textId}`);
      res.send(resp);
      return;
    } catch (err) {
      res.status(err.responseCode).send(err.response);
      return;
    }
  }
});

export const smsRouter = router;
