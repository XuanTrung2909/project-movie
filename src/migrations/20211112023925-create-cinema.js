"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Cinemas", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			cinemaName: {
				type: Sequelize.STRING,
				unique: true,
			},
			address: {
				type: Sequelize.STRING,
			},
			image: {
				type: Sequelize.STRING,
			},
			cineplexId: {
				type: Sequelize.INTEGER,
				onDelete: "CASCADE",
				references: {
					model: "Cineplexes",
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
		await queryInterface.dropTable("Cinemas");
	},
};
