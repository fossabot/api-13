/**
 * @name server.js
 * @author Nico Finkernagel
 */

const app = require('./app');
const port = process.env.PORT || 3000;

const server = app.listen(port)

module.exports = {
  app: app,
  server: server,
  port: port
}