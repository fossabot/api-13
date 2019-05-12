import "../../env";
import { Mail } from "./mail";
import { verifyKey } from "../Lib/verify";
import * as express from "express";
const router = express.Router();

export const mail_service = router.post("/", async (req, res) => {
  const api_key = req.query.key;
  const from = req.query.from;
  const to = req.query.to;
  const subject = req.query.subject;
  const message = req.query.message;
  if (!from || !to || !subject || !message) {
    res.status(400).json({ sucess: false, text: "Missing parameter" });
    return 0;
  }
  if (await verifyKey(process.env.SERVICE, api_key)) {
    const mail = new Mail(from, to, subject, message);
    mail.sendMail();
    res.status(200).json({ sucess: true, text: "Mail sent!" });
  } else {
    res.status(401).json({ sucess: false, text: "Auth failed!" });
  }
});
