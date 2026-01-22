const express = require("express");
const locationRoutes = require("./location.routes");
const busRoutes = require("./bus.route");
const router = express.Router();

router.use("/routes", busRoutes);
router.use("/locations", locationRoutes);
module.exports = router;
