/**
 * @name status.test.js
 * @author Nico Finkernagel
 */
import "../env";
import * as app from "../app";
const CI_KEY = process.env.CI_KEY;
const runTest = require("../helper/runTest");

describe("", () => {
  describe("Test with wrong API Key", () => {
    runTest([
      {
        title: "Authentication & Request",
        instance: app,
        options: {
          route: "status",
          key: "Fake",
          host: "Fake-Host"
        },
        expect: "error[0].code",
        toBe: 401
      }
    ]);
  });
  describe("Request 'Google.de'", () => {
    runTest([
      {
        title: "Authentication & Request",
        instance: app,
        options: {
          route: "status",
          key: CI_KEY,
          host: "google.com"
        },
        expect: "status",
        toBe: 200
      }
    ]);
  });
  describe("Requst 'notarealhost'", () => {
    runTest([
      {
        title: "Authentication & Request",
        instance: app,
        options: {
          route: "status",
          key: CI_KEY,
          host: "notarealhost"
        },
        expect: "status",
        toBe: 503
      }
    ]);
  });
});
