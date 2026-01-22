const prisma = require("../database/prisma");
const asyncHandler = require("../utils/asyncHandler");

// get hostels
const getHostels = asyncHandler(async (req, res) => {
  const hostels = await prisma.location.findMany({
    where: {
      type: "HOSTEL",
    },
  });
  if (!hostels) {
    return res
      .status(404)
      .json({ success: false, message: "No hostels found" });
  }
  res
    .status(200)
    .json({ success: true, message: "Hostels fetched successfully", hostels });
});

// get campuses
const getCampuses = asyncHandler(async (req, res) => {
  const campuses = await prisma.location.findMany({
    where: {
      type: "CAMPUS",
    },
  });
  if (!campuses) {
    return res
      .status(404)
      .json({ success: false, message: "No campuses found" });
  }
  res
    .status(200)
    .json({
      success: true,
      message: "Campuses fetched successfully",
      campuses,
    });
});

// get gates
const getGates = asyncHandler(async (req, res) => {
  const gates = await prisma.location.findMany({
    where: {
      type: "GATE",
    },
  });
  if (!gates) {
    return res.status(404).json({ success: false, message: "No gates found" });
  }
  res
    .status(200)
    .json({ success: true, message: "Gates fetched successfully", gates });
});

// get grounds
const getGrounds = asyncHandler(async (req, res) => {
  const grounds = await prisma.location.findMany({
    where: {
      type: "GROUND",
    },
  });
  if (!grounds) {
    return res
      .status(404)
      .json({ success: false, message: "No grounds found" });
  }
  res
    .status(200)
    .json({ success: true, message: "Grounds fetched successfully", grounds });
});

module.exports = { getHostels, getCampuses, getGates, getGrounds };
