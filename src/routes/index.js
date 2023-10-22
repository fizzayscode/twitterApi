const express = require("express");

const userRouter = require("./user-routes");

const tweetRouter = require("./tweet-routes");

const authRouter = require("./auth");

const appRouter = express.Router();

appRouter.use("/user", userRouter);
appRouter.use("/tweet", tweetRouter);
appRouter.use("/auth", authRouter);

module.exports = appRouter;
