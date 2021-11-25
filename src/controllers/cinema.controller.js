const { Cinema } = require("./../models");
const { Op } = require("sequelize");
const { URL } = require("../utils/constant");

const getAllCinema = async (req, res) => {
	try {
		const cinemaList = await Cinema.findAll();
		res.status(200).send(cinemaList);
	} catch (error) {
		res.status(500).send(error);
	}
};

const getAllCinemaPagination = async (req, res) => {
	try {
		let { page, limit } = req.query;
		page = parseInt(page);
		limit = parseInt(limit);
		const totalCinema = await Cinema.count();
		let totalPage = Math.floor(totalCinema / limit);
		const mod = totalCinema % limit;
		if (mod !== 0) {
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
		if (limit > totalCinema) {
			limit = totalCinema;
		}
		const startPage = (page - 1) * limit;
		const cinemaList = await Cinema.findAll({
			offset: startPage,
			limit: limit,
		});
		res.status(200).send({
			page,
			limit,
			totalCinema,
			totalPage,
			cinemaList,
		});
	} catch (error) {
		res.status(500).send(error);
	}
};

const searchCinemaByName = async (req, res) => {
	try {
		const { cinemaName } = req.query;
		const cinemaList = await Cinema.findAll({
			where: {
				cinemaName: {
					[Op.like]: `${cinemaName}%`,
				},
			},
		});
		res.status(200).send(cinemaList);
	} catch (error) {
		res.status(500).send(error);
	}
};

const createCinema = async (req, res) => {
	try {
		let { cinemaName, address, cineplexId } = req.body;
		cineplexId = parseInt(cineplexId);
		const { file } = req;
		const image = `${URL}${file.path}`;
		const newCinema = await Cinema.create({
			cinemaName,
			address,
			image,
			cineplexId,
		});
		res.status(201).send(newCinema);
	} catch (error) {
		res.status(500).send(error);
	}
};

const removeCinema = async (req, res) => {
	try {
		const { id } = req.params;
		const { detailInfo } = req;
		await Cinema.destroy({
			where: {
				id,
			},
		});
		res.status(200).send({
			message: "remove cinema thành công",
			detailInfo,
		});
	} catch (error) {
		res.status(500).send(error);
	}
};

const updateCinema = async (req, res) => {
	try {
		const { id } = req.params;
		const { file } = req;
		const image = `${URL}${file.path}`;
		let { cinemaName, address, cineplexId } = req.body;
		cineplexId = parseInt(cineplexId);
		await Cinema.update(
			{ cinemaName, address, image, cineplexId },
			{
				where: {
					id,
				},
			},
		);
		res.status(200).send({
			message: "chỉnh sửa thông tin Cinema thành công",
		});
	} catch (error) {
		res.status(500).send(error);
	}
};

module.exports = {
	getAllCinema,
	getAllCinemaPagination,
	searchCinemaByName,
	createCinema,
	removeCinema,
	updateCinema,
};
