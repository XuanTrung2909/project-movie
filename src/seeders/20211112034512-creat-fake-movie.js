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
          startDate: "2021-11-30",
          time: 2,
          evaluate: 1,
          poster: "123456",
          trailer: "999999999",
          createdAt: "2021-11-10 10:00:00",
          updatedAt: "2021-11-10 10:00:00",
        },
        {
          id: 2,
          name: "Dragon Ball",
          startDate: "2021-11-30",
          time: 2,
          evaluate: 1,
          poster: "123456",
          trailer: "999999999",
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
     * await queryInterface.bulkDelete('Movies', null, {});
     */
    await queryInterface.bulkDelete("Movies", null, {});
  },
};
