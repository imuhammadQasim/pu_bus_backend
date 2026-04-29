const express = require("express");
const lostFoundRouter = express.Router();
// const { lostFoundController } = require("../controller");

// Standard RESTful routes
lostFoundRouter.get("/lost-and-found", lostFoundController.getAllRoutes);
lostFoundRouter.post("/add-lost-and-found", lostFoundController.addLostAndFound);
lostFoundRouter.put("/update-lost-and-found/:id", lostFoundController.updateLostAndFound);
lostFoundRouter.delete("/delete-lost-and-found/:id", lostFoundController.deleteLostAndFound);

module.exports = lostFoundRouter;
