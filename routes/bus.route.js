const express = require("express");
const busRouter = express.Router();
const { busRouteController } = require('../controller');

busRouter.get('/get-all-routes', busRouteController);
module.exports = busRouter;