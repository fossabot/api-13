/*
 * File: statusLog.ts
 * Project: gruselhaus-api
 * File Created: Sunday, 30th June 2019 11:55:12 pm
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Monday, 1st July 2019 12:19:23 am
 * Modified By: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
 */

import { db } from "../../config/database";
import * as uuid from "uuid";

export const saveLog = (_host: string, _timestamp: Date, _status: number) => {
  const ref = db.ref("status/logs/");
  const host = _host.split(".").join("_");
  const logRef = ref.child(host);
  const data = `{
    "${uuid.v1()}": {
      "host": "${_host}",
      "status": "${_status}",
      "timestamp": "${_timestamp}"
    }
  }`;
  logRef.update(JSON.parse(data));
};
