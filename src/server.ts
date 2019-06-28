/* Copyright (C) Nico Finkernagel - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Nico Finkernagel <nico@gruselhaus.com>, May 2019
 */

import "./env";

export const app = require("./app");
export const port = process.env.PORT || 3000;

export const server = app.listen(port);
