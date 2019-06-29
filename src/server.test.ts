/*
 * File: server.test.ts
 * Project: gruselhaus-api
 * File Created: Tuesday, 7th May 2019 11:49:47 pm
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Saturday, 29th June 2019 11:59:58 am
 * Modified By: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
 */

import { server, app, port } from "./server";

it("Typeof server has to be function", done => {
  expect(typeof app).toBe("function");
  done();
});
it("Typeof port has to be a number", done => {
  expect(typeof port).toBe("number");
  done();
});
// Close Express Instance
afterAll(() => {
  server.close();
});
