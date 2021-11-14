"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('Cinemas', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Cinemas",
      [
        {
          id: 1,
          name: "CGV - Aeon Bình Tân",
          address:
            "Tầng 3, TTTM Aeon Mall Bình Tân, Số 1 Đường số 17A, Kp 11, Bình Trị Đông B, Bình Tân",
          image: "cgv",
          cineplexId: 1,
          createdAt: "2021-11-10 10:00:00",
          updatedAt: "2021-11-10 10:00:00",
        },
        {
          id: 2,
          name: "CGV - Aeon Tân Phú",
          address: "30 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú",
          image: "cgv",
          cineplexId: 1,
          createdAt: "2021-11-10 10:00:00",
          updatedAt: "2021-11-10 10:00:00",
        },
        {
          id: 3,
          name: "BHD - Bitexco",
          address: "L3 - Bitexco Icon 68, 2 Hải Triều, Q1",
          image: "bhd",
          cineplexId: 2,
          createdAt: "2021-11-10 10:00:00",
          updatedAt: "2021-11-10 10:00:00",
        },
        {
          id: 4,
          name: "BHD - Vincom Lê Văn Việt",
          address: "L4 - Vincom Plaza, 50 Lê Văn Việt, Q9",
          image: "bhd",
          cineplexId: 2,
          createdAt: "2021-11-10 10:00:00",
          updatedAt: "2021-11-10 10:00:00",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Cinemas', null, {});
     */
    await queryInterface.bulkDelete("Cinemas", null, {});
  },
};
