const express = require("express");
const { Movie } = require("./../models");
const {
	getAllMovie,
	getAllMoviePagination,
	searchMovie,
	movieDetail,
	createMovie,
	removeMovie,
	updateMovie,
	searchMovieByName,
} = require("../controllers/movie.controller");
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

const movieRouter = express.Router();

movieRouter.get("/get-all-movie", getAllMovie);

movieRouter.get("/get-all-movie-pagination", getAllMoviePagination);
movieRouter.get("/search-movie", searchMovie);
movieRouter.get("/movieId=:id", movieDetail);
movieRouter.post(
	"/create-movie",
	authentication,
	authorize(["ADMIN"]),
	uploadImageSingle("poster"),
	createMovie,
);

movieRouter.delete(
	"/remove-movie-id=:id",
	authentication,
	authorize(["ADMIN"]),
	checkExist(Movie),
	removeMovie,
);
movieRouter.put(
	"/update-movie-id=:id",
	authentication,
	authorize(["ADMIN"]),
	checkExist(Movie),
	uploadImageSingle("poster"),
	updateMovie,
);
movieRouter.get("/search-movie-by-name", searchMovieByName);

module.exports = {
	movieRouter,
};
