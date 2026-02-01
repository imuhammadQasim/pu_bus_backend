const prisma = require("../database/prisma");
const { gates, campuses, hostels, grounds, routes } = require("../constants");

async function seed() {
  try {
    await prisma.bus.deleteMany();
    await prisma.routeBatch.deleteMany();
    await prisma.waypoint.deleteMany();
    await prisma.route.deleteMany();
    await prisma.location.deleteMany();

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
    const createdRoutes = [];
    for (const route of routes) {
      const createdRoute = await prisma.route.create({
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
      createdRoutes.push(createdRoute);
    }

    console.log("Seeding buses...");
    for (let i = 0; i < createdRoutes.length; i++) {
      const route = createdRoutes[i];
      // Create 2 buses for each route
      for (let j = 1; j <= 2; j++) {
        const busNumber = `BUS-R${i + 1}-B${j}`;
        await prisma.bus.create({
          data: {
            busNumber,
            status: "ACTIVE",
            routeId: route.id,
            // Initial random location near PU
            lat: 31.498418 + (Math.random() - 0.5) * 0.01,
            lng: 74.298244 + (Math.random() - 0.5) * 0.01,
          },
        });
      }
    }
  } catch (error) {
    console.error("Seeding failed with error:", error);
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
