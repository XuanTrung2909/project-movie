const express = require("express");
const {
  getAllMovie,
  getAllMoviePagination,
} = require("../controllers/movie.controller");

const movieRouter = express.Router();

movieRouter.get("/get-all-movie", getAllMovie);

movieRouter.get("/get-all-movie-pagination", getAllMoviePagination);

module.exports = {
  movieRouter,
};
