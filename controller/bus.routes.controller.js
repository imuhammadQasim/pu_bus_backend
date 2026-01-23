const prisma = require("../database/prisma");
const asyncHandler = require("../utils/asyncHandler");

const getAllRoutes = asyncHandler(async (req, res) => {
  const { batch } = req.params;
  const { search } = req.query;

  const where = {};

  if (batch) {
    where.batches = {
      some: {
        batch: batch.toUpperCase(),
      },
    };
  }

  if (search) {
    where.name = {
      contains: search,
      mode: "insensitive",
    };
  }

  const routes = await prisma.route.findMany({
    where,
    include: {
      waypoints: {
        orderBy: {
          // Assuming we want them in insertion order or by some id if no index
          // But currently the schema doesn't have an order index.
          // We'll just include them.
        },
      },
      batches: true,
    },
  });
  res.status(200).json({
    success: true,
    count: routes.length,
    message: "Routes fetched successfully",
    routes,
  });
});

const getRouteById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const route = await prisma.route.findUnique({
    where: { id },
    include: {
      waypoints: true,
      batches: true,
    },
  });

  if (!route) {
    return res.status(404).json({ success: false, message: "Route not found" });
  }

  res.status(200).json({
    success: true,
    message: "Route fetched successfully",
    route,
  });
});

module.exports = {
  getAllRoutes,
  getRouteById,
};
