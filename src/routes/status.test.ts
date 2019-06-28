/* Copyright (C) Nico Finkernagel - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Nico Finkernagel <nico@gruselhaus.com>, May 2019
 */

import "../env";
import * as app from "../app";
import { runTest } from "../helper/runTest";

const CI_KEY = process.env.CI_KEY;

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
