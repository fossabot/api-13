/*
 * File: user.ts
 * Project: gruselhaus-api
 * File Created: Tuesday, 6th August 2019 8:02:58 am
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Tuesday, 20th August 2019 9:16:03 pm
 * Modified By: Julia Konstanz <julia@gruselhaus.com>
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
  const key = req.query.key;
  if (!key) {
    res.status(400).send("Bad Request: Invalid Parameters");
    return;
  }
  const auth_resp = await verifyUser(key);
  res.status(200).json({
    key: key,
    auth: auth_resp
  });
});
