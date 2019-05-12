import * as express from "express";
const router = express.Router();

export const ping = router.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Pong!"
  });
});
