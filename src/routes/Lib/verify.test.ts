/* Copyright (C) Nico Finkernagel - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Nico Finkernagel <nico@gruselhaus.com>, May 2019
 */

import "../../env";
import { verifyKey } from "./verify";

it("Testing with CI_KEY", async () => {
  const expected = await verifyKey(process.env.SERVICE, process.env.CI_KEY);
  expect(expected).toBe(true);
});
it("Testing with key=''", async () => {
  const expected = await verifyKey(process.env.SERVICE, "");
  expect(expected).toBe(false);
});
