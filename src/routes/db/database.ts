/*
 * File: database.ts
 * Project: gruselhaus-api
 * File Created: Tuesday, 6th August 2019 8:02:58 am
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Tuesday, 20th August 2019 8:01:29 pm
 * Modified By: Julia Konstanz <julia@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
 */

import("../../env");
const { Pool } = require("pg");

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});
