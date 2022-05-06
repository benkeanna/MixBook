const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const apiRouter = require("./routes");
const recipesRoutes = require("./routes/recipes");
const ingredientsRoutes = require("./routes/ingredients");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

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
