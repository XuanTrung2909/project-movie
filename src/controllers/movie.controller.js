const { Movie, sequelize } = require("../models");
const { Op } = require("sequelize");
const { URL } = require("../utils/constant");

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

		let totalPage = Math.floor(totalMovie / limit);
		const mod = totalMovie % limit;
		if (mod != 0) {
			totalPage = totalPage + 1;
		}
		if (page < 1) {
			page = 1;
		}
		if (page > totalPage) {
			page = totalPage;
		}
		if (limit < 1) {
			limit = 1;
		}
		if (limit > totalMovie) {
			limit = totalMovies;
		}

		const startPage = (page - 1) * limit;

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
const searchMovie = async (req, res) => {
	try {
		const { movieName, startDate } = req.query;
		const movieListSearch = await Movie.findAll({
			where: {
				[Op.and]: {
					movieName: {
						[Op.like]: `${movieName}%`,
					},
					startDate: {
						[Op.like]: `${startDate}`,
					},
				},
			},
		});
		res.status(200).send(movieListSearch);
	} catch (error) {
		res.status(500).send(error);
	}
};
const searchMovieByName = async (req, res) => {
	try {
		const { movieName } = req.query;
		const movieList = await Movie.findAll({
			where: {
				movieName: {
					[Op.like]: `${movieName}%`,
				},
			},
		});
		res.status(200).send(movieList);
	} catch (error) {
		res.status(500).send(error);
	}
};

const movieDetail = async (req, res) => {
	try {
		const { id } = req.params;
		const movieDetail = await Movie.findByPk(id);
		const stringQuery = `
      select *, cinemas.id as cinemaid from cinemas
      inner join cinema_movies
      on cinemas.id = cinema_movies.cinemaId
      inner join showtimes
      on cinemas.id = showtimes.cinemaId
      where cinema_movies.movieId = 1;
    `;
		const [data] = await Movie.sequelize.query(stringQuery);

		// const newData = data.map((item) => ({
		//   cinemaName: item.name,
		//   address: item.address,s
		//   image: item.image,
		//   showtimeList: item.startTime,
		// }));s

		res.status(200).send({ movieDetail, showtimeList: data });
	} catch (error) {
		res.status(500).send(error);
	}
};

const createMovie = async (req, res) => {
	try {
		let { movieName, startDate, time, evaluate, trailer } = req.body;
		time = parseInt(time);
		evaluate = parseInt(evaluate);

		const { file } = req;
		const poster = `${URL}${file.path}`;
		const newMovie = await Movie.create({
			movieName,
			startDate,
			time,
			evaluate,
			poster,
			trailer,
		});

		res.status(201).send(newMovie);
	} catch (error) {
		res.status(500).send(error);
	}
};
const removeMovie = async (req, res) => {
	try {
		const { id } = req.params;
		const { detailInfo } = req;
		await Movie.destroy({
			where: {
				id,
			},
		});
		res.status(200).send({
			message: "Xóa movie thành công",
			detailInfo,
		});
	} catch (error) {
		res.status(500).send(error);
	}
};

const updateMovie = async (req, res) => {
	try {
		const { id } = req.params;
		let { movieName, startDate, time, evaluate, trailer } = req.body;
		time = parseInt(time);
		evaluate = parseInt(evaluate);
		const { file } = req;
		const poster = `${URL}${file.path}`;
		await Movie.update(
			{ movieName, startDate, time, evaluate, poster, trailer },
			{
				where: {
					id,
				},
			},
		);

		res.status(200).send({
			message: "chỉnh sủa thông tin thành công",
		});
	} catch (error) {
		res.status(500).send(error);
	}
};

module.exports = {
	getAllMovie,
	getAllMoviePagination,
	searchMovie,
	movieDetail,
	createMovie,
	removeMovie,
	updateMovie,
	searchMovieByName,
};
