'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      user_id: {
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE', // Se o id do usuário for alterado, o id tb será alterado no appointment
        onDelete: 'CASCADE', // Se um usuário for deletado o appointment será deletado
        type: Sequelize.INTEGER
      },
      provider_id: {
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE', // Se o id do usuário for alterado, o id tb será alterado no appointment
        onDelete: 'CASCADE', // Se um usuário for deletado o appointment será deletado
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('appointments')
  }
}
