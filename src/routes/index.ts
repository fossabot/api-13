/*
 * File: index.ts
 * Project: gruselhaus-api
 * File Created: Tuesday, 7th May 2019 11:49:47 pm
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Saturday, 29th June 2019 11:59:22 am
 * Modified By: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
 */

import * as express from "express";
const router = express.Router();

/**
 * @api {get} / Index
 * @apiGroup Redirects
 *
 * @apiSuccessExample {string} Success-Response:
 *     HTTP/1.1 302 Found
 *
 *     Redirecting to https://github.com/GruselhausOrganization/api
 */

export const indexRouter = router.get("/", (_, res: express.Response) => {
  res.redirect("https://github.com/GruselhausOrganization/api");
});
