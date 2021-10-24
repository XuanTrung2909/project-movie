const { User } = require("../../models");

const checkExistForCreatUser = async (req, res, next) => {
	try {
		const { name, email } = req.body;
		const isName = await User.findOne({
			where: {
				name,
			},
		});
		const isEmail = await User.findOne({
			where: {
				email,
			},
		});
		if (isName) {
			res.status(400).send({
				message: "Tài khoản đã tồn tại",
			});
		} else if (isEmail) {
			res.status(400).send({
				message: "Email đã tồn tại",
			});
		} else {
			next();
		}
	} catch (error) {
		res.status(500).send(error);
	}
};

const checkExist = (model) => async (req, res, next) => {
	try {
		const { id } = req.params;

		const detail = await model.findByPk(id);

		if (detail) {
			req.detailInfo = detail;
			next();
		} else {
			res.status(404).send({
				message: ` không tồn tại`,
			});
		}
	} catch (error) {
		res.status(500).send(error);
	}
};

module.exports = {
	checkExistForCreatUser,
	checkExist,
};
