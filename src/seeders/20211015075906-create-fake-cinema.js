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
			"Cinemas",
			[
				{
					id: 1,
					name: "BHD-Bitexco",
					address: "L3-Bitexco, 2 Hải Triều, Q1",
					image: "Bitexco",
					cineplexId: 1,
					createdAt: "2021-10-20 9:00:00",
					updatedAt: "2021-10-20 9:00:00",
				},
				{
					id: 2,
					name: "BHD-Vincom Lê Văn Việt",
					address: "Vincom Plaza, Lê Văn Việt, Q9",
					image: "Vincom Plaza",
					cineplexId: 1,
					createdAt: "2021-10-20 9:00:00",
					updatedAt: "2021-10-20 9:00:00",
				},
				{
					id: 3,
					name: "CGV-Aeon Bình Tân",
					address: "Đường 17, Bình Trị Đông, Bình Tân",
					image: "Aeon Mall Bình Tân",
					cineplexId: 2,
					createdAt: "2021-10-20 9:00:00",
					updatedAt: "2021-10-20 9:00:00",
				},
				{
					id: 4,
					name: "CGV-Aeon Tân Phú",
					address: "30 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú",
					image: "Aeon Mall Tân Phú",
					cineplexId: 2,
					createdAt: "2021-10-20 9:00:00",
					updatedAt: "2021-10-20 9:00:00",
				},
				{
					id: 5,
					name: "LOTTE-Cantavil",
					address: "L7-Cantavil Premier, Xa Lộ Hà Nội, Q2",
					image: "Cantavil Premier",
					cineplexId: 3,
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
		await queryInterface.bulkDelete("Cinemas", null, {});
	},
};
