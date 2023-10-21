const express = require("express");

const userRouter = require("./user-routes");

const tweetRouter = require("./tweet-routes");

const appRouter = express.Router();

appRouter.use("/user", userRouter);
appRouter.use("/tweet", tweetRouter);

module.exports = appRouter;
