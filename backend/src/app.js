var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var apiRouter = require("./routes");
var recipesRoutes = require("./routes/recipes");
var ingredientsRoutes = require("./routes/ingredients");
var cors = require('cors')
var app = express()

app.use(cors())

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../../frontend/build")));

// express static staci
app.use("/api", apiRouter);
app.use("/recipes", recipesRoutes);
app.use("/ingredients", ingredientsRoutes);

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
