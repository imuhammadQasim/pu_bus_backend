const prisma = require("../database/prisma");
const asyncHandler = require("../utils/async.handler");
const APIRESPONSE = require("../utils/api.response");
const APIERROR = require("../utils/api.error");

/**
 * Get Live location of the Buses
 */
const getLiveLocations = asyncHandler(async (req, res) => {
  const buses = await prisma.bus.findMany({
    where: {
      status: "ACTIVE",
    },
    include: {
      route: true,
    },
  });

  const liveData = buses.map((bus) => {
    return {
      id: bus.id,
      busNumber: bus.busNumber,
      status: bus.status,
      lat: bus.lat || 31.498418 + (Math.random() - 0.5) * 0.01,
      lng: bus.lng || 74.298244 + (Math.random() - 0.5) * 0.01,
      lastUpdated: bus.lastUpdated,
      route: bus.route
        ? {
            id: bus.route.id,
            name: bus.route.name,
            color: bus.route.color,
          }
        : null,
    };
  });
  return res
    .status(200)
    .json(
      new APIRESPONSE(200, liveData, "Live bus locations fetched successfully"),
    );
});

/**
 * Get a specific bus location
 */
const getBusLocation = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const bus = await prisma.bus.findUnique({
    where: { id },
    include: {
      route: true,
    },
  });

  if (!bus) {
    throw new APIERROR(404, "Bus not found");
  }

  // Dummy coordinate fallback if null
  const busData = {
    ...bus,
    lat: bus.lat || 31.498418,
    lng: bus.lng || 74.298244,
  };

  return res
    .status(200)
    .json(new APIRESPONSE(200, busData, "Bus location fetched successfully"));
});

/**
 * Get all buses (Admin)
 */
const getAllBuses = asyncHandler(async (req, res) => {
  const buses = await prisma.bus.findMany({
    include: {
      route: true,
    },
    orderBy: {
      busNumber: "asc",
    },
  });

  return res
    .status(200)
    .json(new APIRESPONSE(200, buses, "All buses fetched successfully"));
});

module.exports = {
  getLiveLocations,
  getBusLocation,
  getAllBuses,
};
