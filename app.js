var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
let passport = require("passport");
let session = require("express-session");
var indexRouter = require("./routes/index");
var models = require("./models");
var flash = require("connect-flash");
require("./passport_setup")(passport);
var app = express();
var apps = express();
const appWs = require("express-ws")(apps);
var id = null;

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

app.use("/", indexRouter);

apps.ws("/", (ws, req) => {
  console.log("connected");

  ws.on("message", (msg) => {
    console.log(msg);
    if (msg == "id") {
      ws.send(id);
    } else if (msg.split(",").length == 5) {
      console.log(msg);
      models.PatientData.build({
        ecg: msg.split(",")[1],
        temp: msg.split(",")[2],
        patientId: msg.split(",")[0],
      }).save();

      ws.send("thank u");
    } else if (msg.split(":").length == 2) {
      id = msg.split(":")[1];
      console.log(id);
    }

    /* appWs.getWss().clients.forEach((client) => {
      client.send("data");
    }); */
  });
  ws.on("close", () => {
    console.log("disconnected");
    id = null;
    appWs.getWss().clients.forEach((client) => {
      client.send("done");
    });
  });
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
apps.listen(1337, () => console.log("Server has been started"));

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
