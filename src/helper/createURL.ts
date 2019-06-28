/* Copyright (C) Nico Finkernagel - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Nico Finkernagel <nico@gruselhaus.com>, May 2019
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
