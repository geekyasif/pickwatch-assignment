const data = require("../../constants/data.json");

class ItemService {
  static async findMany(params) {
    try {
      const { skip, limit } = params;
      const items = data.slice(skip, skip + limit);
      const total = data.length;
      return { items, total };
    } catch (error) {
      console.log(
        "Something went wrong while fetching the item list from db",
        error
      );
      throw new Error(error);
    }
  }

  static async findFirst(params) {
    try {
      const parsedId = Number(params.id);
      return data.find((item) => item.id === parsedId);
    } catch (error) {
      console.log("Something went wrong! fetching the details from db", error);
      throw new Error(error);
    }
  }

  static async delete() {}

  static async create() {}
}

module.exports = ItemService;
