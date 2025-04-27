const ItemService = require("./service");

class ItemController {
  static async createItem(ctx, next) {
    try {
    } catch (error) {
      console.log("Something went wrong! while creating the item", error);
      next(error);
    }
  }

  static async getItemList(ctx, next) {
    try {
      const { page = 1, pageSize = 10 } = ctx.request.query;
      const limit = Number(pageSize);
      const skip = (Number(page) - 1) * limit;

      const { items, total } = await ItemService.findMany({ skip, limit });
      const totalPages = Math.ceil(total / limit);

      return (ctx.body = { page, pageSize, totalPages, items, total });
    } catch (error) {
      console.log("Something went wrong! while fetching the item list", error);
      next(error);
    }
  }
  static async getItemDetails(ctx, next) {
    try {
      const { id } = ctx.request.params;
      const item = await ItemService.findFirst({ id });
      return (ctx.body = {
        item,
      });
    } catch (error) {
      console.log(
        "Something went wrong while fetching the item details.",
        error
      );
      next(error);
    }
  }
  static async deleteItem(ctx, next) {
    try {
    } catch (error) {
      console.log("Something went wrong while deleting the item", error);
      next(error);
    }
  }
}

module.exports = ItemController;
