/**
 * @name app.js
 * @author Nico Finkernagel
 */

require("dotenv").config();
const express = require("express");
const app = express();

// Rate Limiting
const rateLimit = require("express-rate-limit");
app.enable("trust proxy");
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10000
});
app.use(limiter);

// GA
const expressGa = require("express-ga-middleware");
app.use(expressGa(process.env.TRACKING_ID));

// Routes
const status = require('./routes/status');
app.use('/status', status);

const github = require('./routes/github');
app.use('/github', github);

const ping = require('./routes/ping');
app.use('/ping', ping);

module.exports = app;