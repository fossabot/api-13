/*
 * File: status.test.ts
 * Project: gruselhaus-api
 * File Created: Sunday, 30th June 2019 12:36:50 pm
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Wednesday, 3rd July 2019 6:58:54 pm
 * Modified By: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
 */

import "../../../env";
import * as app from "../../../app";
import { runTest } from "../../../helper/runTest";

const API_KEY = process.env.API_KEY;

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
          key: API_KEY,
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
          key: API_KEY,
          host: "notarealhost"
        },
        expect: "status",
        toBe: 503
      }
    ]);
  });
});
