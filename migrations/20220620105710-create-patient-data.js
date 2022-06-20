"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PatientData", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ecg: {
        type: Sequelize.DOUBLE,
      },
      temp: {
        type: Sequelize.DOUBLE,
      },
      pcg: {
        type: Sequelize.DOUBLE,
      },
      spo2: {
        type: Sequelize.DOUBLE,
      },
      patientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          // User belongsTo Company 1:1
          model: "Patients",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("PatientData");
  },
};
