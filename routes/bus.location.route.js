const express = require("express");
const busLocationRouter = express.Router();
const { busController } = require("../controller");
const adminMiddleware = require("../middlewares/admin.middleware");

// Route to get all live bus locations
busLocationRouter.get("/get-live-buses", busController.getLiveLocations);

// Route to get all buses (Admin)
busLocationRouter.get("/get-all-buses", adminMiddleware, busController.getAllBuses);

// Route to get a specific bus location
busLocationRouter.get("/:id", busController.getBusLocation);

module.exports = busLocationRouter;
