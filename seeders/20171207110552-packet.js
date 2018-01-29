'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Packets', [
      {
        packet_name: "Plan A",
        quota: 30
      },
      {
        packet_name: "Plan B",
        quota: 20
      },
      {
        packet_name: "Plan C",
        quota: 10
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
