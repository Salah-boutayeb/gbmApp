"use strict";
const { Model } = require("sequelize");
var models = require("../models");
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  History.init(
    {
      asthme: DataTypes.BOOLEAN,
      cancer: DataTypes.BOOLEAN,
      cardiaque: DataTypes.BOOLEAN,
      diabete: DataTypes.BOOLEAN,
      hypArterielle: DataTypes.BOOLEAN,
      epilepsie: DataTypes.BOOLEAN,
      douleur: DataTypes.BOOLEAN,
      respiratoire: DataTypes.BOOLEAN,
      lymphatique: DataTypes.BOOLEAN,
      neurologique: DataTypes.BOOLEAN,
      psychiatrique: DataTypes.BOOLEAN,
      gastroIntestinal: DataTypes.BOOLEAN,
      genitoUrinaire: DataTypes.BOOLEAN,
      prisePoids: DataTypes.BOOLEAN,
      pertePoids: DataTypes.BOOLEAN,
      musculo: DataTypes.BOOLEAN,
      patientId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "History",
    }
  );
  History.associate = function (models) {
    History.belongsTo(models.Patient, {
      foreignKey: "patientId",
      as: "patient",
      onDelete: "cascade",
    });
  };
  return History;
};
