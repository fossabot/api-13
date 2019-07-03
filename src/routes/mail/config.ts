/*
 * File: config.ts
 * Project: gruselhaus-api
 * File Created: Wednesday, 3rd July 2019 7:00:24 pm
 * Author: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Last Modified: Wednesday, 3rd July 2019 7:03:23 pm
 * Modified By: Nico Finkernagel <nico@gruselhaus.com>
 * -----
 * Copyright 2019 Nico Finkernagel <nico@gruselhaus.com>, all rights reserved.
 */

import * as nodemailer from "nodemailer";

import "../../env";

export const config: config = {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  user: process.env.MAIL_USER,
  password: process.env.MAIL_PWD
};

interface config {
  host: any;
  port: any;
  user: any;
  password: any;
}

export class Mail {
  private sucess: string;
  constructor(
    public from?: string,
    public to?: string,
    public subject?: string,
    public message?: string
  ) {
    this.sucess = "Email erfolgreich versandt.";
  }

  async sendMail() {
    return new Promise(async (resolve, reject) => {
      try {
        let mailOptions = {
          from: this.from,
          to: this.to,
          subject: this.subject,
          html: this.message
        };

        const transporter = nodemailer.createTransport({
          host: config.host,
          port: config.port,
          secure: false,
          auth: {
            user: config.user,
            pass: config.password
          },
          tls: { rejectUnauthorized: false }
        });

        await transporter.sendMail(mailOptions, (error: any, info: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(this.sucess);
          }
        });
      } catch (err) {
        reject(err);
      }
    });
  }
}