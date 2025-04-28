const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ItemService {
  static async findMany(params) {
    try {
      const { skip, limit } = params;
      const items = await prisma.items.findMany({
        skip: skip,
        take: limit,
      });
      const total = await prisma.items.count();
      return { items, total };
    } catch (error) {
      console.log(
        "Something went wrong while fetching the item list from db",
        error
      );
      throw error;
    }
  }

  static async findFirst(params) {
    try {
      const parsedId = Number(params.id);
      return await prisma.items.findFirst({
        where: {
          id: parsedId,
        },
      });
    } catch (error) {
      console.log("Something went wrong! fetching the details from db", error);
      throw error;
    }
  }

  static async delete(params) {
    try {
      const id = Number(params.id);
      await prisma.items.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      thro;
    }
  }
}

module.exports = ItemService;
