const prisma = require("../database/prisma");
const asyncHandler = require("../utils/async.handler");
const APIRESPONSE = require("../utils/api.response");
const APIERROR = require("../utils/api.error");

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
      new APIRESPONSE(
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
    throw new APIERROR(404, "Route not found");
  }

  return res
    .status(200)
    .json(new APIRESPONSE(200, route, "Route fetched successfully"));
});

module.exports = {
  getAllRoutes,
  getRouteById,
};
