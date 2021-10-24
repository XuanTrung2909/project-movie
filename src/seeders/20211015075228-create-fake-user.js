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
			"Users",
			[
				{
					id: 1,
					name: "xuantrung",
					email: "trung@gmail.com",
					fullName: "Nguyễn Xuân Trung",
					phone: "1111111111",
					password: "123456",
					role: "ADMIN",
					avatar: "1111111111",
					createdAt: "2021-10-10 10:10:10",
					updatedAt: "2021-10-10 10:10:10",
				},
				{
					id: 2,
					name: "thuyan",
					email: "an@gmail.com",
					fullName: "Nguyễn Thị Thúy An",
					phone: "2222222222",
					password: "123456",
					role: "CLIENT",
					avatar: "2222222222",
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
		await queryInterface.bulkDelete("Users", null, {});
	},
};
