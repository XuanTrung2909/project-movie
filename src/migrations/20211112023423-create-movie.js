"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Movies", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			movieName: {
				type: Sequelize.STRING,
				unique: true,
			},
			startDate: {
				type: Sequelize.DATEONLY,
			},
			time: {
				type: Sequelize.INTEGER,
			},
			evaluate: {
				type: Sequelize.INTEGER,
			},
			poster: {
				type: Sequelize.STRING,
			},
			trailer: {
				type: Sequelize.STRING,
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
		await queryInterface.dropTable("Movies");
	},
};
