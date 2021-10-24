const { User, sequelize } = require("../models");
const { Op } = require("sequelize");
const bcryptjs = require("bcryptjs");

const getAllUser = async (req, res) => {
	try {
		const userList = await User.findAll();
		res.status(200).send(userList);
	} catch (error) {
		res.status(500).send(error);
	}
};

const getUserDetail = async (req, res) => {
	try {
		// const { id } = req.params;
		// const userDetail = await User.findByPk(id);

		const { detailInfo } = req;

		res.status(200).send(detailInfo);
	} catch (error) {
		res.status(500).send(error);
	}
};
const getAllUserByPagination = async (req, res) => {
	try {
		let page = parseInt(req.query.page);
		let userLimitInPage = parseInt(req.query.userLimitInPage);

		const startPage = (page - 1) * userLimitInPage;
		const totalUser = await User.count();

		let totalPage = Math.floor(totalUser / userLimitInPage);
		const mod = totalUser % userLimitInPage;

		if (mod != 0) {
			totalPage = totalPage + 1;
		}

		if (page > totalPage) {
			page = totalPage;
		}
		if (page < 1) {
			page = 1;
		}
		if (userLimitInPage < 1) {
			userLimitInPage = 1;
		}

		const userList = await User.findAll({
			offset: startPage,
			limit: userLimitInPage,
		});

		res
			.status(200)
			.send({ page, userLimitInPage, totalUser, totalPage, userList });
	} catch (error) {
		res.status(500).send(error);
	}
};

const removeUser = async (req, res) => {
	try {
		const { id } = req.params;
		const { detailInfo } = req;
		await User.destroy({
			where: {
				id,
			},
		});
		res.status(200).send({
			message: "Xóa User thành công",
			detailInfo,
		});
	} catch (error) {
		res.status(500).send(error);
	}
};

const updateUser = (arrRole) => async (req, res) => {
	try {
		const { id } = req.params;
		const { email, fullName, phone, role } = req.body;
		const { user } = req;

		if (arrRole.includes(user.role)) {
			await User.update(
				{ email, fullName, phone, role },
				{
					where: {
						id,
					},
				},
			);
		} else {
			await User.update(
				{ email, fullName, phone },
				{
					where: {
						id,
					},
				},
			);
		}
		res.status(200).send({
			message: "Chỉnh sửa thông tin User thành công",
		});
	} catch (error) {
		res.status(500).send(error);
	}
};
const createUser = async (req, res) => {
	try {
		const { name, email, fullName, phone, password, role } = req.body;
		const salt = bcryptjs.genSaltSync(10);
		const hashPassword = bcryptjs.hashSync(password, salt);
		const newUser = await User.create({
			name,
			email,
			fullName,
			phone,
			password: hashPassword,
			role,
		});
		res.status(201).send(newUser);
	} catch (error) {
		res.status(500).send(error);
	}
};

const changePassword = async (req, res) => {
	try {
		const { id } = req.params;
		const { detailInfo } = req;
		const { passwordOld, passwordNew } = req.body;

		const isCheckPassword = bcryptjs.compareSync(
			passwordOld,
			detailInfo.password,
		);

		if (isCheckPassword) {
			const salt = bcryptjs.genSaltSync(10);
			const hashPassword = bcryptjs.hashSync(passwordNew, salt);
			await User.update(
				{ password: hashPassword },
				{
					where: {
						id,
					},
				},
			);
			res.status(200).send({
				message: "Mật khẩu đã được đổi",
			});
		} else {
			res.status(400).send({
				message: "Mật khẩu cũ không đúng",
			});
		}
	} catch (error) {
		res.status(500).send(error);
	}
};

const uploadAvatar = async (req, res) => {
	try {
		const { file, user } = req;

		const urlImage = `http://localhost:9000/${file.path}`;
		const userUploadImage = await User.findByPk(user.id);

		userUploadImage.avatar = urlImage;

		await userUploadImage.save();

		res.status(200).send({
			message: "Avatar đã được thay đổi",
			userUploadImage,
		});
	} catch (error) {
		res.status(500).send(error);
	}
};

const searchUserByName = async (req, res) => {
	try {
		const { name } = req.query;

		const userListSearch = await User.findAll({
			where: {
				name: {
					[Op.like]: `${name}%`,
				},
			},
		});

		res.status(200).send(userListSearch);
	} catch (error) {
		res.status(500).send(error);
	}
};

const searchUserByNamePagination = async (req, res) => {
	try {
		const { name } = req.query;
		let page = parseInt(req.query.page);
		let limit = parseInt(req.query.limit);

		const startPage = (page - 1) * limit;

		const totalUser = await User.count({
			where: {
				name: {
					[Op.like]: `${name}%`,
				},
			},
		});

		let totalPage = Math.floor(totalUser / limit);
		const mod = totalUser % limit;

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

		const userListSearch = await User.findAll({
			where: {
				name: {
					[Op.like]: `${name}%`,
				},
			},
			limit: limit,
			offset: startPage,
		});

		res.status(200).send({
			page,
			limit,
			totalUser,
			totalPage,
			userListSearch,
		});
	} catch (error) {
		res.status(500).send(error);
	}
};
module.exports = {
	getAllUser,
	getUserDetail,
	getAllUserByPagination,
	removeUser,
	updateUser,
	createUser,
	changePassword,
	uploadAvatar,
	searchUserByName,
	searchUserByNamePagination,
};
