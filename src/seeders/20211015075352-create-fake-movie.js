"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */

		await queryInterface.bulkInsert(
			"Movies",
			[
				{
					id: 1,
					name: "One Piece",
					startDate: "2021-10-31",
					time: 2,
					evaluate: 1,
					poster: "#",
					createdAt: "2021-10-10 10:10:10",
					updatedAt: "2021-10-10 10:10:10",
				},
				{
					id: 2,
					name: "Dragon Ball",
					startDate: "2021-10-30",
					time: 3,
					evaluate: 2,
					poster: "#",
					createdAt: "2021-10-10 10:10:10",
					updatedAt: "2021-10-10 10:10:10",
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete("Movies", null, {});
	},
};
