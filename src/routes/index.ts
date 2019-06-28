/* Copyright (C) Nico Finkernagel - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Nico Finkernagel <nico@gruselhaus.com>, May 2019
 */

import * as express from "express";
const router = express.Router();

export const indexRouter = router.get("/", (req, res) => {
  res.redirect("https://github.com/GruselhausOrganization/api");
});
