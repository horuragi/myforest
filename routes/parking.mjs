import express from "express";
const router = express.Router();

router.get("/", function (req, res) {
  const renderPage = "parking";
  res.render(renderPage, { session: req.session });
});

router.get(
  "/reservation/area/:area/startDate/:startDate/endDate/:endDate/parkingFee/:parkingFee",
  function (req, res) {
    const renderPage = "parking_reservation";
    res.render(renderPage, { session: req.session });
  }
);

export default router;
