const jwt = require("jsonwebtoken");

const tokenGenerate = (id, name, email, fullName, phone, role, avatar) => {
	const payload = {
		id,
		name,
		email,
		fullName,
		phone,
		role,
		avatar,
	};
	const secretKey = "XuanTrung";

	const token = jwt.sign(payload, secretKey, {
		expiresIn: 60 * 60 * 24 * 30 * 6,
	});
	return token;
};

module.exports = {
	tokenGenerate,
};
