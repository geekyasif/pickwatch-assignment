const Koa = require("koa");
const app = new Koa();
const routes = require("./src/routes");

app.use(routes.routes(), routes.allowedMethods());

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
