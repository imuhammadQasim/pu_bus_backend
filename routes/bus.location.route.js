const express = require("express");
const busLocationRouter = express.Router();
const { busController } = require("../controller");

// Route to get all live bus locations
busLocationRouter.get("/get-live-buses", busController.getLiveLocations);

// Route to get a specific bus location
busLocationRouter.get("/:id", busController.getBusLocation);

module.exports = busLocationRouter;
