/*
 * File: runTest.ts
 * Project: gruselhaus-api
 * File Created: Tuesday, 7th May 2019 11:49:47 pm
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Saturday, 29th June 2019 11:57:21 am
 * Modified By: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
 */

import _ from "lodash";
import * as request from "supertest";
import { createURL } from "./createURL";

export const runTest = (tests: [Test]) => {
  tests.forEach((test: Test) => {
    it(test.title, async done => {
      const url = await createURL(test.options);
      request(test.instance)
        .get(url)
        .then((response: any) => {
          const data = JSON.parse(response.res.text);
          expect(_.get(data, test.expect)).toBe(test.toBe);
          done();
        });
    });
    it("Check status code mappings", async done => {
      const url = await createURL(test.options);
      request(test.instance)
        .get(url)
        .then((response: any) => {
          const data = JSON.parse(response.res.text);
          expect(data.status).toBe(response.status);
          done();
        });
    });
  });
};

export interface Test {
  title: string;
  instance: any;
  options: {
    route: string;
    key?: string;
    host?: string;
  };
  expect: string;
  toBe: any;
}
