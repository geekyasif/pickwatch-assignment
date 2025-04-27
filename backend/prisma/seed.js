const { PrismaClient } = require("@prisma/client");
const data = require("../constants/data.json");

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.items.deleteMany();

    await prisma.items.createMany({
      data: data,
    });
    console.log("success");
  } catch (error) {
    throw error;
  }
}

main()
  .then(async () => {
    console.log("✅ Seed completed");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seed failed", e);
    await prisma.$disconnect();
    process.exit(1);
  });
