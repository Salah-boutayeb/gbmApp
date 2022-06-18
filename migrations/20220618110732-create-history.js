'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      asthme: {
        type: Sequelize.BOOLEAN
      },
      cancer: {
        type: Sequelize.BOOLEAN
      },
      cardiaque: {
        type: Sequelize.BOOLEAN
      },
      diabete: {
        type: Sequelize.BOOLEAN
      },
      hypArterielle: {
        type: Sequelize.BOOLEAN
      },
      epilepsie: {
        type: Sequelize.BOOLEAN
      },
      douleur: {
        type: Sequelize.BOOLEAN
      },
      respiratoire: {
        type: Sequelize.BOOLEAN
      },
      lymphatique: {
        type: Sequelize.BOOLEAN
      },
      neurologique: {
        type: Sequelize.BOOLEAN
      },
      psychiatrique: {
        type: Sequelize.BOOLEAN
      },
      gastroIntestinal: {
        type: Sequelize.BOOLEAN
      },
      genitoUrinaire: {
        type: Sequelize.BOOLEAN
      },
      prisePoids: {
        type: Sequelize.BOOLEAN
      },
      pertePoids: {
        type: Sequelize.BOOLEAN
      },
      musculo: {
        type: Sequelize.BOOLEAN
      },
      patientId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Histories');
  }
};