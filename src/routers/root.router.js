const express = require("express");
const { authRouter } = require("./auth.router");
const { movieRouter } = require("./movie.router");
const { userRouter } = require("./user.router");

const rootRouter = express.Router();

rootRouter.use("/user", userRouter);

rootRouter.use("/auth", authRouter);

rootRouter.use("/movie", movieRouter)

module.exports = {
	rootRouter,
};
