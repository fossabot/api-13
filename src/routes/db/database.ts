/*
 * File: database.ts
 * Project: gruselhaus-api
 * File Created: Tuesday, 20th August 2019 9:48:57 pm
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Saturday, 7th September 2019 11:17:05 pm
 * Modified By: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
 */

import "../../env";
const { Pool } = require("pg");

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});
