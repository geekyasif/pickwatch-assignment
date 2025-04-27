const Router = require("koa-router");
const router = new Router();
const itemRoutes = require("./items/router");

router.get("/", async (ctx) => {
  ctx.body = "Welcome to KOA";
});

router.use("/items", itemRoutes.routes(), itemRoutes.allowedMethods());

module.exports = router;
