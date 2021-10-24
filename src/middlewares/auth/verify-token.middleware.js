const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
	try {
		const token = req.header("token");
		const secretKey = "XuanTrung";
		const decode = jwt.verify(token, secretKey);
		req.user = decode;
		next();
	} catch (error) {
		res.send({ message: "Bạn chưa đăng nhập" });
	}
};

const authorize = (arrRole) => async (req, res, next) => {
	try {
		const { user } = req;
		if (arrRole.includes(user.role)) {
			next();
		} else {
			res.status(401).send({
				message: "không có quyền thực hiện",
			});
		}
	} catch (error) {
		res.status(500).send(error);
	}
};

module.exports = {
	authentication,
	authorize,
};
