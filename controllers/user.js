const passport = require("passport");
const models = require("../models");
const bcrypt = require("bcrypt");
const mypassport = require("../passport_setup")(passport);
const generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
exports.show_login = (req, res, next) => {
  res.render("user/login", { formData: {}, errors: {} });
};

exports.show_signup = (req, res, next) => {
  res.render("user/register", { formData: {}, errors: {} });
};
exports.home = (req, res, next) => {
  if (req.user) {
    res.render("base", { user: req.user });
  } else {
    res.redirect("/login");
  }
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
  res.redirect("/patient");
};
exports.show_patient = (req, res, next) => {
  var issues = [
    ["Asthme", "Cancer", "Maladies cardiaques", "Diabète"],
    ["Hypertension artérielle", "Trouble psychiatrique", "Epilepsie"],
    [
      "Douleur à la poitrine",
      "Respiratoire",
      "Maladies cardiaques",
      "Cardiovasculaire",
    ],
    ["Hématologique", "Lymphatique", "Neurologique", "Psychiatrique"],
    [
      "Gastro-intestinal",
      "Génito-urinaire",
      "Prise de poids",
      "Perte de poids",
    ],
    ["Musculo-squelettique"],
  ];
  res.render("patient/patientInfo", { issues: issues });
  //res.render("patient/graphs");
};
exports.show_patients = (req, res, next) => {
  res.render("patient/patients");
};
exports.deletePatient = (req, res, next) => {
  console.log(req.body);
};
exports.updatePatient = (req, res, next) => {};
