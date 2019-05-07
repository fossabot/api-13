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
