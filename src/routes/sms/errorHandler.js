/*
 * File: errorHandler.js
 * Project: gruselhaus-api
 * File Created: Monday, 5th August 2019 9:01:58 pm
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Monday, 5th August 2019 9:11:47 pm
 * Modified By: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
 */

module.exports.errorHandler = (err, _, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    res.status(500).send("500 - Internal Server Error: JSON parse error. Please check you playload!");
  }
  next(err);
};
