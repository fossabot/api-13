/*
 * File: ping.test.ts
 * Project: gruselhaus-api
 * File Created: Tuesday, 7th May 2019 11:49:47 pm
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Saturday, 29th June 2019 11:59:26 am
 * Modified By: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
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
