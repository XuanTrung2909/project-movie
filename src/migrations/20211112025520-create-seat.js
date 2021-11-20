"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Seats", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			seatName: {
				type: Sequelize.STRING,
			},
			status: {
				type: Sequelize.BOOLEAN,
			},
			price: {
				type: Sequelize.INTEGER,
			},
			type: {
				type: Sequelize.STRING,
			},
			showtimeId: {
				type: Sequelize.INTEGER,
				onDelete: "CASCADE",
				references: {
					model: "Showtimes",
					key: "id",
				},
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Seats");
	},
};
