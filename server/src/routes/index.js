const authRouter = require("./auth");
const collectionRouter = require("./collection");
const userRouter = require("./user");
const evaluateRouter = require("./evaluate");

const initRoutes = (app) => {
  app.use("/api/auth", authRouter);
  app.use("/api/collections", collectionRouter);
  app.use("/api/users", userRouter);
  app.use("/api/evaluate", evaluateRouter);
};
module.exports = initRoutes;
