'use strict';
module.exports = {
	up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Burgers', {
      id: {allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
       burger_name: {
        type: Sequelize.STRING
      },