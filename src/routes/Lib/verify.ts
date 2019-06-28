/* Copyright (C) Nico Finkernagel - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Nico Finkernagel <nico@gruselhaus.com>, May 2019
 */

import { db } from "../../config/database";

export const verifyKey = (_service: string, _key: string) => {
  return new Promise((resolve, reject) => {
    const ref = db.ref(_service + "/" + _key);
    ref.on(
      "value",
      snapshot => {
        const resp = snapshot.val();
        if (resp) {
          if (resp.Activ === true) {
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
