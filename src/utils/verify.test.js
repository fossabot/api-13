/**
 * @name user.test.js
 * @author Nico Finkernagel
 */

const verifyKey = require('./verify').verifyKey;
const CI_KEY = process.env.CI_KEY;

it('Testing with CI_KEY', async done => {
  const expected = await verifyKey('monitoring', CI_KEY);
  expect(expected).toBe(true);
  done();
})
it("Testing with key=''", async done => {
  const expected = await verifyKey('monitoring', '');
  expect(expected).toBe(false);
  done();
})