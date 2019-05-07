/**
 * @name ping.test.js
 * @author Nico Finkernagel
 */

import * as app from "../app";
const runTest = require("../helper/runTest");

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
