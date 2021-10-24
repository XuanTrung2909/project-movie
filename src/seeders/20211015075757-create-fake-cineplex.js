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
			"Cineplexes",
			[
				{
					id: 1,
					name: "BHD",
					logo: "BHD",
					createdAt: "2021-10-20 9:00:00",
					updatedAt: "2021-10-20 9:00:00",
				},
				{
					id: 2,
					name: "CGV",
					logo: "CGV",
					createdAt: "2021-10-20 9:00:00",
					updatedAt: "2021-10-20 9:00:00",
				},
				{
					id: 3,
					name: "LOTTE",
					logo: "LOTTE",
					createdAt: "2021-10-20 9:00:00",
					updatedAt: "2021-10-20 9:00:00",
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
		await queryInterface.bulkDelete("Cineplexes", null, {});
	},
};
