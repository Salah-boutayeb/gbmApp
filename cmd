sequelize model:generate --name Patient --attributes nom:STRING,prenom:STRING,CIN:STRING,sexe:BOOLEAN,adresse:STRING,tele:STRING,status:STRING 
sequelize model:generate --name History --attributes asthme:BOOLEAN,cancer:BOOLEAN,cardiaque:BOOLEAN, diabete:BOOLEAN,hypArterielle:BOOLEAN, epilepsie:BOOLEAN, douleur:BOOLEAN,respiratoire:BOOLEAN, lymphatique:BOOLEAN, neurologique:BOOLEAN, psychiatrique:BOOLEAN, gastroIntestinal:BOOLEAN, genitoUrinaire:BOOLEAN,prisePoids:BOOLEAN, pertePoids:BOOLEAN,musculo:BOOLEAN,patientId:INTEGER       
sequelize model:generate --name PatientData --attributes ecg:DOUBLE , temp:DOUBLE ,patientId:INTEGER

"Douleur à la poitrine","Respiratoire","Maladies cardiaques","Cardiovasculaire",
"Hématologique","Lymphatique","Neurologique","Psychiatrique",
"Gastro-intestinal","Génito-urinaire","Prise de poids", "Perte de poids","Musculo-squelettique"



'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom: {
        type: Sequelize.STRING
      },
      prenom: {
        type: Sequelize.STRING
      },
      CIN: {
        type: Sequelize.STRING
      },
      sexe: {
        type: Sequelize.BOOLEAN
      },
      adresse: {
        type: Sequelize.STRING
      },
      tele: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Patients');
  }
};



"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Histories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      asthme: {
        type: Sequelize.BOOLEAN,
      },
      cancer: {
        type: Sequelize.BOOLEAN,
      },
      cardiaque: {
        type: Sequelize.BOOLEAN,
      },
      diabete: {
        type: Sequelize.BOOLEAN,
      },
      hypArterielle: {
        type: Sequelize.BOOLEAN,
      },
      epilepsie: {
        type: Sequelize.BOOLEAN,
      },
      douleur: {
        type: Sequelize.BOOLEAN,
      },
      respiratoire: {
        type: Sequelize.BOOLEAN,
      },
      lymphatique: {
        type: Sequelize.BOOLEAN,
      },
      neurologique: {
        type: Sequelize.BOOLEAN,
      },
      psychiatrique: {
        type: Sequelize.BOOLEAN,
      },
      gastroIntestinal: {
        type: Sequelize.BOOLEAN,
      },
      genitoUrinaire: {
        type: Sequelize.BOOLEAN,
      },
      prisePoids: {
        type: Sequelize.BOOLEAN,
      },
      pertePoids: {
        type: Sequelize.BOOLEAN,
      },
      musculo: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("Histories");
  },
};


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
