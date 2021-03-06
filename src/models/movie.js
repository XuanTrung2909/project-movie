"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Movie extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ Ticket, Cinema_movie }) {
			// define association here
			this.hasMany(Ticket, { foreignKey: "movieId", onDelete: "CASCADE" });
			this.hasMany(Cinema_movie, {
				foreignKey: "movieId",
				onDelete: "CASCADE",
			});
		}
	}
	Movie.init(
		{
			movieName: DataTypes.STRING,
			startDate: DataTypes.DATEONLY,
			time: DataTypes.INTEGER,
			evaluate: DataTypes.INTEGER,
			poster: DataTypes.STRING,
			trailer: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Movie",
		},
	);
	return Movie;
};
