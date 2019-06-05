import "./env";

import * as express from "express";
const app = express();

// Rate Limiting
const RateLimit = require("express-rate-limit");
app.enable("trust proxy");
app.use(
  new RateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10000
  })
);

// GA
const expressGa = require("express-ga-middleware");
app.use(expressGa(process.env.TRACKING_ID));

// Routes
import { statusRouter } from "./routes/status";
app.use("/status", statusRouter);

import { pingRouter } from "./routes/ping";
app.use("/ping", pingRouter);

import { indexRouter } from "./routes/index";
app.use("/", indexRouter);

import { redirectRouter } from "./routes/redirect";
app.use("/redirect", redirectRouter);

export = app;
