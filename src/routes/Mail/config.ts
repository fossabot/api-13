import "../../env";

class Configs {
  public host: any;
  public port: any;
  public user: any;
  public password: any;
  constructor() {
    this.host = process.env.SENDGRID_HOST;
    this.port = process.env.SENDGRID_PORT;
    this.user = process.env.SENDGRID_USER;
    this.password = process.env.SENDGRID_PASSWORD;
  }
}

export default new Configs();
