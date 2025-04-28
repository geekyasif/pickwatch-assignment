const Router = require("koa-router");
const ItemController = require("./controller");
const router = new Router();

router.get("/", ItemController.getItemList);
router.get("/:id", ItemController.getItemDetails);
router.delete("/:id", ItemController.deleteItem);

module.exports = router;
