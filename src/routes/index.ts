import * as express from "express";
const router = express.Router();

export const indexRouter = router.get("/", (req, res) => {
  res.redirect("https://github.com/GruselhausOrganization/api");
});
