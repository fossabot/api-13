/**
 * @name user.test.js
 * @author Nico Finkernagel
 */

const verifyKey = require('./verify').verifyKey;

it('Testing with CI_KEY', async done => {
  const expected = await verifyKey(process.env.SERVICE, process.env.CI_KEY);
  expect(expected).toBe(true);
  done();
})
it("Testing with key=''", async done => {
  const expected = await verifyKey(process.env.SERVICE, '');
  expect(expected).toBe(false);
  done();
})