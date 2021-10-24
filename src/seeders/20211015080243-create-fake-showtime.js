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
			"Showtimes",
			[
				{
					id: 1,
					startTime: "2021-10-31 10:10:10",
					roomId: 1,
					createdAt: "2021-10-20 9:00:00",
					updatedAt: "2021-10-20 9:00:00",
				},
				{
					id: 2,
					startTime: "2021-10-31 10:10:10",
					roomId: 2,
					createdAt: "2021-10-20 9:00:00",
					updatedAt: "2021-10-20 9:00:00",
				},
				{
					id: 3,
					startTime: "2021-10-31 10:10:10",
					roomId: 3,
					createdAt: "2021-10-20 9:00:00",
					updatedAt: "2021-10-20 9:00:00",
				},
				{
					id: 4,
					startTime: "2021-10-31 10:10:10",
					roomId: 4,
					createdAt: "2021-10-20 9:00:00",
					updatedAt: "2021-10-20 9:00:00",
				},
				{
					id: 5,
					startTime: "2021-10-31 10:10:10",
					roomId: 5,
					createdAt: "2021-10-20 9:00:00",
					updatedAt: "2021-10-20 9:00:00",
				},
				{
					id: 6,
					startTime: "2021-10-31 12:10:10",
					roomId: 1,
					createdAt: "2021-10-20 9:00:00",
					updatedAt: "2021-10-20 9:00:00",
				},
				{
					id: 7,
					startTime: "2021-10-31 12:10:10",
					roomId: 2,
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

		await queryInterface.bulkDelete("Showtimes", null, {});
	},
};
