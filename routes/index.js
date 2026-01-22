const express = require("express");
const busRoutes = require('./bus.route')
const router = express.Router();

router.use("/routes", busRoutes);

module.exports = router;