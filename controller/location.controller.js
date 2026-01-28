const prisma = require("../database/prisma");
const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");
const ApiError = require("../utils/ApiError");

// get hostels
const getHostels = asyncHandler(async (req, res) => {
  const hostels = await prisma.location.findMany({
    where: {
      type: "HOSTEL",
    },
  });

  return res
    .status(200)
    .json(new ApiResponse(200, hostels, "Hostels fetched successfully"));
});

// get campuses
const getCampuses = asyncHandler(async (req, res) => {
  const campuses = await prisma.location.findMany({
    where: {
      type: "CAMPUS",
    },
  });

  return res
    .status(200)
    .json(new ApiResponse(200, campuses, "Campuses fetched successfully"));
});

// get gates
const getGates = asyncHandler(async (req, res) => {
  const gates = await prisma.location.findMany({
    where: {
      type: "GATE",
    },
  });

  return res
    .status(200)
    .json(new ApiResponse(200, gates, "Gates fetched successfully"));
});

// get grounds
const getGrounds = asyncHandler(async (req, res) => {
  const grounds = await prisma.location.findMany({
    where: {
      type: "GROUND",
    },
  });

  return res
    .status(200)
    .json(new ApiResponse(200, grounds, "Grounds fetched successfully"));
});

module.exports = { getHostels, getCampuses, getGates, getGrounds };
