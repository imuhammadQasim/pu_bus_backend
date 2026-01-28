const prisma = require("../database/prisma");
const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");
const ApiError = require("../utils/ApiError");

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
          // Assuming waypoints should be ordered by their sequence if added later
          // For now, we include them all
        },
      },
      batches: true,
    },
  });

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { routes, count: routes.length },
        "Routes fetched successfully",
      ),
    );
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
    throw new ApiError(404, "Route not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, route, "Route fetched successfully"));
});

module.exports = {
  getAllRoutes,
  getRouteById,
};
