import * as nodemailer from "nodemailer";

import config from "./config";

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
