const express = require("express");
const busRouter = express.Router();
const { busRouteController } = require("../controller");

busRouter.get("/get-all-routes", busRouteController.getAllRoutes);
busRouter.get("/get-all-routes/:batch", busRouteController.getAllRoutes);
busRouter.get("/get-route/:id", busRouteController.getRouteById);
module.exports = busRouter;
