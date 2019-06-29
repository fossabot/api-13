/*
 * File: createURL.ts
 * Project: gruselhaus-api
 * File Created: Tuesday, 7th May 2019 11:49:47 pm
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Saturday, 29th June 2019 11:58:39 am
 * Modified By: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
 */

export const createURL = (input: Input): Promise<string> => {
  return new Promise(resolve => {
    let output = "";
    if (input.route) output = output.concat(`/${input.route}`);
    if (input.key) output = output.concat(`/${input.key}`);
    if (input.host) output = output.concat(`/${input.host}`);
    resolve(output);
  });
};

export interface Input {
  route: string;
  key?: string;
  host?: string;
}
