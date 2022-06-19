const passport = require("passport");
const models = require("../models");
const bcrypt = require("bcrypt");
const mypassport = require("../passport_setup")(passport);
exports.isAuthenticated = () => {
  if (req.isAuthenticated()) return true;
  return false;
};
const generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
exports.show_login = (req, res, next) => {
  res.locals.user = null
  res.render("user/login", { errors: {} });
};

exports.show_signup = (req, res, next) => {
  res.render("user/register", { errors: {} });
};
exports.home = async (req, res, next) => {
  let user = await models.User.findOne({
    where: { id: req.user.id },
  });
  res.render("", { data: user });
};
exports.signup = (req, res, next) => {
  console.log(req.body);
  const newUser = models.User.build({
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    password: generateHash(req.body.password),
  });
  return newUser.save().then((result) => {
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/signup",
      failureFlash: true,
    })(req, res, next);
  });
};
exports.login = (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })(req, res, next);
};
exports.logout = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    req.session.destroy();
    res.redirect("/");
  });
};

/* patient controllers */
exports.createPatient = (req, res, next) => {
  console.log(req.body);

  var newP = models.Patient.build({
    nom: req.body.nom,
    prenom: req.body.prenom,
    CIN: req.body.CIN,
    sexe: req.body.sexe,
    adresse: req.body.adresse,
    tele: req.body.telephone,
    status: req.body.status,
  })
    .save()
    .then((findedUser) => {
      console.log("oneeeeeee", findedUser.dataValues.id);
      models.History.build({
        asthme: req.body.Asthme ? true : false,
        cancer: req.body.Cancer ? true : false,
        cardiaque: req.body.Maladiescardiaques ? true : false,
        diabete: req.body.Diabete ? true : false,
        hypArterielle: req.body.AsHypertensionarteriellethme ? true : false,
        epilepsie: req.body.Epilepsie ? true : false,
        douleur: req.body.Douleuralapoitrine ? true : false,
        respiratoire: req.body.Respiratoire ? true : false,
        lymphatique: req.body.Lymphatique ? true : false,
        neurologique: req.body.Neurologique ? true : false,
        psychiatrique: req.body.Psychiatrique ? true : false,
        gastroIntestinal: req.body.Gastrointestinal ? true : false,
        genitoUrinaire: req.body.Genitourinaire ? true : false,
        prisePoids: req.body.Prisedepoids ? true : false,
        pertePoids: req.body.Pertedepoids ? true : false,
        musculo: req.body.Musculosquelettique ? true : false,

        patientId: findedUser.dataValues.id,
      }).save();
    });

  console.log(newP.id);
  res.redirect("/patients");
};
exports.show_patient = async (req, res, next) => {
  let user = await models.User.findOne({
    where: { id: req.user.id },
  });
  var issues = [
    ["Asthme", "Cancer", "Maladies cardiaques", "Diabete"],
    [
      "Hypertension arterielle",
      "Trouble psychiatrique",
      "Epilepsie",
      "Musculo squelettique",
    ],
    [
      "Douleur a la poitrine",
      "Respiratoire",
      "Maladies cardiaques",
      "Cardio vasculaire",
    ],
    ["Hematologique", "Lymphatique", "Neurologique", "Psychiatrique"],
    [
      "Gastro intestinal",
      "Genito urinaire",
      "Prise de poids",
      "Perte de poids",
    ],
  ];
  res.render("patient/patientInfo", { issues: issues, user: user });
  //res.render("patient/graphs");
};
exports.show_patients = async (req, res, next) => {
  let user = await models.User.findOne({
    where: { id: req.user.id },
  });
  let patients = await models.Patient.findAll();
  res.render("patient/patients", {
    patients: patients,
    user: user,
  });
};
exports.deletePatient = async (req, res, next) => {
  await models.Patient.destroy({
    where: { id: req.body.id },
  }).then((numberRows) => {
    console.log(`${numberRows} Patient rows deleted`);

    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ deleted: numberRows > 0 }));
  });
};
exports.updatePatient = (req, res, next) => {};
exports.show_graphs = async (req, res, next) => {
  let user = await models.User.findOne({
    where: { id: req.user.id },
  });
  console.log(user);
  let patient = await models.Patient.findOne({
    where: { id: req.params.id },
  });

  res.render("patient/graphs", {
    patient: patient.dataValues,
    user: user,
  });
};
