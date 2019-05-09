import "../../env";
import * as request from "request";

export const sendSMS = (text: string) => {
  if (process.env.SMS_ENABLED === "true") {
    request.post(
      "https://textbelt.com/text",
      {
        form: {
          phone: process.env.PHONE_NUMBER,
          message: text,
          key: process.env.TEXTBELT_KEY
        }
      },
      (err, httpResponse, body) => {
        if (err) {
          console.error("Error:", err);
          return;
        }
        console.log(JSON.parse(body));
      }
    );
  }
};
