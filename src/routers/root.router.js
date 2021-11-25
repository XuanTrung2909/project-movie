const express = require("express");
const { authRouter } = require("./auth.router");

const { cineplexRouter } = require("./cineplex.router");
const { movieRouter } = require("./movie.router");
const { userRouter } = require("./user.router");
const { cinemaRouter } = require("./cinema.router");

const rootRouter = express.Router();

rootRouter.use("/user", userRouter);

rootRouter.use("/auth", authRouter);

rootRouter.use("/movie", movieRouter);

rootRouter.use("/cineplex", cineplexRouter);

rootRouter.use("/cinema", cinemaRouter);

module.exports = {
	rootRouter,
};
