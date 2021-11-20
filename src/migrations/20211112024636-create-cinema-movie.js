"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Cinema_movies", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			cinemaId: {
				type: Sequelize.INTEGER,
				onDelete: "CASCADE",
				references: {
					model: "Cinemas",
					key: "id",
				},
			},
			movieId: {
				type: Sequelize.INTEGER,
				onDelete: "CASCADE",
				references: {
					model: "Movies",
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
		await queryInterface.dropTable("Cinema_movies");
	},
};
