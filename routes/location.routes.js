const express = require("express");
const locationRouter = express.Router();
// import controllers
const {
  getHostels,
  getCampuses,
  getGates,
  getGrounds,
} = require("../controller/location.controller");

// location routes
locationRouter.get("/hostels", getHostels);
locationRouter.get("/campuses", getCampuses);
locationRouter.get("/gates", getGates);
locationRouter.get("/grounds", getGrounds);

module.exports = locationRouter;
