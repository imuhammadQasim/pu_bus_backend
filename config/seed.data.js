const prisma = require("../database/prisma");
const { gates, campuses, hostels, grounds, routes } = require("../constants");

async function seed() {
  try {
    await prisma.location.createMany({
      data: gates.map((gate) => ({
        ...gate,
        type: "GATE",
      })),
    });
    await prisma.location.createMany({
      data: campuses.map((campus) => ({
        ...campus,
        type: "CAMPUS",
      })),
    });
    await prisma.location.createMany({
      data: hostels.map((hostel) => ({
        ...hostel,
        type: "HOSTEL",
      })),
    });
    await prisma.location.createMany({
      data: grounds.map((ground) => ({
        ...ground,
        type: "GROUND",
      })),
    });

    console.log("Seeding routes...");
    for (const route of routes) {
      await prisma.route.create({
        data: {
          name: route.name,
          desc: route.desc,
          color: route.color,
          waypoints: {
            create: route.waypoints.map((wp) => ({
              name: wp.name,
              lat: wp.lat,
              lng: wp.lng,
            })),
          },
          batches: {
            create: route.batches.map((batch) => ({
              batch: batch.toUpperCase(),
            })),
          },
        },
      });
    }
  } catch (error) {
    console.log("Seeding failed", error);
  } finally {
    await prisma.$disconnect();
  }
}
module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log("Seeding completed successfully.");
      process.exit(0);
    })
    .catch((error) => {
      console.error("Seeding failed:", error);
      process.exit(1);
    });
}
