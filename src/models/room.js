"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Room extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ Cinema, Showtime, Seat }) {
			// define association here
			this.belongsTo(Cinema, { foreignKey: "cinemaId" });
			this.hasMany(Showtime, { foreignKey: "roomId" });
			this.hasMany(Seat, { foreignKey: "roomId" });
		}
	}
	Room.init(
		{
			name: DataTypes.STRING,
			cinemaId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Room",
		},
	);
	return Room;
};
