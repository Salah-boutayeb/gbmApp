"use strict";
const { Model } = require("sequelize");
var models = require("../models");
module.exports = (sequelize, DataTypes) => {
  class PatientData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PatientData.init(
    {
      ecg: DataTypes.DOUBLE,
      temp: DataTypes.DOUBLE,
      patientId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PatientData",
    }
  );
  PatientData.associate = function (models) {
    PatientData.belongsTo(models.Patient, {
      foreignKey: "patientId",
      as: "patient",
    });
  };
  return PatientData;
};
