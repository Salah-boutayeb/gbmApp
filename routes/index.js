var express = require("express");
var router = express.Router();
var user = require("../controllers/user");
/* GET users listing. */

/* user auth pages */
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  else res.redirect("/login");
}
exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  else res.redirect("/login");
};
router.get("/login", user.show_login);
router.get("/signup", user.show_signup);
router.post("/login", user.login);
router.post("/signup", user.signup);
router.post("/logout", user.logout);
router.get("/logout", user.logout);
/* GET home page. */
router.get("/", ensureAuthenticated, user.show_patients);
router.get("/patients", ensureAuthenticated, user.show_patients);
router.get("/patient", ensureAuthenticated, user.show_patient);
router.post("/addpatient", ensureAuthenticated, user.createPatient);
router.post("/deletePatient", ensureAuthenticated, user.deletePatient);
router.get("/graphs/:id", ensureAuthenticated, user.show_graphs);

module.exports = router;
