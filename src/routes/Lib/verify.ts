/*
 * File: verify.ts
 * Project: gruselhaus-api
 * File Created: Saturday, 29th June 2019 11:59:15 am
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Saturday, 29th June 2019 11:59:18 am
 * Modified By: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
 */

import { db } from "../../config/database";

export const verifyKey = (_key: string) => {
  return new Promise((resolve, reject) => {
    const ref = db.ref(`/keys/${_key}`);
    ref.on(
      "value",
      snapshot => {
        const resp = snapshot.val();
        if (resp) {
          if (resp.active === true) {
            resolve(true);
          } else {
            resolve(false);
          }
        } else {
          resolve(false);
        }
      },
      (error: string) => {
        reject(new Error(`API Key Checking Failed! ${error}`));
      }
    );
  });
};

export const verifyUser = (_username: string, _password: string) => {
  return new Promise((resolve, reject) => {
    const ref = db.ref(`/users/${_username}`);
    ref.on(
      "value",
      snapshot => {
        const resp = snapshot.val();
        if (resp) {
          if (resp.active === true && resp.password == _password) {
            resolve(true);
          } else {
            resolve(false);
          }
        } else {
          resolve(false);
        }
      },
      (error: string) => {
        reject(new Error(`User Credentials Checking Failed! ${error}`));
      }
    );
  });
};
