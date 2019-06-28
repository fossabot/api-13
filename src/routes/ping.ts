/* Copyright (C) Nico Finkernagel - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Nico Finkernagel <nico@gruselhaus.com>, May 2019
 */

import * as express from "express";
const router = express.Router();

export const pingRouter = router.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Pong!"
  });
});
