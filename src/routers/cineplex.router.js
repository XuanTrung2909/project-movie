const express = require("express");
const {
	getAllCineplex,
	getAllCineplexByPagination,
	createCineplex,
	removeCineplex,
	updateCineplex,
} = require("../controllers/cineplex.controller");
const {
	authentication,
	authorize,
} = require("../middlewares/auth/verify-token.middleware");
const {
	uploadImageSingle,
} = require("../middlewares/upload/upload-imgage.middleware");
const {
	checkExist,
} = require("../middlewares/validation/check-exist.middleware");
const { Cineplex } = require("./../models");

const cineplexRouter = express.Router();

cineplexRouter.get("/get-all-cineplex", getAllCineplex);
cineplexRouter.get(
	"/get-all-cineplex-by-pagination",
	getAllCineplexByPagination,
);
cineplexRouter.post(
	"/create-cineplex",
	authentication,
	authorize(["ADMIN"]),
	uploadImageSingle("logo"),
	createCineplex,
);
cineplexRouter.delete(
	"/remove-cineplex-id=:id",
	authentication,
	authorize(["ADMIN"]),
	checkExist(Cineplex),
	removeCineplex,
);
cineplexRouter.put(
	"/update-cineplex-id=:id",
	authentication,
	authorize(["ADMIN"]),
	checkExist(Cineplex),
	uploadImageSingle("logo"),
	updateCineplex,
);

module.exports = {
	cineplexRouter,
};
