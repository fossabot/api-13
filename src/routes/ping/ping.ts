/*
 * File: ping.ts
 * Project: gruselhaus-api
 * File Created: Tuesday, 7th May 2019 11:49:47 pm
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Saturday, 29th June 2019 11:59:31 am
 * Modified By: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
 */

import * as express from "express";
const router = express.Router();

/**
 * @api {get} /ping Sample Uptime Request
 * @apiGroup Ping
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": 200,
 *       "message": "Pong!"
 *     }
 */

export const pingRouter = router.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).json({
    status: 200,
    message: "Pong!"
  });
});
