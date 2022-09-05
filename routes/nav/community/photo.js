/* 내부 모듈 */
const home_admin = require("../../../lib/home_admin");

/* express 생성하기 */
const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  const adarr = home_admin.get_adlist();
  res.render("photo", { session: req.session, adarr: adarr });
});

module.exports = router;
