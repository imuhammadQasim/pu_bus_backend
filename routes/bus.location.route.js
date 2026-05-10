const express = require("express");
const busLocationRouter = express.Router();
const { busController } = require("../controller");
const adminMiddleware = require("../middlewares/admin.middleware");

// Route to get all live bus locations
busLocationRouter.get("/get-live-buses", busController.getLiveLocations);

// Route to get all buses (Admin)
busLocationRouter.get(
  "/get-all-buses",
  adminMiddleware,
  busController.getAllBuses,
);

// Route to get a specific bus location
busLocationRouter.get("/:id", busController.getBusLocation);

// Route to create a bus (Admin)
busLocationRouter.post("/create-bus", adminMiddleware, busController.createBus);

// Route to update a bus (Admin)
busLocationRouter.put("/:id", adminMiddleware, busController.updateBus);

// Route to delete a bus (Admin)
busLocationRouter.delete("/:id", adminMiddleware, busController.deleteBus);

module.exports = busLocationRouter;
