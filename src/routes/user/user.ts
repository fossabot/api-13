/*
 * File: user.ts
 * Project: gruselhaus-api
 * File Created: Saturday, 20th July 2019 11:24:52 pm
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Saturday, 20th July 2019 11:25:10 pm
 * Modified By: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
 */

import * as express from "express";
const router = express.Router();

import { verifyUser } from "../Lib/verify";

/**
 * @api {get} /user/verify Verify user credentials in databse
 * @apiGroup User
 *
 * @apiParam {String} username Username.
 * @apiParam {String} password Password.
 *
 *
 * @apiSuccess {String} username Username of the User.
 * @apiSuccess {Boolean} auth Sucess.
 */

export const userRouter = router.get("/verify", async (req: express.Request, res: express.Response) => {
  const username = req.query.username;
  const password = req.query.password;
  if (!username || !password) {
    res.status(400).send("Bad Request: Invalid Parameters");
    return;
  }
  const auth_resp = await verifyUser(username, password);
  res.status(200).json({
    username: username,
    auth: auth_resp
  });
});
