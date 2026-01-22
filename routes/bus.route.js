const express = require("express");
const busRouter = express.Router();
const { busController } = require("../controller");

busRouter.get("/get-all-routes", busController);
module.exports = busRouter;
