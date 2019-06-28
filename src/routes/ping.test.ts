/* Copyright (C) Nico Finkernagel - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Nico Finkernagel <nico@gruselhaus.com>, May 2019
 */

import * as app from "../app";
import { runTest } from "../helper/runTest";
describe("", () => {
  describe("Testing Route '/ping'", () => {
    runTest([
      {
        title: "Authentication & Request",
        instance: app,
        options: {
          route: "ping"
        },
        expect: "status",
        toBe: 200
      }
    ]);
  });
});
