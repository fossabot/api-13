/* Copyright (C) Nico Finkernagel - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Nico Finkernagel <nico@gruselhaus.com>, May 2019
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
