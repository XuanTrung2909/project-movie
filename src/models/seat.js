"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Seat extends Model {
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
	Seat.init(
		{
			name: DataTypes.STRING,
			status: DataTypes.BOOLEAN,
			price: DataTypes.INTEGER,
			type: DataTypes.STRING,
			roomId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Seat",
		},
	);
	return Seat;
};
