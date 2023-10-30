'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories',
      ['Chinese Cuisine', 'Japanese Cuisine', 'Italian Cuisine', 'Mexican Cuisine', 'Vegetarian Cuisine', 'American Cuisine', 'Fusion Cuisine']
        .map(item => {
          return {
            name: item,
            created_at: new Date(),
            updated_at: new Date()
          }
        }
        ), {})
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', {})
  }
}
