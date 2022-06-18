sequelize model:generate --name Patient --attributes nom:STRING,prenom:STRING,CIN:STRING,sexe:BOOLEAN,adresse:STRING,tele:STRING,status:STRING 
sequelize model:generate --name History --attributes asthme:BOOLEAN,cancer:BOOLEAN,cardiaque:BOOLEAN, diabete:BOOLEAN,hypArterielle:BOOLEAN, epilepsie:BOOLEAN, douleur:BOOLEAN,respiratoire:BOOLEAN, lymphatique:BOOLEAN, neurologique:BOOLEAN, psychiatrique:BOOLEAN, gastroIntestinal:BOOLEAN, genitoUrinaire:BOOLEAN,prisePoids:BOOLEAN, pertePoids:BOOLEAN,musculo:BOOLEAN,patientId:INTEGER       
sequelize model:generate --name PatientData --attributes ecg:DOUBLE , temp:DOUBLE ,patientId:INTEGER

"Douleur à la poitrine","Respiratoire","Maladies cardiaques","Cardiovasculaire",
"Hématologique","Lymphatique","Neurologique","Psychiatrique",
"Gastro-intestinal","Génito-urinaire","Prise de poids", "Perte de poids","Musculo-squelettique"
