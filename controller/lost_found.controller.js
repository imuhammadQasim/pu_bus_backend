const prisma = require("../database/prisma");
const asyncHandler = require("../utils/async.handler");
const APIRESPONSE = require("../utils/api.response");
const APIERROR = require("../utils/api.error");

/**
 * @desc Get all lost and found items
 * @route GET /api/lost-found
 */
const getAllItems = asyncHandler(async (req, res) => {
  const { type, status, routeId } = req.query;

  const where = {};
  if (type) where.type = type;
  if (status) where.status = status;
  if (routeId) where.routeId = routeId;

  const items = await prisma.lostAndFoundItem.findMany({
    where,
    include: {
      user: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
        },
      },
      route: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return res
    .status(200)
    .json(
      new APIRESPONSE(
        200,
        { items, count: items.length },
        "Lost and found items fetched successfully"
      )
    );
});

/**
 * @desc Add a new lost or found item
 * @route POST /api/lost-found
 */
const addItem = asyncHandler(async (req, res) => {
  const { type, category, title, description, contact, routeId } = req.body;
  const userId = req.user?.id; // Assuming user is attached by auth middleware

  if (!type || !category || !title || !description || !contact || !routeId) {
    throw new APIERROR(400, "All fields are required");
  }

  if (!userId) {
    throw new APIERROR(401, "User must be logged in");
  }

  const newItem = await prisma.lostAndFoundItem.create({
    data: {
      type,
      category,
      title,
      description,
      contact,
      routeId,
      userId,
    },
    include: {
      route: true,
      user: true
    }
  });

  return res
    .status(201)
    .json(new APIRESPONSE(201, newItem, "Item reported successfully"));
});

/**
 * @desc Update a lost or found item (e.g., mark as resolved)
 * @route PUT /api/lost-found/:id
 */
const updateItem = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status, title, description, contact, category, routeId } = req.body;
  const userId = req.user?.id;

  const item = await prisma.lostAndFoundItem.findUnique({
    where: { id },
  });

  if (!item) {
    throw new APIERROR(404, "Item not found");
  }

  // Check if the user is the owner
  if (item.userId !== userId) {
    throw new APIERROR(403, "You are not authorized to update this item");
  }

  const updatedItem = await prisma.lostAndFoundItem.update({
    where: { id },
    data: {
      status: status || item.status,
      title: title || item.title,
      description: description || item.description,
      contact: contact || item.contact,
      category: category || item.category,
      routeId: routeId || item.routeId,
    },
  });

  return res
    .status(200)
    .json(new APIRESPONSE(200, updatedItem, "Item updated successfully"));
});

/**
 * @desc Delete a lost or found item
 * @route DELETE /api/lost-found/:id
 */
const deleteItem = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userId = req.user?.id;

  const item = await prisma.lostAndFoundItem.findUnique({
    where: { id },
  });

  if (!item) {
    throw new APIERROR(404, "Item not found");
  }

  // Check if the user is the owner
  if (item.userId !== userId) {
    throw new APIERROR(403, "You are not authorized to delete this item");
  }

  await prisma.lostAndFoundItem.delete({
    where: { id },
  });

  return res
    .status(200)
    .json(new APIRESPONSE(200, null, "Item deleted successfully"));
});

module.exports = {
  getAllItems,
  addItem,
  updateItem,
  deleteItem,
};
