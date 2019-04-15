/**
 * @name server.test.js
 * @author Nico Finkernagel
 */

const {server, app, port} = require('./server');

it('Typeof server has to be function', done => {
  expect(typeof app).toBe('function');
  done();
})
it('Typeof port has to be a number', done => {
  expect(typeof port).toBe('number');
  done();
})
// Close Express Instance
afterAll(() => {
  server.close();
})