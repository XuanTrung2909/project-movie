"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ Ticket }) {
			// define association here
			this.hasMany(Ticket, { foreignKey: "userId", onDelete: "CASCADE" });
		}
	}
	User.init(
		{
			userName: DataTypes.STRING,
			email: DataTypes.STRING,
			fullName: DataTypes.STRING,
			phone: DataTypes.STRING,
			password: DataTypes.STRING,
			avatar: DataTypes.STRING,
			role: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "User",
		},
	);
	return User;
};
