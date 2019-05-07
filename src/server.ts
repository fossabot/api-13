/**
 * @name server.js
 * @author Nico Finkernagel
 */
import "./env";

export const app = require("./app");
export const port = process.env.PORT || 3000;

export const server = app.listen(port);
