import * as express from "express";
const router = express.Router();

export const index = router.get("/", (req, res) => {
  res.redirect("https://github.com/GruselhausOrganization/api");
});
