const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient();

async function check() {
  try {
    const userCount = await prisma.user.count();
    const routeCount = await prisma.route.count();
    const itemCount = await prisma.lostAndFoundItem.count();
    console.log({ userCount, routeCount, itemCount });
    
    if (userCount > 0) {
      const users = await prisma.user.findMany({ take: 1 });
      console.log("Sample User:", users[0]);
    }
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

check();
