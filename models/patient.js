"use strict";
const { Model } = require("sequelize");
var models = require("../models");
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Patient.init(
    {
      nom: DataTypes.STRING,
      prenom: DataTypes.STRING,
      CIN: DataTypes.STRING,
      sexe: DataTypes.BOOLEAN,
      adresse: DataTypes.STRING,
      tele: DataTypes.STRING,
      status: DataTypes.STRING,
      datenaissance: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Patient",
    }
  );
  Patient.associate = function (models) {
    Patient.hasMany(models.PatientData, {
      foreignKey: "patientDataId",
      as: "patientData",
      onDelete: "cascade",
    });
  };

  return Patient;
};
