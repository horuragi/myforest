var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  renderPage = "parking";
  res.render(renderPage, { session: req.session });
});

module.exports = router;
