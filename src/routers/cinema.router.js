const express = require("express");
const { Cinema } = require("../models");
const {
	getAllCinema,
	getAllCinemaPagination,
	searchCinemaByName,
	createCinema,
	removeCinema,
	updateCinema,
} = require("../controllers/cinema.controller");
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

const cinemaRouter = express.Router();

cinemaRouter.get("/get-all-cinema", getAllCinema);
cinemaRouter.get("/get-all-cinema-pagination", getAllCinemaPagination);
cinemaRouter.get("/search-cinema-by-cinemaName", searchCinemaByName);
cinemaRouter.post(
	"/create-cinema",
	authentication,
	authorize(["ADMIN"]),
	uploadImageSingle("cinemaImg"),
	createCinema,
);
cinemaRouter.delete(
	"/remove-cinema-id=:id",
	authentication,
	authorize(["ADMIN"]),
	checkExist(Cinema),
	removeCinema,
);
cinemaRouter.put(
	"/update-cinema-id=:id",
	authentication,
	authorize(["ADMIN"]),
	checkExist(Cinema),
	uploadImageSingle("cinemaImg"),
	updateCinema,
);

module.exports = {
	cinemaRouter,
};
