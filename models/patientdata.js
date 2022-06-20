"use strict";
const { Model } = require("sequelize");
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
      pcg: DataTypes.DOUBLE,
      spo2: DataTypes.DOUBLE,
      patientId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PatientData",
    }
  );
  return PatientData;
};
