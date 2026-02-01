const express = require("express");
const locationRoutes = require("./location.routes");
const busRoutes = require("./bus.route");
const busLocationRoutes = require("./bus.location.route");
const router = express.Router();

router.use("/routes", busRoutes);
router.use("/locations", locationRoutes);
router.use("/buses", busLocationRoutes);

module.exports = router;
