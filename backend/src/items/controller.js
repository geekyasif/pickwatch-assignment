class ItemController {
  static async getItemList(ctx, next) {
    try {
      //   const { page = 1, pageSize = 10 } = ctx.request;
      return (ctx.body = "geetting the items list");
    } catch (error) {
      console.log("Something went wrong! while fetching the item list", error);
      next(error);
    }
  }
  static async getItemDetails(ctx, next) {
    try {
    } catch (error) {
      console.log(
        "Something went wrong while fetching the item details.",
        error
      );
      next(error);
    }
  }
}

module.exports = ItemController;
