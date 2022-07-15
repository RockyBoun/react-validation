const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const passport = require("passport"); // authentication

module.exports = () => {
  const app = express();
  app.use(cors());
  app.use(morgan("dev"));
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      limit: "50mb",
      extended: true,
      parameterLimit: 1000,
    })
  );
  app.use(passport.initialize());
  require("../../middleware/passport")(passport);
  require("../routes")(app);
  return app;
};
