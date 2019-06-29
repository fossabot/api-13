/*
 * File: createURL.test.ts
 * Project: gruselhaus-api
 * File Created: Tuesday, 7th May 2019 11:49:47 pm
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Saturday, 29th June 2019 11:58:45 am
 * Modified By: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
 */

import { createURL } from "./createURL";

it("Validating `createURL.js`", async done => {
  const url = await createURL({
    route: "test",
    key: "key",
    host: "host"
  });
  expect(url).toBe("/test/key/host");
  done();
});
