import * as _ from "lodash";
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
