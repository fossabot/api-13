/**
 * @name server.test.js
 * @author Nico Finkernagel
 */

const {server, app, port} = require('./server');

it('Typeof server must be function', done => {
  expect(typeof app).toBe('function');
  done();
})
it('Typeof port must be a number', done => {
  expect(typeof port).toBe('number');
  done();
})
// Close Express Instance
afterAll(() => {
  server.close();
})