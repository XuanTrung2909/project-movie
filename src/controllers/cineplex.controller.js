const { URL } = require("../utils/constant");
const { Cineplex } = require("./../models");

const getAllCineplex = async (req, res) => {
	try {
		const cineplexList = await Cineplex.findAll();
		res.status(200).send(cineplexList);
	} catch (error) {
		res.status(200).send(error);
	}
};

const getAllCineplexByPagination = async (req, res) => {
	try {
		let { page, pageLimit } = req.query;
		page = parseInt(page);
		pageLimit = parseInt(pageLimit);

		const totalCineplex = await Cineplex.count();

		let totalPage = Math.floor(totalCineplex / pageLimit);

		const mod = totalCineplex % pageLimit;

		if (mod !== 0) {
			totalPage = totalPage + 1;
		}
		if (page > totalPage) {
			page = totalPage;
		}
		if (page < 1) {
			page = 1;
		}
		if (pageLimit < 1) {
			pageLimit = 1;
		}
		if (pageLimit > totalCineplex) {
			pageLimit = totalCineplex;
		}
		const startPage = (page - 1) * pageLimit;

		const cineplexList = await Cineplex.findAll({
			offset: startPage,
			limit: pageLimit,
		});

		res.status(200).send({
			page,
			pageLimit,
			totalPage,
			totalCineplex,
			cineplexList,
		});
	} catch (error) {
		res.status(500).send(error);
	}
};

const createCineplex = async (req, res) => {
	try {
		const { cineplexName } = req.body;
		const { file } = req;
		const logo = `${URL}${file.path}`;
		const newCineplex = await Cineplex.create({ cineplexName, logo });
		res.status(201).send(newCineplex);
	} catch (error) {
		res.status(500).send(error);
	}
};
const removeCineplex = async (req, res) => {
	try {
		const { id } = req.params;

		const { detailInfo } = req;

		await Cineplex.destroy({
			where: {
				id,
			},
		});

		res.status(200).send({
			message: "xóa cineplex thành công",
			detailInfo,
		});
	} catch (error) {
		res.status(500).send(error);
	}
};
const updateCineplex = async (req, res) => {
	try {
		const { id } = req.params;
		const { cineplexName } = req.body;
		const { file } = req;
		const logo = `${URL}${file.path}`;
		await Cineplex.update(
			{ cineplexName, logo },
			{
				where: {
					id,
				},
			},
		);
		res.status(200).send({
			message: "Cineplex đã được chỉnh sửa thành công",
		});
	} catch (error) {
		res.status(500).send(error);
	}
};

module.exports = {
	getAllCineplex,
	getAllCineplexByPagination,
	createCineplex,
	removeCineplex,
	updateCineplex,
};
