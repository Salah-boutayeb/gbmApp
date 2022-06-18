var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
let passport = require("passport");
let session = require("express-session");
var indexRouter = require("./routes/index");

var flash = require("connect-flash");
require("./passport_setup")(passport);
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({ secret: "our new secret", resave: true, saveUninitialized: true })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
/* app.use(function (request, response, next) {
  response.locals.success_alert_message = request.flash(
    "success_alert_message"
  );
  response.locals.error_message = request.flash("error_message");
  response.locals.error = request.flash("error");
  next();
}); */

app.use("/", indexRouter);
//app.use("/patients", patientsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
