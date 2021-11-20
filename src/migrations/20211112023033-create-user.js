"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			userName: {
				type: Sequelize.STRING,
				unique: true,
			},
			email: {
				type: Sequelize.STRING,
				unique: true,
			},
			fullName: {
				type: Sequelize.STRING,
			},
			phone: {
				type: Sequelize.STRING,
			},
			password: {
				type: Sequelize.STRING,
			},
			avatar: {
				type: Sequelize.STRING,
			},
			role: {
				type: Sequelize.STRING,
				defaultValue: "CLIENT",
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
		await queryInterface.dropTable("Users");
	},
};
