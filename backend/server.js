const Koa = require("koa");
const cors = require("@koa/cors");
const app = new Koa();
const routes = require("./src/routes");

app.use(
  cors({
    origin(ctx) {
      return ctx.get("Origin") || "*";
    },
  })
);

app.use(routes.routes(), routes.allowedMethods());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    console.error(err);
    ctx.body = {
      message: err.message,
    };
  }
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
