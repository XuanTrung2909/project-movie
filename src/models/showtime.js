"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Showtime extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ Room }) {
			// define association here
			this.belongsTo(Room, { foreignKey: "roomId" });
		}
	}
	Showtime.init(
		{
			startTime: DataTypes.DATE,
			roomId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Showtime",
		},
	);
	return Showtime;
};
