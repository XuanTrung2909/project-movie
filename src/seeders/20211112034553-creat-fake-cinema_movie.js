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
      "Cinema_movies",
      [
        {
          id: 1,
          cinemaId: 1,
          movieId: 1,
          createdAt: "2021-11-10 10:00:00",
          updatedAt: "2021-11-10 10:00:00",
        },
        {
          id: 2,
          cinemaId: 2,
          movieId: 2,
          createdAt: "2021-11-10 10:00:00",
          updatedAt: "2021-11-10 10:00:00",
        },
        {
          id: 3,
          cinemaId: 3,
          movieId: 1,
          createdAt: "2021-11-10 10:00:00",
          updatedAt: "2021-11-10 10:00:00",
        },
        {
          id: 4,
          cinemaId: 4,
          movieId: 2,
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
     * await queryInterface.bulkDelete('Cinema_movies', null, {});
     */
    await queryInterface.bulkDelete("Cinema_movies", null, {});
  },
};
