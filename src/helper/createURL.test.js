/**
 * @name createURL.test.js
 * @author Nico Finkernagel
 */

const createURL = require('./createURL');

it('Validating `createURL.js`', async done => {
  const url = await createURL({
    route: 'test',
    key: 'key',
    host: 'host'
  });
  expect(url).toBe('/test/key/host');
  done();
});