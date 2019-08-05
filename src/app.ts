/*
 * File: app.ts
 * Project: gruselhaus-api
 * File Created: Tuesday, 21st May 2019 4:50:29 pm
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Saturday, 29th June 2019 11:59:50 am
 * Modified By: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
 */

import "./env";

import * as express from "express";
const app = express();

// Rate Limiting
import * as RateLimit from "express-rate-limit";
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
import { statusRouter } from "./routes/status/status";
app.use("/status", statusRouter);

import { pingRouter } from "./routes/ping/ping";
app.use("/ping", pingRouter);

import { indexRouter } from "./routes/index";
app.use("/", indexRouter);

import { redirectRouter } from "./routes/redirect/redirect";
app.use("/redirect", redirectRouter);

import { mailRouter } from "./routes/mail/mail";
app.use("/mail", mailRouter);

import { smsRouter } from "./routes/sms/sms";
app.use("/sms", smsRouter);

import { userRouter } from "./routes/user/user";
app.use("/user", userRouter);

// 404 route that redirects to https://gruselhaus.com/404.html
import { _404Router } from "./routes/404/404";
app.use("*", _404Router);

export = app;
