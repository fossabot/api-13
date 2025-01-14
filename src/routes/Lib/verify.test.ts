/*
 * File: verify.test.ts
 * Project: gruselhaus-api
 * File Created: Tuesday, 7th May 2019 11:49:47 pm
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Saturday, 29th June 2019 11:59:05 am
 * Modified By: Julia Konstanz <julia@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
 */

import "../../env";
import { verifyUser } from "./verify";

it("Testing with CI_KEY", async () => {
  const expected = await verifyUser(process.env.API_KEY);
  expect(expected).toBe(true);
});
it("Testing with key=''", async () => {
  const expected = await verifyUser("");
  expect(expected).toBe(false);
});
