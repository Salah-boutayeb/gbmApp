var express = require("express");
var router = express.Router();
var user = require("../controllers/user");
/* GET users listing. */

/* user auth pages */

router.get("/login", user.show_login);
router.get("/signup", user.show_signup);
router.post("/login", user.login);
router.post("/signup", user.signup);
router.post("/logout", user.logout);
router.get("/logout", user.logout);
/* GET home page. */
router.get("/", user.home);

module.exports = router;
