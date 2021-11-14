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
          name: "trung",
          email: "trung@gmail.com",
          fullName: "Trung",
          phone: "9999999999",
          password: "123456",
          avatar: "999999999",
          role: "CLIENT",
          createdAt: "2021-11-10 10:00:00",
          updatedAt: "2021-11-10 10:00:00",
        },
        {
          id: 2,
          name: "thuyan",
          email: "thuya@gmail.com",
          fullName: "An",
          phone: "9999999999",
          password: "123456",
          avatar: "999999999",
          role: "CLIENT",
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
    await queryInterface.bulkDelete("Users", null, {});
  },
};
