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
import { status } from "./routes/status";
app.use("/status", status);

import { github } from "./routes/github";
app.use("/github", github);

import { ping } from "./routes/ping";
app.use("/ping", ping);

import { index } from "./routes/index";
app.use("/", index);

import { redirect } from "./routes/redirect";
app.use("/redirect", redirect);

import { mail_service } from "./routes/Mail/index";
app.use("/mail", mail_service);

export = app;
