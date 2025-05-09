const { HTTP_STATUS_CODE } = require("../../constants");
const ResponseHandler = require("../../utils/responseHandler");
const ItemService = require("./service");

class ItemController {
  static async getItemList(ctx, next) {
    try {
      const { page = 1, pageSize = 10 } = ctx.request.query;
      const limit = Number(pageSize);
      const skip = (Number(page) - 1) * limit;

      const { items, total } = await ItemService.findMany({ skip, limit });
      const totalPages = Math.ceil(total / limit);

      return ResponseHandler.sendSucessResponse(
        ctx,
        {
          page,
          pageSize,
          totalPages,
          items,
          total,
        },
        "Items fetch successfully",
        HTTP_STATUS_CODE.OK
      );
    } catch (error) {
      console.log("Something went wrong! while fetching the item list", error);
      next(error);
    }
  }
  static async getItemDetails(ctx, next) {
    try {
      const { id } = ctx.request.params;

      if (!id || id === undefined || id === null) {
        return ResponseHandler.sendErrorResponse(
          ctx,
          "Item id is required!",
          HTTP_STATUS_CODE.BAD_REQUEST
        );
      }

      const item = await ItemService.findFirst({ id });

      if (!item) {
        return ResponseHandler.sendErrorResponse(
          ctx,
          "Item not found with specific id",
          HTTP_STATUS_CODE.NOT_FOUND
        );
      }

      return ResponseHandler.sendSucessResponse(
        ctx,
        { item },
        "Item found successfully",
        HTTP_STATUS_CODE.OK
      );
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
      const { id } = ctx.request.params;

      if (!id || id === undefined || id === null) {
        return ResponseHandler.sendErrorResponse(
          ctx,
          "Item id is required!",
          HTTP_STATUS_CODE.BAD_REQUEST
        );
      }

      await ItemService.delete({ id });

      return ResponseHandler.sendSucessResponse(
        ctx,
        { item: { id: id } },
        "Item delete successfully",
        HTTP_STATUS_CODE.OK
      );
    } catch (error) {
      console.log("Something went wrong while deleting the item", error);
      next(error);
    }
  }
}

module.exports = ItemController;
