const { Movie, sequelize } = require("../models");
const { Op } = require("sequelize");

const getAllMovie = async (req, res) => {
  try {
    const movieList = await Movie.findAll();
    res.status(200).send(movieList);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getAllMoviePagination = async (req, res) => {
  try {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    const totalMovie = await Movie.count();
    if (page < 1) {
      page = 1;
    }
    if (page > totalMovie) {
      page = totalMovie;
    }
    if (limit < 1) {
      limit = 1;
    }
    const startPage = (page - 1) * limit;

    let totalPage = Math.floor(totalMovie / limit);
    const mod = totalMovie % limit;

    if (mod != 0) {
      totalPage = totalPage + 1;
    }

    const movieList = await Movie.findAll({
      limit: limit,
      offset: startPage,
    });

    res.status(200).send({
      page,
      limit,
      totalPage,
      totalMovie,
      movieList,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllMovie,
  getAllMoviePagination,
};
