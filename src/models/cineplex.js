"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Cineplex extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ Cinema }) {
			// define association here
			this.hasMany(Cinema, { foreignKey: "cineplexId", onDelete: "CASCADE" });
		}
	}
	Cineplex.init(
		{
			cineplexName: DataTypes.STRING,
			logo: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Cineplex",
		},
	);
	return Cineplex;
};
