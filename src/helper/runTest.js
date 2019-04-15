/**
 * @name runTest.js
 * @author Nico Finkernagel
 */

const createURL = require('./createURL');
const request = require('supertest');
const _ = require('lodash');

module.exports = (tests) => {
  tests.forEach(test => {
    it(test.title, async done => {
      const url = await createURL(test.options);
      request(test.instance)
        .get(url)
        .then(response => {
          const data = JSON.parse(response.res.text);
          expect(_.get(data, test.expect)).toBe(test.toBe);
          done();
        });
    });
    it('Check status code mappings', async done => {
      const url = await createURL(test.options);
      request(test.instance)
        .get(url)
        .then(response => {
          const data = JSON.parse(response.res.text);
          expect(data.status).toBe(response.status);
          done();
        });
    });
  });
}