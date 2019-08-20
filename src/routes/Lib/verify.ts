/*
 * File: verify.ts
 * Project: gruselhaus-api
 * File Created: Tuesday, 6th August 2019 8:02:58 am
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Tuesday, 20th August 2019 9:15:03 pm
 * Modified By: Julia Konstanz <julia@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
 */

import "../../env";
const { pool } = require("../db/database");

export const verifyUser = async (_key: string) => {
  const res = await pool.query(`SELECT * FROM "Users" WHERE key = '${_key}'`);
  for (const row of res.rows) {
    if (row.active) return true;
  }
  return false;
};
