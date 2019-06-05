import * as express from "express";
const router = express.Router();

export const pingRouter = router.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Pong!"
  });
});
