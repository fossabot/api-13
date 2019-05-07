import "./env";

import * as express from "express";
const app = express();

// Rate Limiting
import * as rateLimit from "express-rate-limit";
app.enable("trust proxy");
app.use(
  new rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10000
  })
);

// GA
const expressGa = require("express-ga-middleware");
app.use(expressGa(process.env.TRACKING_ID));

// Routes
const status = require("./routes/status");
app.use("/status", status);

const github = require("./routes/github");
app.use("/github", github);

const ping = require("./routes/ping");
app.use("/ping", ping);

const index = require("./routes/index");
app.use("/", index);

const redirect = require("./routes/redirect");
app.use("/redirect", redirect);

export = app;
