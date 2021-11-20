"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Cinema extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ Cinema_movie, Cineplex, Showtime }) {
			// define association here
			this.hasMany(Cinema_movie, {
				foreignKey: "cinemaId",
				onDelete: "CASCADE",
			});
			this.belongsTo(Cineplex, { foreignKey: "cineplexId" });
			this.hasMany(Showtime, { foreignKey: "cinemaId", onDelete: "CASCADE" });
		}
	}
	Cinema.init(
		{
			cinemaName: DataTypes.STRING,
			address: DataTypes.STRING,
			image: DataTypes.STRING,
			cineplexId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Cinema",
		},
	);
	return Cinema;
};
