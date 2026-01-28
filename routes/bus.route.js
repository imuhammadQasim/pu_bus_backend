const express = require("express");
const busRouter = express.Router();
const { busRouteController } = require("../controller");

// Standard RESTful routes
busRouter.get("/", busRouteController.getAllRoutes);
busRouter.get("/batch/:batch", busRouteController.getAllRoutes);
busRouter.get("/:id", busRouteController.getRouteById);

module.exports = busRouter;
