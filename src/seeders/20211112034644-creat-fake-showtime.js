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
          startTime: "2021-11-30 10:00:00",
          cinemaId: 1,
          createdAt: "2021-11-10 10:00:00",
          updatedAt: "2021-11-10 10:00:00",
        },
        {
          id: 2,
          startTime: "2021-11-30 10:00:00",
          cinemaId: 2,
          createdAt: "2021-11-10 10:00:00",
          updatedAt: "2021-11-10 10:00:00",
        },
        {
          id: 3,
          startTime: "2021-11-30 10:00:00",
          cinemaId: 3,
          createdAt: "2021-11-10 10:00:00",
          updatedAt: "2021-11-10 10:00:00",
        },
        {
          id: 4,
          startTime: "2021-11-30 10:00:00",
          cinemaId: 4,
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
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Showtimes", null, {});
  },
};
