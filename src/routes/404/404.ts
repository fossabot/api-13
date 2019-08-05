/*
 * File: 404.ts
 * Project: gruselhaus-api
 * File Created: Saturday, 29th June 2019 12:21:04 pm
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Saturday, 29th June 2019 12:23:31 pm
 * Modified By: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
 */

import * as express from "express";

const router = express.Router();

/**
 * @api {get} /404 404 Site
 * @apiGroup Redirects
 *
 * @apiSuccessExample {string} Success-Response:
 *     HTTP/1.1 302 Found
 *
 *     Redirecting to https://www.gruselhaus.com/404.html
 */

export const _404Router = router.get("/", (_: express.Request, res: express.Response) => {
  res.redirect("https://www.gruselhaus.com/404.html");
});
