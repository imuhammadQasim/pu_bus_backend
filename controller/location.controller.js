const prisma = require("../database/prisma");
const asyncHandler = require("../utils/async.handler");
const APIRESPONSE = require("../utils/api.response");
const APIERROR = require("../utils/api.error");

// get hostels
const getHostels = asyncHandler(async (req, res) => {
  const hostels = await prisma.location.findMany({
    where: {
      type: "HOSTEL",
    },
  });

  return res
    .status(200)
    .json(new APIRESPONSE(200, hostels, "Hostels fetched successfully"));
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
    .json(new APIRESPONSE(200, campuses, "Campuses fetched successfully"));
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
    .json(new APIRESPONSE(200, gates, "Gates fetched successfully"));
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
    .json(new APIRESPONSE(200, grounds, "Grounds fetched successfully"));
});

module.exports = { getHostels, getCampuses, getGates, getGrounds };
