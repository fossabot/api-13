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
