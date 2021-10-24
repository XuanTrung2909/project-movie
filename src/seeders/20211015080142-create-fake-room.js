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
			"Rooms",
			[
				{
					id: 1,
					name: "Rạp 1",
					cinemaId: 1,
					createdAt: "2021-10-20 9:00:00",
					updatedAt: "2021-10-20 9:00:00",
				},
				{
					id: 2,
					name: "Rạp 2",
					cinemaId: 1,
					createdAt: "2021-10-20 9:00:00",
					updatedAt: "2021-10-20 9:00:00",
				},
				{
					id: 3,
					name: "Rạp 1",
					cinemaId: 2,
					createdAt: "2021-10-20 9:00:00",
					updatedAt: "2021-10-20 9:00:00",
				},
				{
					id: 4,
					name: "Rạp 2",
					cinemaId: 2,
					createdAt: "2021-10-20 9:00:00",
					updatedAt: "2021-10-20 9:00:00",
				},
				{
					id: 5,
					name: "Rạp 1",
					cinemaId: 3,
					createdAt: "2021-10-20 9:00:00",
					updatedAt: "2021-10-20 9:00:00",
				},
				{
					id: 6,
					name: "Rạp 2",
					cinemaId: 3,
					createdAt: "2021-10-20 9:00:00",
					updatedAt: "2021-10-20 9:00:00",
				},
				{
					id: 7,
					name: "Rạp 1",
					cinemaId: 4,
					createdAt: "2021-10-20 9:00:00",
					updatedAt: "2021-10-20 9:00:00",
				},
				{
					id: 8,
					name: "Rạp 2",
					cinemaId: 4,
					createdAt: "2021-10-20 9:00:00",
					updatedAt: "2021-10-20 9:00:00",
				},
				{
					id: 9,
					name: "Rạp 1",
					cinemaId: 5,
					createdAt: "2021-10-20 9:00:00",
					updatedAt: "2021-10-20 9:00:00",
				},
				{
					id: 10,
					name: "Rạp 2",
					cinemaId: 5,
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

		await queryInterface.bulkDelete("Rooms", null, {});
	},
};
