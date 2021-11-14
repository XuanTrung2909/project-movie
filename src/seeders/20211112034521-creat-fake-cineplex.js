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
          name: "CGV",
          logo: "logo",
          createdAt: "2021-11-10 10:00:00",
          updatedAt: "2021-11-10 10:00:00",
        },
        {
          id: 2,
          name: "BHD",
          logo: "logo",
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
     * await queryInterface.bulkDelete('Cineplexes', null, {});
     */
    await queryInterface.bulkDelete("Cineplexes", null, {});
  },
};
