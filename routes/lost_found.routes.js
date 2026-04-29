const express = require("express");
const lostFoundRouter = express.Router();
const { lostFoundController } = require("../controller");
const authMiddleware = require("../middlewares/auth.middleware");

// Standard RESTful routes
lostFoundRouter.get("/", lostFoundController.getAllItems);
lostFoundRouter.post("/", authMiddleware, lostFoundController.addItem);
lostFoundRouter.put("/:id", authMiddleware, lostFoundController.updateItem);
lostFoundRouter.delete("/:id", authMiddleware, lostFoundController.deleteItem);

module.exports = lostFoundRouter;
