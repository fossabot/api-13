import * as express from "express";
const router = express.Router();

export const github = router.get("/", (req, res) => {
  res.redirect("https://github.com/GruselhausOrganization/api");
});
