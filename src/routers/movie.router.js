const express = require("express");
const {
  getAllMovie,
  getAllMoviePagination,
  searchMovie,
  movieDetail,
} = require("../controllers/movie.controller");

const movieRouter = express.Router();

movieRouter.get("/get-all-movie", getAllMovie);

movieRouter.get("/get-all-movie-pagination", getAllMoviePagination);
movieRouter.get("/search-movie", searchMovie);
movieRouter.get("/:id", movieDetail);

module.exports = {
  movieRouter,
};
