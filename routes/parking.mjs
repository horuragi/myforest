import express from "express";
const router = express.Router();

router.get("/", function (req, res) {
  renderPage = "parking";
  res.render(renderPage, { session: req.session });
});

export default router;
