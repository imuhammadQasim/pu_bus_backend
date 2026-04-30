const express = require("express");
const locationRoutes = require("./location.routes");
const busRoutes = require("./bus.route");
const busLocationRoutes = require("./bus.location.route");
const authRoutes = require("./auth.routes");
const lostFoundRoutes = require("./lost_found.routes");
const reportRoutes = require("./report.routes");
const router = express.Router();

router.use("/routes", busRoutes);
router.use("/locations", locationRoutes);
router.use("/buses", busLocationRoutes);
router.use("/auth", authRoutes);
router.use("/lost-found", lostFoundRoutes);
router.use("/reports", reportRoutes);

module.exports = router;
