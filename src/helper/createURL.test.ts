/* Copyright (C) Nico Finkernagel - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Nico Finkernagel <nico@gruselhaus.com>, May 2019
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
